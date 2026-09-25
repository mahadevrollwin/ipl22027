import { defineField, defineType } from "sanity";

export const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Used for the video page URL (/videos/your-slug). Click Generate from title.",
    }),
    defineField({
      name: "meta",
      title: "Meta",
      type: "string",
      description: "e.g. 22:23 · Magic Moments",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoFile",
      title: "Video upload",
      type: "file",
      description:
        "Upload an MP4 or WebM from your computer. Sanity stores the file and the website plays it with audio automatically.",
      options: {
        accept: "video/mp4,video/webm,.mp4,.webm",
        storeOriginalFilename: true,
      },
    }),
    defineField({
      name: "href",
      title: "Watch URL",
      type: "url",
      description:
        "Optional YouTube / official IPL / external link. Used only when no video file is uploaded.",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).custom((href, context) => {
          const parent = context.parent as { videoFile?: { asset?: { _ref?: string } } } | undefined;
          const hasFile = Boolean(parent?.videoFile?.asset?._ref);
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
      description: "Optional. If empty, the site picks a preview frame from the video.",
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
