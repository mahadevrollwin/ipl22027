import { StudioSetup } from "../StudioSetup";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export default async function StudioPage() {
  if (!isSanityConfigured()) {
    return <StudioSetup />;
  }
  const { Studio } = await import("../Studio");
  return <Studio />;
}
