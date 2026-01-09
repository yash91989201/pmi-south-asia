import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/terms")({
  component: TermsComponent,
});

function TermsComponent() {
  return (
    <InfoPageLayout title="Terms of Use">
      <p>
        By using this website, you agree to comply with and be bound by the
        following terms and conditions of use.
      </p>
    </InfoPageLayout>
  );
}
