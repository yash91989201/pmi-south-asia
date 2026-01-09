import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/careers")({
  component: CareersComponent,
});

function CareersComponent() {
  return (
    <InfoPageLayout title="Careers">
      <p>
        Explore job opportunities in the South region. Our Job Board connects
        local employers with qualified project professionals.
      </p>
      <p>
        Members can post their resumes and view full job descriptions for free.
      </p>
    </InfoPageLayout>
  );
}
