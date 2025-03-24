#!/bin/bash
echo "Preparing to deploy portfolio to Vercel..."
echo "Deploying with latest changes..."
git add .
git commit -m "Update icon paths and domain configuration"
git push
