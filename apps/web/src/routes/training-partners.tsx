import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/training-partners")({
  component: TrainingPartnersComponent,
});

function TrainingPartnersComponent() {
  return (
    <InfoPageLayout title="Training Partners">
      <p>
        We are a PMI Authorized Training Partner (ATP). We also collaborate with
        local universities and training providers to offer a diverse range of
        educational opportunities.
      </p>
    </InfoPageLayout>
  );
}
