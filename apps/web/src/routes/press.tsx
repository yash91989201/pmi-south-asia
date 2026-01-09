import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/press")({
  component: PressComponent,
});

function PressComponent() {
  return (
    <InfoPageLayout title="Press & Media">
      <p>
        For media inquiries regarding the South Chapter, please contact our VP
        of Marketing.
      </p>
      <p>
        We are available for comment on local industry trends and chapter
        initiatives.
      </p>
    </InfoPageLayout>
  );
}
