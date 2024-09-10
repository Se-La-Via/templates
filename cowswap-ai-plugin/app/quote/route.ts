
import { parseQuoteRequest } from "@/utils/tokens";
import { type NextRequest, NextResponse } from "next/server";

const COW_API = "https://api.cow.fi"

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const requestBody = await parseQuoteRequest(req);
    console.log("POST Request for quote:", requestBody)
    
    const response = await fetch(`${COW_API}/${requestBody.network}/api/v1/quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });
    if (!response.ok) {
      const message = await response.text();
      return NextResponse.json({ message }, { status: response.status });
    }
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json({ error }, { status: 400 });
  }
}