import { defineField, defineType } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "short", maxLength: 16 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "short", title: "Short code", type: "string", validation: (Rule) => Rule.required().max(5) }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "color", title: "Primary colour", type: "string" }),
    defineField({ name: "color2", title: "Secondary colour", type: "string" }),
    defineField({ name: "ground", title: "Home ground", type: "string" }),
    defineField({ name: "titles", title: "IPL titles", type: "number", initialValue: 0 }),
    defineField({ name: "last", title: "Last season note", type: "string" }),
    defineField({
      name: "record2026",
      title: "2026 record",
      type: "object",
      fields: [
        defineField({ name: "p", title: "Played", type: "number" }),
        defineField({ name: "w", title: "Won", type: "number" }),
        defineField({ name: "l", title: "Lost", type: "number" }),
        defineField({ name: "nr", title: "No result", type: "number" }),
        defineField({ name: "nrr", title: "NRR", type: "string" }),
        defineField({ name: "pts", title: "Points", type: "number" }),
        defineField({ name: "pos", title: "Position", type: "number" }),
        defineField({ name: "form", title: "Form", type: "string", description: "e.g. L W W W L" }),
      ],
    }),
    defineField({
      name: "watch",
      title: "Names to watch",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "blurb", title: "Blurb", type: "text", rows: 4 }),
  ],
  preview: {
    select: { title: "name", subtitle: "short" },
  },
});
