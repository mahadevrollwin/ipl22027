import { defineField, defineType } from "sanity";

export const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "meta",
      title: "Meta",
      type: "string",
      description: "e.g. 22:23 · Magic Moments",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Watch URL",
      type: "url",
      description: "Official IPL / YouTube link. Do not upload copyrighted match film.",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "featured", title: "Featured in home hero", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "meta", media: "thumbnail" },
  },
});
