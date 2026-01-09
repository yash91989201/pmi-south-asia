import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/advertising")({
  component: AdvertisingComponent,
});

function AdvertisingComponent() {
  return (
    <InfoPageLayout title="Advertising & Sponsorship">
      <p>
        Reach a dedicated audience of project professionals. We offer
        sponsorship packages for monthly meetings, the annual symposium, and
        digital advertising on our website.
      </p>
      <p>Contact us to request a media kit.</p>
    </InfoPageLayout>
  );
}
