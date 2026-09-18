import { isSanityConfigured, projectId } from "@/sanity/env";

export function StudioSetup() {
  return (
    <section className="mx-auto w-[min(720px,calc(100%-40px))] py-16 text-navy">
      <p className="text-xs font-bold tracking-[0.18em] text-ipl uppercase">Sanity CMS</p>
      <h1 className="mt-3 text-[clamp(32px,6vw,48px)] leading-none font-extrabold">Connect a project.</h1>
      <p className="mt-4 text-[17px] text-muted">
        Studio is embedded at <code className="font-semibold">/studio</code>. Add a Sanity project ID
        to load the editor. The public site keeps using static fallbacks until then.
      </p>
      <ol className="mt-8 list-decimal space-y-3 pl-5 text-[15px] text-muted">
        <li>
          Create a project at{" "}
          <a className="font-bold text-teal" href="https://www.sanity.io/manage" target="_blank" rel="noopener noreferrer">
            sanity.io/manage
          </a>
          . Use dataset <code className="font-semibold">production</code>.
        </li>
        <li>
          Copy <code className="font-semibold">.env.example</code> to <code className="font-semibold">.env.local</code> and set{" "}
          <code className="font-semibold">NEXT_PUBLIC_SANITY_PROJECT_ID</code>
          {projectId ? ` (current: ${projectId})` : ""}.
        </li>
        <li>
          In Sanity manage → API → CORS origins, add <code className="font-semibold">http://localhost:3001</code>{" "}
          and your production domain. Allow credentials.
        </li>
        <li>
          Create an Editor token and set <code className="font-semibold">SANITY_API_WRITE_TOKEN</code>, then run{" "}
          <code className="font-semibold">npm run sanity:seed</code> to import pages, news, blogs, videos, teams and FAQs.
        </li>
        <li>Restart <code className="font-semibold">npm run dev</code> and refresh this page.</li>
      </ol>
      <p className="mt-8 text-sm text-faint">Configured: {isSanityConfigured() ? "yes" : "not yet"}.</p>
    </section>
  );
}
