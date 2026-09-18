import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "News & blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Blog", value: "blog" },
          { title: "Match report", value: "report" },
        ],
        layout: "radio",
      },
      initialValue: "news",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "tag", title: "Tag", type: "string" }),
    defineField({ name: "publishedAt", title: "Published", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "hero",
      title: "Card colour",
      type: "string",
      options: {
        list: [
          { title: "Navy", value: "ember" },
          { title: "Red", value: "red" },
          { title: "Teal", value: "teal" },
          { title: "Pink", value: "pink" },
          { title: "Gold", value: "gold" },
          { title: "Blue", value: "blue" },
          { title: "Violet", value: "violet" },
        ],
      },
      initialValue: "ember",
    }),
    defineField({
      name: "cover",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({ name: "featured", title: "Featured on home", type: "boolean", initialValue: false }),
    defineField({ name: "body", title: "Body", type: "blockContent", validation: (Rule) => Rule.required() }),
  ],
  orderings: [
    { title: "Published, newest", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "kind", media: "cover" },
  },
});
