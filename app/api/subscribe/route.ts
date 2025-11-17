import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        // Load and validate env vars
        const spreadsheetIdRaw = process.env.GOOGLE_SHEET_ID;
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;

        if (!spreadsheetIdRaw) {
            console.error('Missing GOOGLE_SHEET_ID');
            return NextResponse.json({ error: 'Subscription service not configured' }, { status: 500 });
        }
        if (!clientEmail || !privateKeyRaw) {
            console.error('Missing Google service account credentials');
            return NextResponse.json({ error: 'Subscription service not configured' }, { status: 500 });
        }

        const spreadsheetId = spreadsheetIdRaw.trim();
        const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

        // Google Sheets Configuration
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Quick check: ensure spreadsheet exists and the service account has access
        try {
            await sheets.spreadsheets.get({ spreadsheetId });
        } catch (err: any) {
            console.error('Spreadsheet access error:', err?.code || err?.message || err);
            // Return a concise message to the client; keep details only in server logs
            return NextResponse.json({ error: 'Unable to access subscription storage' }, { status: 500 });
        }

        // Check if email already exists (in column A)
        let existingEmails: string[] = [];
        try {
            const checkResponse = await sheets.spreadsheets.values.get({ spreadsheetId, range: 'Sheet1!A:A' });
            existingEmails = checkResponse.data.values?.flat().map(String) || [];
        } catch (err: any) {
            console.error('Values get error:', err?.code || err?.message || err);
            return NextResponse.json({ error: 'Unable to read subscribers' }, { status: 500 });
        }

        if (existingEmails.includes(email)) {
            return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
        }

        // Add email to Google Sheets
        const timestamp = new Date().toISOString();
        try {
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: 'Sheet1!A:B',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[email, timestamp]],
                },
            });
        } catch (err: any) {
            console.error('Append values error:', err?.code || err?.message || err);
            return NextResponse.json({ error: 'Unable to save subscriber' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Successfully subscribed! Thank you for joining our community.', success: true }, { status: 200 });

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json({ error: 'Failed to subscribe. Please try again later.' }, { status: 500 });
    }
}
