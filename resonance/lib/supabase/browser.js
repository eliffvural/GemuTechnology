import { createClient } from "@supabase/supabase-js";

function normalizeSupabaseUrl(url) {
  return url?.replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
}

export function createSupabaseBrowserClient() {
  const supabaseUrl = normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
