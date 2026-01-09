import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyComponent,
});

function PrivacyComponent() {
  return (
    <InfoPageLayout title="Privacy Policy">
      <p>
        We value your privacy. This policy outlines how we collect, use, and
        protect your personal information.
      </p>
      <p>We do not sell member data to third parties.</p>
    </InfoPageLayout>
  );
}
