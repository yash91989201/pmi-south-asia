import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/accessibility")({
  component: AccessibilityComponent,
});

function AccessibilityComponent() {
  return (
    <InfoPageLayout title="Accessibility">
      <p>
        The PMI South Chapter is committed to ensuring digital accessibility for
        people with disabilities. We are continually improving the user
        experience for everyone and applying the relevant accessibility
        standards.
      </p>
    </InfoPageLayout>
  );
}
