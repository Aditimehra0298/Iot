# Email Notification Troubleshooting Guide

## Common Issues and Solutions

### 1. **Google Apps Script Permissions**
- **Issue**: Script doesn't have permission to send emails
- **Solution**: 
  1. Go to your Google Apps Script project
  2. Click on "Review permissions" when prompted
  3. Grant all necessary permissions
  4. Re-authorize if needed

### 2. **Email Quota Limits**
- **Issue**: Google has daily email sending limits
- **Solution**: 
  - Free accounts: 100 emails/day
  - G Suite accounts: 1500 emails/day
  - Check your quota in Google Apps Script dashboard

### 3. **Web App Deployment Issues**
- **Issue**: Web app not properly deployed
- **Solution**:
  1. In Google Apps Script, click "Deploy" → "New deployment"
  2. Choose "Web app" as type
  3. Set "Execute as" to "Me"
  4. Set "Who has access" to "Anyone"
  5. Click "Deploy" and copy the web app URL

### 4. **Email Address Validation**
- **Issue**: Invalid email addresses in recipient list
- **Solution**: Verify all email addresses are valid and accessible

## Step-by-Step Fix Process

### Step 1: Update Your Google Apps Script
1. Copy the code from `google-apps-script-fixed.js`
2. Replace your existing code in Google Apps Script
3. Save the project

### Step 2: Test Email Permissions
1. In Google Apps Script, run the `checkEmailPermissions()` function
2. Check the execution log for any errors
3. If successful, you should receive a test email

### Step 3: Test Email Function
1. Run the `testEmail()` function
2. Check if emails are sent to all recipients
3. Verify emails are received

### Step 4: Test Full Integration
1. Run the `testIntegration()` function
2. Check both spreadsheet data and email notifications
3. Verify the web app URL is working

### Step 5: Update Web App URL
1. If you redeployed, update the URL in your React app
2. Test form submission from the website
3. Check both spreadsheet and email notifications

## Debugging Commands

Run these functions in Google Apps Script to debug:

```javascript
// Check if email permissions work
checkEmailPermissions()

// Test email sending
testEmail()

// Test full integration
testIntegration()

// Check execution logs
console.log('Debug info here')
```

## Alternative Email Solutions

If Google Apps Script emails still don't work:

### Option 1: Use Gmail API
- More reliable than MailApp
- Requires additional setup
- Better error handling

### Option 2: Use External Email Service
- SendGrid
- Mailgun
- AWS SES
- Requires API keys and additional configuration

### Option 3: Use Google Forms
- Create a Google Form
- Set up email notifications in form settings
- Redirect form submissions to Google Form

## Current Web App URL
Make sure you're using the correct web app URL in your React app:
```
https://script.google.com/macros/s/AKfycbzmgACkaI0vuqEMe8KX7R79h62FJDqJZ2s7jpar632wKQZF5k-oeneS6vXbf4OhXxV-/exec
```

## Testing Checklist
- [ ] Google Apps Script permissions granted
- [ ] Web app properly deployed
- [ ] Email addresses are valid
- [ ] Test functions run successfully
- [ ] Form submission works from website
- [ ] Data appears in spreadsheet
- [ ] Email notifications are received

## Contact Information
If issues persist, check:
1. Google Apps Script execution logs
2. Browser console for errors
3. Network tab for failed requests
4. Email spam folders
