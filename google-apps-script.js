// Google Apps Script Code for IoT Academy Form Integration
// Copy this code to Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.name || '',
      data.phone || '',
      data.email || '',
      data.location || '',
      data.course || '',
      data.message || '',
      data.formType || '',
      data.program || '',
      data.source || '',
      data.timestamp || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Send notification email
    sendNotificationEmail(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(data) {
  try {
    // Replace with your email address
    const recipientEmail = 'your-email@example.com';
    
    const subject = 'New IoT Academy Enrollment - ' + (data.formType || 'Unknown');
    
    const body = `
New enrollment received from IoT Academy website:

Name: ${data.name || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Email: ${data.email || 'Not provided'}
Location: ${data.location || 'Not provided'}
Course: ${data.course || 'Not provided'}
Form Type: ${data.formType || 'Not provided'}
Program: ${data.program || 'Not provided'}
Source: ${data.source || 'Not provided'}
Message: ${data.message || 'No message'}

Timestamp: ${new Date().toLocaleString()}

Please follow up with this potential student as soon as possible.
    `;
    
    // Send the email
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: body
    });
    
    console.log('Notification email sent successfully');
    
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}

// Function to set up the spreadsheet headers (run this once)
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Set headers
  const headers = [
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Location',
    'Course',
    'Message',
    'Form Type',
    'Program',
    'Source',
    'Submission Time'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4A90E2')
    .setFontColor('white');
    
  console.log('Sheet setup completed');
}

// Function to test the integration
function testIntegration() {
  const testData = {
    name: 'Test User',
    phone: '1234567890',
    email: 'test@example.com',
    location: 'Test City',
    course: 'silver-8-weeks',
    message: 'Test message',
    formType: 'offline',
    program: '2-month',
    source: 'program-card',
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
