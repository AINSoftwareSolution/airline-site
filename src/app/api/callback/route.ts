import { NextResponse } from 'next/server';
import { oauthClient1 } from '@/app/utils/oauthclient';

export async function GET(request:Request) {
    // Extract the authorization code from the query parameters
    const parseRedirect = request.url;

    try {
        // Exchange the authorization code for tokens
        const authResponse = await oauthClient1.createToken(parseRedirect);

        // Set the OAuth client token for subsequent API calls
        oauthClient1.token = authResponse.token;
        const realmId = authResponse.token.realmId;

       const response=  NextResponse.json({data:authResponse}, { status: 200 });
        response.cookies.set('qbToken', authResponse.token.access_token);
        response.cookies.set('qbRealmId', realmId);

        return response
    } catch (e) {
        return NextResponse.json({ error: `Authentication failed: ${e}` }, { status: 500 });
    }
}
