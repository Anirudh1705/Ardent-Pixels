import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Place your google-service-account.json file in:
// c:/Users/ANIRUDH/Desktop/New folder/ArdentPixel-main/app/api/contact/google-service-account.json
const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
  : require('./google-service-account.json');

const spreadsheetId = '1AzUKusTcVzvtYSv9TussC091JWlohC819EtqB_f4_Fg'; // Your Google Sheet ID
const range = 'Sheet1!A2'; // Adjust to your sheet name and range

export async function POST(request: Request) {
  const body = await request.json();

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        body.name,
        body.email,
        body.phone || "",
        body.service || "",
        body.message
      ]],
    },
  });

  return NextResponse.json({ success: true });
}
