import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/local-chapters")({
  component: LocalChaptersComponent,
});

function LocalChaptersComponent() {
  return (
    <InfoPageLayout title="Local Chapters">
      <p>
        PMI chapters are the heart of the community. While we serve the South
        region, there are over 300 chapters globally.
      </p>
      <p>
        Your South Chapter membership gives you access to a local network of
        over 1,500 professionals, local job boards, and regional discounts.
      </p>
    </InfoPageLayout>
  );
}
