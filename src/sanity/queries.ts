export const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  name,
  tagline,
  auctionDate,
  seasonDate,
  winnersIntro,
  footerBlurb
}`;

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  kicker,
  lede,
  body,
  seoTitle,
  seoDescription
}`;

export const articlesQuery = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc){
  "id": slug.current,
  title,
  tag,
  kind,
  excerpt,
  hero,
  featured,
  publishedAt,
  "coverUrl": cover.asset->url,
  body
}`;

export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0]{
  "id": slug.current,
  title,
  tag,
  kind,
  excerpt,
  hero,
  featured,
  publishedAt,
  "coverUrl": cover.asset->url,
  body
}`;

export const videosQuery = `*[_type == "video"] | order(order asc, _createdAt desc){
  title,
  meta,
  href,
  featured,
  "thumbUrl": thumbnail.asset->url,
  "videoUrl": coalesce(videoFile.asset->url, file.asset->url),
  "videoMimeType": coalesce(videoFile.asset->mimeType, file.asset->mimeType)
}`;

export const teamsQuery = `*[_type == "team" && defined(slug.current)] | order(record2026.pos asc){
  "id": slug.current,
  short,
  name,
  city,
  color,
  color2,
  ground,
  titles,
  last,
  record2026,
  watch,
  blurb
}`;

export const teamBySlugQuery = `*[_type == "team" && slug.current == $slug][0]{
  "id": slug.current,
  short,
  name,
  city,
  color,
  color2,
  ground,
  titles,
  last,
  record2026,
  watch,
  blurb
}`;

export const matchesQuery = `*[_type == "match"] | order(order asc, n asc){
  season,
  stage,
  round,
  n,
  date,
  time,
  venue,
  home,
  away,
  result
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc){ question, answer }`;

export const statsQuery = `*[_type == "stat"] | order(order asc){ "k": label, "v": value }`;

export const awardsQuery = `*[_type == "award"] | order(order asc){ cap, name, team, stat }`;

export const winnersQuery = `*[_type == "winner"] | order(year desc){ year, team }`;
