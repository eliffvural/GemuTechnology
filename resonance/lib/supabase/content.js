import { createSupabaseServerClient } from "@/lib/supabase/server";

function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export async function getPublishedBlogPosts() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("id,title,slug,excerpt,cover_image,category,published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) {
    return [];
  }

  return data.map((post, index) => ({
    id: post.slug || post.id,
    imgUrl:
      post.cover_image ||
      `/assets/images/demo-corporate/blog/post-prev-${(index % 8) + 1}.jpg`,
    title: post.title,
    date: formatDate(post.published_at),
    category: post.category || "Yazılım",
    colorClass: `color-primary-${(index % 4) + 1}`,
    desc: post.excerpt || "",
  }));
}

export async function getPublishedCaseStudies() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("case_studies")
    .select(
      "id,title,slug,summary,image_url,service_type,industry,result_metric,published_at"
    )
    .eq("status", "published")
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false });

  if (error || !data) {
    return [];
  }

  return data.map((item) => ({
    id: item.slug || item.id,
    slug: item.slug || item.id,
    title: item.title,
    description: item.summary || item.service_type || "Vaka çalışması",
    imageUrl: item.image_url,
    serviceType: item.service_type,
    industry: item.industry,
    resultMetric: item.result_metric,
  }));
}

export async function getPublishedCaseStudy(slug) {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("case_studies")
    .select(
      "id,title,slug,summary,content,image_url,service_type,industry,result_metric,published_at"
    )
    .eq("status", "published")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.slug || data.id,
    slug: data.slug || data.id,
    title: data.title,
    description: data.summary || data.service_type || "Vaka çalışması",
    content: data.content || "",
    imageUrl: data.image_url,
    serviceType: data.service_type,
    industry: data.industry,
    resultMetric: data.result_metric,
  };
}
