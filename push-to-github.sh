#!/usr/bin/env bash
# push-to-github.sh
# Usage: Edit REMOTE_URL below (or pass as first arg), then run:
#   bash push-to-github.sh
# This script only runs locally in your environment — it will NOT run on GitHub from here.

set -euo pipefail

REMOTE_URL=${1:-"https://github.com/your-username/your-repo.git"}
BRANCH=${2:-main}

echo "Using remote: $REMOTE_URL"

echo "1) Initialize local repo (if not already):"
if [ ! -d .git ]; then
  git init
  echo "Initialized empty git repository."
else
  echo "Git repository already initialized."
fi

echo "2) Ensure user config is set (you can change these):"
# Only set if not set
git config user.name || git config user.name "Your Name"
git config user.email || git config user.email "you@example.com"

echo "3) Add files and commit"
git add .
# If there's no commit yet, create one; otherwise create a new commit
if git rev-parse --verify HEAD >/dev/null 2>&1; then
  git commit -m "Update site files" || echo "No changes to commit"
else
  git commit -m "first commit"
fi

echo "4) Create branch: $BRANCH"
git branch -M "$BRANCH"

echo "5) Add remote origin"
if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' already exists. Updating to $REMOTE_URL"
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

echo "6) Push to remote (you will be prompted to authenticate if required)"
git push -u origin "$BRANCH"

echo "Done. Repository pushed to $REMOTE_URL on branch $BRANCH"

echo "If you want the repo to be created automatically and you have GitHub CLI (gh) installed, you can instead run:"
echo "  gh repo create <repo-name> --public --source=. --remote=origin --push"

# End of script
