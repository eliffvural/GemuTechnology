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
  const payload = {
    company_name: normalizeString(body.company_name),
    contact_name: normalizeString(body.contact_name),
    email: normalizeString(body.email),
    phone: normalizeString(body.phone),
    service_type: normalizeString(body.service_type),
    budget_range: normalizeString(body.budget_range),
    timeline: normalizeString(body.timeline),
    description: normalizeString(body.description),
    source_page: normalizeString(body.source_page) || "services",
    status: "new",
  };

  if (
    payload.contact_name.length < 3 ||
    payload.email.length < 5 ||
    payload.service_type.length < 2 ||
    payload.description.length < 10
  ) {
    return NextResponse.json(
      {
        message:
          "Lütfen ad, e-posta, hizmet türü ve proje açıklaması alanlarını doldurun.",
      },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("project_requests").insert(payload);

  if (error) {
    return NextResponse.json(
      { message: "Proje talebi kaydedilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Proje talebiniz alındı. Yol haritası için size dönüş yapacağız.",
  });
}
