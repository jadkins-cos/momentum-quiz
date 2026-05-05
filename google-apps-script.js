// Google Apps Script for collecting Momentum Quiz responses
// Instructions:
// 1. Open Google Sheets and create a new spreadsheet called "Momentum Quiz Responses"
// 2. Go to Extensions > Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Click "Deploy" > "New deployment" > "Web app"
// 5. Set "Execute as" to "Me"
// 6. Set "Who has access" to "Anyone"
// 7. Click "Deploy" and copy the Web App URL
// 8. Paste that URL into the momentum-quiz.html file at line 516 (replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE')

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Score',
        'Q1', 'Q2', 'Q3', 'Q4', 'Q5',
        'Q6', 'Q7', 'Q8', 'Q9', 'Q10',
        'Result Category'
      ]);
    }

    // Determine result category
    let category = '';
    if (data.score >= 10 && data.score <= 16) {
      category = 'Self-Sufficient Innovator';
    } else if (data.score >= 17 && data.score <= 24) {
      category = 'Stalling Mid-Market';
    } else {
      category = 'Critical Infrastructure Risk';
    }

    // Append the response
    sheet.appendRow([
      new Date(data.timestamp),
      data.name || '(Anonymous)',
      data.email || '(No email provided)',
      data.score,
      data.answers.q1,
      data.answers.q2,
      data.answers.q3,
      data.answers.q4,
      data.answers.q5,
      data.answers.q6,
      data.answers.q7,
      data.answers.q8,
      data.answers.q9,
      data.answers.q10,
      category
    ]);

    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'score': data.score
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - you can run this to make sure the script is working
function test() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        email: 'test@example.com',
        score: 22,
        answers: {
          q1: '2', q2: '2', q3: '2', q4: '2', q5: '2',
          q6: '2', q7: '2', q8: '2', q9: '2', q10: '2'
        }
      })
    }
  };

  doPost(testData);
  Logger.log('Test completed - check your spreadsheet for the test entry');
}
