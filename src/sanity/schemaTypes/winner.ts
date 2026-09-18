import { defineField, defineType } from "sanity";

export const winner = defineType({
  name: "winner",
  title: "Past winner",
  type: "document",
  fields: [
    defineField({ name: "year", title: "Year", type: "number", validation: (Rule) => Rule.required() }),
    defineField({ name: "team", title: "Champion", type: "string", validation: (Rule) => Rule.required() }),
  ],
  orderings: [{ title: "Year, newest", name: "yearDesc", by: [{ field: "year", direction: "desc" }] }],
  preview: {
    select: { title: "team", subtitle: "year" },
    prepare({ title, subtitle }) {
      return { title: String(subtitle), subtitle: title };
    },
  },
});
