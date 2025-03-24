# Domain Configuration Guide for Vercel

This guide explains how to fix issues when your custom domain isn't displaying the same content as your Vercel-hosted domain.

## Problem

You have two domains in Vercel:
1. A Vercel default domain (yourdomain.vercel.app)
2. A custom domain you purchased (example.com)

The custom domain isn't showing the latest changes or icons that appear correctly on the Vercel domain.

## Solution

### 1. Ensure both domains are configured correctly in Vercel

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Go to **Settings > Domains**
4. Verify both domains are listed and show "Valid Configuration"
5. If you see any errors, follow Vercel's suggestions to fix the configuration

### 2. Check DNS configuration

Make sure your custom domain's DNS records are correctly pointing to Vercel:

- If using Vercel as your DNS provider: Make sure you've transferred the nameservers
- If using an external DNS provider: Make sure you have the correct A, AAAA, or CNAME records

### 3. Force a new deployment

Run the included script to force a new deployment:

```bash
# With default commit message "Update portfolio site"
./deploy.sh

# Or with a custom commit message
./deploy.sh "Fix domain configuration and icons"
```

The script handles:
- Adding all changed files
- Creating a commit with your message (or default message)
- Pushing to your repository
- Triggering a new Vercel deployment

### 4. Purge the CDN cache

If your domain is still showing old content:

1. Go to **Settings > Advanced** in your Vercel project
2. Find the "Purge Cache" section
3. Select "All Domains" and click "Purge All"

### 5. Wait for DNS propagation

DNS changes can take up to 48 hours to fully propagate. In most cases, they should take effect within a few hours.

## Additional Tips

- Use [whatsmydns.net](https://www.whatsmydns.net/) to check if your DNS has propagated
- Make sure all asset paths in your code are relative (using `./`) instead of absolute paths
- Check your browser cache - try viewing your site in incognito/private mode
- If you've made changes to your site, always run the deployment script to ensure both domains receive the updates

If issues persist after 48 hours, contact Vercel support. 