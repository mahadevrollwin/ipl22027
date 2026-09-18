import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Hero title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (Rule) => Rule.required(),
      description: "Use home, news, blogs, videos, matches, teams, points-table, or about.",
    }),
    defineField({ name: "kicker", title: "Kicker", type: "string" }),
    defineField({ name: "lede", title: "Lede", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
