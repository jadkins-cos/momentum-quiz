# Momentum Quiz Setup Instructions

## Overview
This setup will give you a modern, professional quiz hosted on a **Google Sites** URL (e.g., `sites.google.com/view/momentum-quiz`) with automatic response collection to Google Sheets.

---

## Step 1: Set Up Google Sheets Response Collection

1. **Create a new Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it: `Momentum Quiz Responses`

2. **Open Apps Script**
   - In your spreadsheet, go to: **Extensions** > **Apps Script**
   - Delete any existing code in the editor

3. **Paste the script**
   - Open the file `google-apps-script.js` from this folder
   - Copy ALL the code
   - Paste it into the Apps Script editor
   - Click the **Save** icon (💾)

4. **Deploy as Web App**
   - Click **Deploy** > **New deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **Web app**
   - Configure:
     - **Description**: "Momentum Quiz Response Handler"
     - **Execute as**: **Me** (your email)
     - **Who has access**: **Anyone**
   - Click **Deploy**
   - **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/ABC.../exec`)

5. **Authorize the script**
   - You'll see a warning: "Google hasn't verified this app"
   - Click **Advanced** > **Go to [your project name] (unsafe)**
   - Click **Allow**

6. **Update the HTML file**
   - Open `momentum-quiz.html` in a text editor
   - Find line **516** (search for `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`)
   - Replace it with your Web App URL from step 4
   - Save the file

---

## Step 2: Create Google Site and Embed Quiz

1. **Create a new Google Site**
   - Go to [sites.google.com](https://sites.google.com)
   - Click **Blank** to create a new site
   - Name it: `Momentum Multiplier Assessment`

2. **Set the URL**
   - Click **⚙️ Settings** (top right)
   - Under "Custom URL", choose something like:
     - `momentum-quiz`
     - `zendesk-momentum-assessment`
   - Your final URL will be: `sites.google.com/view/momentum-quiz`

3. **Embed the quiz**
   - Delete the default page content
   - Click **Insert** > **Embed**
   - Click **Embed code** tab
   - Open `momentum-quiz.html` and copy **ALL the code**
   - Paste it into the embed box
   - Click **Insert**
   - The quiz should now appear on your page

4. **Remove headers/footers (optional for cleaner look)**
   - Click **⚙️ Settings** > **Navigation**
   - Toggle off "Show page title"
   - Click **Save**

5. **Publish your site**
   - Click **Publish** (top right)
   - Set visibility to **Public** (or **Anyone with the link**)
   - Click **Publish**

6. **Get your shareable URL**
   - Copy the URL: `sites.google.com/view/[your-custom-url]`
   - This is what you'll share in the Relate app!

---

## Step 3: Test Everything

1. **Visit your Google Site URL**
2. **Take the quiz** (use fake data)
3. **Check your Google Sheet** — you should see a new row with:
   - Timestamp
   - Name, Email
   - Score (1-30)
   - All 10 answers
   - Result category

4. **Test the "returning user" feature**:
   - Retake the quiz on the same browser
   - You should see a yellow banner saying "Welcome back!"

---

## Alternative: If Google Sites Embed Doesn't Work

Some Google Sites configurations don't allow full HTML embedding. If that happens:

### Option A: Use Google Drive
1. Upload `momentum-quiz.html` to Google Drive
2. Right-click > **Get link** > Set to "Anyone with the link"
3. Copy the file ID from the URL
4. Share this link format: `https://drive.google.com/file/d/[FILE_ID]/view`

### Option B: Use GitHub Pages (still free, still trusted)
1. Create a free GitHub account (if you don't have one)
2. Create a new repository called `momentum-quiz`
3. Upload `momentum-quiz.html` (rename it to `index.html`)
4. Go to **Settings** > **Pages**
5. Enable GitHub Pages
6. Your URL will be: `https://[your-username].github.io/momentum-quiz/`

---

## Customization Options

### Change Colors
In `momentum-quiz.html`, find these color codes (around lines 14-15):
- `#03363D` = Dark teal (primary color)
- `#0B5345` = Forest green (gradient)

Replace with your preferred hex codes.

### Add a Logo
In the header section (line 93), add:
```html
<img src="YOUR_LOGO_URL" style="max-width: 200px; margin-bottom: 20px;">
```

### Change Email Notifications
To get an email every time someone takes the quiz:
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Add this to the `doPost` function (after line 42):
```javascript
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Momentum Quiz Response: ' + category,
  body: 'Name: ' + data.name + '\nEmail: ' + data.email + '\nScore: ' + data.score
});
```

---

## Troubleshooting

**Problem**: Quiz doesn't submit / no data in Google Sheets
- **Fix**: Make sure you replaced `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` in the HTML file
- **Fix**: Check that the Apps Script is deployed as a **Web app** with "Anyone" access

**Problem**: Google Sites won't embed the HTML
- **Fix**: Use the GitHub Pages option instead (still free, still trusted domain)

**Problem**: Quiz looks broken on mobile
- **Fix**: The design is fully responsive — try hard-refreshing your browser (Cmd+Shift+R)

---

## Final URL to Share

Once published, your quiz will live at:
```
https://sites.google.com/view/[your-custom-url]
```

This is a **google.com domain** — trusted, professional, perfect for embedding in the Relate app!

---

## Questions?

The quiz includes:
- ✅ Modern, branded design
- ✅ Instant scoring with personalized results
- ✅ Response tracking in Google Sheets
- ✅ "Returning user" detection
- ✅ Mobile-responsive
- ✅ Hosted on official Google URL

All files are in `/Users/jadkins/Test Folder/Relate/`:
- `momentum-quiz.html` - The quiz (edit this to add your Apps Script URL)
- `google-apps-script.js` - Response handler (paste into Google Sheets)
- `SETUP_INSTRUCTIONS.md` - This file
