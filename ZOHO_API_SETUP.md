# Zoho Mail API Setup Guide

## Step 1: Create Zoho API Application

1. **Go to Zoho API Console:**
   - Visit: https://api-console.zoho.com.au/
   - Sign in with your Zoho account

2. **Create a New Application:**
   - Click "ADD CLIENT"
   - Choose "Server-based Applications"
   - Fill in details:
     - **Client Name:** BooIsha Website Forms
     - **Homepage URL:** https://booisha.com.au
     - **Authorized Redirect URIs:** https://booisha.com.au/oauth/callback
   - Click "CREATE"

3. **Note Down Credentials:**
   - **Client ID:** (save this)
   - **Client Secret:** (save this)

## Step 2: Generate Access Token

1. **Authorization URL:**
   Replace `YOUR_CLIENT_ID` with your actual Client ID:
   ```
   https://accounts.zoho.com.au/oauth/v2/auth?scope=ZohoMail.messages.CREATE&client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://booisha.com.au/oauth/callback&access_type=offline
   ```

2. **Visit the URL:**
   - Open the authorization URL in browser
   - Grant permissions
   - You'll be redirected to: `https://booisha.com.au/oauth/callback?code=AUTHORIZATION_CODE`
   - Copy the `AUTHORIZATION_CODE` from the URL

3. **Exchange Code for Tokens:**
   Use this curl command (replace values):
   ```bash
   curl -X POST https://accounts.zoho.com.au/oauth/v2/token \
     -d "grant_type=authorization_code" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "redirect_uri=https://booisha.com.au/oauth/callback" \
     -d "code=AUTHORIZATION_CODE"
   ```

4. **Response will contain:**
   ```json
   {
     "access_token": "ACCESS_TOKEN",
     "refresh_token": "REFRESH_TOKEN",
     "expires_in": 3600
   }
   ```

## Step 3: Get Your Account ID

1. **API Call to get Account ID:**
   ```bash
   curl -X GET "https://mail.zoho.com.au/api/accounts" \
     -H "Authorization: Zoho-oauthtoken ACCESS_TOKEN"
   ```

2. **Find your Account ID in the response:**
   ```json
   {
     "data": [
       {
         "accountId": "810502852",
         "primaryEmailAddress": "info@booisha.com.au"
       }
     ]
   }
   ```

## Step 4: Environment Variables

Set these environment variables in your hosting platform:

```
ZOHO_CLIENT_ID=your_client_id_here
ZOHO_CLIENT_SECRET=your_client_secret_here
ZOHO_ACCESS_TOKEN=your_access_token_here
ZOHO_REFRESH_TOKEN=your_refresh_token_here
ZOHO_ACCOUNT_ID=810502852
```

## Step 5: Update Form Submission File

Replace your current `submit-form.js` with `submit-form-zoho.js` or rename the files:

1. **Rename files:**
   ```bash
   mv functions/api/submit-form.js functions/api/submit-form-resend-backup.js
   mv functions/api/submit-form-zoho.js functions/api/submit-form.js
   ```

## Step 6: Test Form Submission

1. Deploy your website
2. Fill out contact form
3. Check for emails in info@booisha.com.au
4. Check browser console and server logs for any errors

## Troubleshooting

**Common Issues:**

1. **"Invalid access token" error:**
   - Access tokens expire in 1 hour
   - The code will automatically refresh using refresh_token
   - Refresh tokens are long-lived (don't expire)

2. **"Account not found" error:**
   - Make sure ZOHO_ACCOUNT_ID is correct
   - Use the API call above to get your account ID

3. **"Insufficient permissions" error:**
   - Make sure you granted `ZohoMail.messages.CREATE` scope
   - Regenerate tokens if needed

4. **CORS errors:**
   - The code includes proper CORS headers
   - Make sure your domain is authorized in Zoho API console

## Security Notes

- Never expose your Client Secret in client-side code
- Store all credentials as environment variables
- Access tokens auto-refresh, so the system is self-maintaining
- Refresh tokens should be kept secure and backed up

## API Documentation

- Zoho Mail API: https://www.zoho.com/mail/help/api/
- OAuth 2.0 Guide: https://www.zoho.com/accounts/protocol/oauth/