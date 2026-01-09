import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/purchasing-terms")({
  component: PurchasingTermsComponent,
});

function PurchasingTermsComponent() {
  return (
    <InfoPageLayout title="Purchasing Terms">
      <p>
        Terms and conditions applicable to the purchase of event tickets,
        merchandise, and other chapter products.
      </p>
      <p>
        <strong>Refund Policy:</strong> Event cancellations must be received 48
        hours prior to the event for a full refund.
      </p>
    </InfoPageLayout>
  );
}
