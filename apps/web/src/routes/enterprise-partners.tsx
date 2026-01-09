import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/enterprise-partners")({
  component: EnterprisePartnersComponent,
});

function EnterprisePartnersComponent() {
  return (
    <InfoPageLayout title="Enterprise Partners">
      <p>
        We partner with leading organizations in the South region to provide
        corporate training and development.
      </p>
      <p>
        Partnering with the South Chapter demonstrates your organization's
        commitment to excellence in project execution.
      </p>
    </InfoPageLayout>
  );
}
