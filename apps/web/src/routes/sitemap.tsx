import { createFileRoute, Link } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/sitemap")({
  component: SitemapComponent,
});

function SitemapComponent() {
  return (
    <InfoPageLayout title="Sitemap">
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <Link className="text-pmi-primary" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-pmi-primary" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-pmi-primary" to="/membership">
            Membership
          </Link>
        </li>
        <li>
          <Link className="text-pmi-primary" to="/certifications">
            Certifications
          </Link>
        </li>
        <li>
          <Link className="text-pmi-primary" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </InfoPageLayout>
  );
}
