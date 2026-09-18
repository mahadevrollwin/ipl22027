import { defineArrayMember, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
              },
              {
                name: "blank",
                type: "boolean",
                title: "Open in new tab",
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineArrayMember({
      name: "videoEmbed",
      title: "External video",
      type: "object",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL",
          description: "Link out to official IPL / YouTube highlights. Do not host match film.",
          validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
        },
        { name: "caption", type: "string", title: "Caption" },
      ],
      preview: {
        select: { title: "caption", subtitle: "url" },
        prepare({ title, subtitle }) {
          return { title: title || "Video link", subtitle };
        },
      },
    }),
  ],
});
