import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0q48dl6f",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
  studioHost: "ipl2027",
  deployment: {
    appId: "aspy8dcj3s64bb57oo2vdq0l",
    autoUpdates: true,
  },
});
