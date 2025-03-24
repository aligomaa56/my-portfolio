#!/bin/bash

# Get commit message from first argument or use default
COMMIT_MSG=${1:-"Update portfolio site"}

echo "Preparing to deploy portfolio to Vercel..."
echo "Commit message: $COMMIT_MSG"
echo "Deploying with latest changes..."

git add .
git commit -m "$COMMIT_MSG"
git push

echo "Deployment complete! Changes should be live in a few minutes."
