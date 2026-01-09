import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/store")({
  component: StoreComponent,
});

function StoreComponent() {
  return (
    <InfoPageLayout title="Chapter Store">
      <p>
        Show your pride with official PMI South Chapter merchandise. From polo
        shirts to notebooks, we have gear for every project professional.
      </p>
      <p>
        <em>Store is currently under maintenance. Please check back later.</em>
      </p>
    </InfoPageLayout>
  );
}
