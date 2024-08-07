import { NextResponse } from "next/server";
import { oauthClient1 } from "@/app/utils/oauthclient";
import { cookies } from "next/headers"; // Import the cookies API

export async function GET(req: Request) {
  const access_token = cookies().get("qbToken")?.value;
  const realmId = cookies().get("qbRealmId")?.value;

  if (!access_token || !realmId) {
    return NextResponse.json(
      { message: "Authentication token or realmId missing" },
      { status: 401 }
    );
  }

  try {
    const paymentResponse = await oauthClient1.makeApiCall({
      url: `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmId}/query?query=select * from Payment&minorversion=40`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

     const payments = paymentResponse.response.data.QueryResponse.Payment;

     return NextResponse.json({ message: payments });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Failed to process payments" });
  }
}
