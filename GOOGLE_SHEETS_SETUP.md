# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "IoT Academy Enrollments"

## Step 2: Set Up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the code from `google-apps-script.js`
4. Save the project and name it "IoT Academy Form Handler"

## Step 3: Deploy the Script
1. Click "Deploy" → "New Deployment"
2. Choose "Web app" as the type
3. Set the following:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (you'll need this for the website)

## Step 4: Update Website Code
1. In your React app, replace `YOUR_SCRIPT_ID` in all three form handlers with your actual script ID
2. The script ID is in the URL: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## Step 5: Set Up Email Notifications
1. In the Google Apps Script code, replace `your-email@example.com` with your actual email
2. The script will send you an email notification every time someone submits a form

## Step 6: Initialize the Sheet
1. In Google Apps Script, run the `setupSheet()` function once to create headers
2. This will format your spreadsheet with proper headers

## Step 7: Test the Integration
1. Run the `testIntegration()` function in Google Apps Script to test
2. Submit a test form on your website
3. Check if data appears in your Google Sheet
4. Check if you receive an email notification

## Data Structure
Your Google Sheet will have these columns:
- Timestamp
- Name
- Phone
- Email
- Location
- Course
- Message
- Form Type (offline/online)
- Program (2-month/4-month/6-month)
- Source (program-card/cta-section/hero-section/header)
- Submission Time

## Troubleshooting
- Make sure the script is deployed as a web app
- Check that the script has permission to send emails
- Verify the script ID is correct in your website code
- Check the browser console for any error messages

## Security Notes
- The script is set to "Anyone" access for form submissions
- Email notifications are sent to your specified email only
- All form data is stored in your private Google Sheet
