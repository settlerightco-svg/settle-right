import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { sendWaitlistNotification } from "@/lib/email";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const country = String(body.country || "").trim();
    const emirate = String(body.emirate || "").trim();
    const reason = String(body.reason || "").trim();
    const subscribe = body.subscribe === true;
    const missing = [
      ["name", name],
      ["email", email],
      ["country", country],
      ["emirate", emirate],
      ["subscribe", subscribe],
    ]
      .filter(([, value]) => !value)
      .map(([field]) => field);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseAdmin = getSupabaseAdmin();

    const { data: existingEntry, error: selectError } = await supabaseAdmin
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      console.error("Supabase email check error:", selectError);
      return NextResponse.json(
        { error: "Unable to verify email address. Please try again." },
        { status: 500 }
      );
    }

    if (existingEntry) {
      return NextResponse.json(
        { error: "This email is already registered. Please use a different email." },
        { status: 409 }
      );
    }

    const { error } = await supabaseAdmin.from("waitlist").insert([
      {
        name,
        email,
        country,
        emirate,
        reason: reason || null,
        subscribe,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Unable to save waitlist submission. Please try again." },
        { status: 500 }
      );
    }

    try {
      await sendWaitlistNotification({
        name,
        email,
        country,
        emirate,
        reason,
        subscribe,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    return NextResponse.json({ status: "success", message: "You’re on the list 🚀" });
  } catch (error) {
    console.error("Waitlist API error", error);
    return NextResponse.json(
      { error: "Unable to process submission" },
      { status: 500 }
    );
  }
}
