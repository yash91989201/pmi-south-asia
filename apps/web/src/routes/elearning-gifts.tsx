import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/elearning-gifts")({
  component: ELearningGiftsComponent,
});

function ELearningGiftsComponent() {
  return (
    <InfoPageLayout title="eLearning Gifts">
      <p>
        Give the gift of knowledge. Purchase course vouchers for your team
        members or colleagues.
      </p>
      <p>Contact the VP of Professional Development for bulk pricing.</p>
    </InfoPageLayout>
  );
}
