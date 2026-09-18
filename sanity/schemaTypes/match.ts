import { defineField, defineType } from "sanity";

export const match = defineType({
  name: "match",
  title: "Match",
  type: "document",
  fields: [
    defineField({
      name: "season",
      title: "Season",
      type: "string",
      options: {
        list: [
          { title: "2026", value: "2026" },
          { title: "2027", value: "2027" },
        ],
      },
      initialValue: "2026",
    }),
    defineField({
      name: "stage",
      title: "Stage",
      type: "string",
      options: {
        list: [
          { title: "League", value: "league" },
          { title: "Playoff", value: "playoff" },
        ],
        layout: "radio",
      },
      initialValue: "league",
    }),
    defineField({ name: "round", title: "Round label", type: "string", description: "Qualifier 1, Final, etc." }),
    defineField({ name: "n", title: "Match number", type: "number" }),
    defineField({ name: "date", title: "Date label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "time", title: "Time label", type: "string" }),
    defineField({ name: "venue", title: "Venue", type: "string" }),
    defineField({ name: "home", title: "Home (short code)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "away", title: "Away (short code)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "result", title: "Result", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: {
    select: { home: "home", away: "away", date: "date", round: "round" },
    prepare({ home, away, date, round }) {
      return { title: `${home} vs ${away}`, subtitle: [round, date].filter(Boolean).join(" · ") };
    },
  },
});
