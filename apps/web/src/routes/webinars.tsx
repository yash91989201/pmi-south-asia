import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/webinars")({
  component: WebinarsComponent,
});

function WebinarsComponent() {
  return (
    <InfoPageLayout title="Webinars">
      <p>
        Watch on-demand webinars to earn PDUs on your schedule. Our library
        covers the PMI Talent Triangle®: Ways of Working, Power Skills, and
        Business Acumen.
      </p>
      <p>Check back soon for our upcoming live webinar schedule.</p>
    </InfoPageLayout>
  );
}
