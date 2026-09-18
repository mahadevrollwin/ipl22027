import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Site name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "auctionDate",
      title: "Mini-auction date",
      type: "datetime",
      description: "Used by the countdown. Example: 15 Dec 2026, 6:00 pm IST.",
    }),
    defineField({
      name: "seasonDate",
      title: "Season start (working date)",
      type: "datetime",
    }),
    defineField({
      name: "winnersIntro",
      title: "Winners band copy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer blurb",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site settings" };
    },
  },
});
