import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("IPL 2027 Live")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("article").title("News & blogs"),
      S.documentTypeListItem("video").title("Videos"),
      S.divider(),
      S.documentTypeListItem("team").title("Teams"),
      S.documentTypeListItem("match").title("Matches"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("stat").title("Season stats"),
      S.documentTypeListItem("award").title("Awards"),
      S.documentTypeListItem("winner").title("Past winners"),
    ]);
