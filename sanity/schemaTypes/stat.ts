import { defineField, defineType } from "sanity";

export const stat = defineType({
  name: "stat",
  title: "Season stat",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "value", title: "Value", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
  },
});
