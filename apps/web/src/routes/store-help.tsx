import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/store-help")({
  component: StoreHelpComponent,
});

function StoreHelpComponent() {
  return (
    <InfoPageLayout title="Store Help">
      <p>
        Need assistance with a purchase? Contact our support team for help with
        returns, exchanges, or order tracking.
      </p>
    </InfoPageLayout>
  );
}
