// Note that this route to send email is NOT working but this is how we send emails via resend

import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jamshediqbal84@gmail.com",
    subject: "Hello World",
    react: <WelcomeTemplate name="Jamshed Iqbal" />,
  });

  return NextResponse.json({});
}
