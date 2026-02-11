import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, preferredDate, message, conversation } = body;

    if (!name || !email || !service || !preferredDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.EMAIL_TO ?? process.env.EMAIL_USER ?? "rjimueltorrecampo@gmail.com";

    if (!resend || !resendApiKey || !to) {
      console.error("Resend or email environment variables are not configured");
      return NextResponse.json(
        { error: "Email configuration is missing on the server" },
        { status: 500 }
      );
    }

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Preferred date/time: ${preferredDate}`,
      "",
      "Message:",
      message || "-",
      "",
      "Conversation transcript:",
      conversation || "-",
    ].join("\n");

    const { error: resendError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: `New service booking from ${name}`,
      text,
      html: `<p>New booking request from <strong>${name}</strong>.</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Preferred date/time:</strong> ${preferredDate}</p>
<p><strong>Message:</strong><br/>${message || "-"}</p>
<hr />
<p><strong>Conversation transcript:</strong></p>
<pre style="white-space:pre-wrap;font-family:system-ui, -apple-system, sans-serif;">${conversation || "-"}</pre>`,
    });

    if (resendError) {
      console.error("Resend error in /api/book-service:", resendError);
      return NextResponse.json(
        { error: "Email provider rejected the request" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/book-service:", error);
    return NextResponse.json(
      { error: "Failed to send booking email" },
      { status: 500 }
    );
  }
}

