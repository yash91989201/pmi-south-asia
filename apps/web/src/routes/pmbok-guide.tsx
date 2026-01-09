import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/pmbok-guide")({
  component: PMBOKGuideComponent,
});

function PMBOKGuideComponent() {
  return (
    <InfoPageLayout title="PMBOK® Guide">
      <p>
        The A Guide to the Project Management Body of Knowledge (PMBOK® Guide)
        is the flagship publication of PMI. It provides a foundation for
        effective project management across industries.
      </p>
      <p>PMI Members can download a PDF copy of the PMBOK® Guide for free.</p>
      <div className="border-pmi-accent border-l-4 bg-gray-50 p-4">
        <strong>Current Edition:</strong> PMBOK® Guide – Seventh Edition
      </div>
    </InfoPageLayout>
  );
}
