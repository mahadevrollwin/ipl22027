import { defineField, defineType } from "sanity";

export const award = defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    defineField({ name: "cap", title: "Award", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "name", title: "Winner", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "team", title: "Team code", type: "string" }),
    defineField({ name: "stat", title: "Stat line", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "cap", subtitle: "name" },
  },
});
