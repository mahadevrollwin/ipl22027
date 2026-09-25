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
      name: "file",
      title: "Video upload",
      type: "file",
      description: "Upload an MP4 or WebM from your computer. Stored as a Sanity asset and plays on the site with audio.",
      options: {
        accept: "video/mp4,video/webm,.mp4,.webm",
      },
    }),
    defineField({
      name: "href",
      title: "Watch URL",
      type: "url",
      description:
        "Optional YouTube / official IPL / external link. Used when no video file is uploaded. Existing entries keep working.",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).custom((href, context) => {
          const parent = context.parent as { file?: { asset?: { _ref?: string } } } | undefined;
          const hasFile = Boolean(parent?.file?.asset?._ref);
          if (!href && !hasFile) {
            return "Upload a video file or provide a Watch URL";
          }
          return true;
        }),
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
