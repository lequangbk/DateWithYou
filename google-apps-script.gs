function doPost(e) {
  const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const p = e.parameter || {};

  sheet.appendRow([
    new Date(),
    p.plan || '',
    p.food || '',
    p.date || '',
    p.time || '',
    p.movie || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
