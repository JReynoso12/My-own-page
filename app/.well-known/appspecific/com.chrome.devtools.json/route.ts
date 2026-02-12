import { NextResponse } from "next/server";

/**
 * Chrome DevTools automatically requests this path when DevTools is open.
 * Returning 204 prevents the 404 from appearing in server logs.
 */
export function GET() {
  return new NextResponse(null, { status: 204 });
}
