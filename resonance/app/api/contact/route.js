import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json(
      { message: "Supabase ortam değişkenleri tanımlı değil." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const name = normalizeString(body.name);
  const email = normalizeString(body.email);
  const message = normalizeString(body.message);
  const sourcePage = normalizeString(body.source_page) || "website";

  if (name.length < 3 || email.length < 5 || message.length < 10) {
    return NextResponse.json(
      { message: "Lütfen ad, e-posta ve mesaj alanlarını eksiksiz doldurun." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    message,
    source_page: sourcePage,
    status: "new",
  });

  if (error) {
    return NextResponse.json(
      { message: "Mesaj kaydedilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
  });
}
