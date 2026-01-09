import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/what-is-pm")({
  component: WhatIsPMComponent,
});

function WhatIsPMComponent() {
  return (
    <InfoPageLayout title="What is Project Management?">
      <p>
        Project management is the use of specific knowledge, skills, tools, and
        techniques to deliver something of value to people. The development of
        software for an improved business process, the construction of a
        building, the relief effort after a natural disaster, the expansion of
        sales into a new geographic market—these are all examples of projects.
      </p>
      <h3 className="mt-4 font-bold text-xl">What is a Project Manager?</h3>
      <p>
        Project managers are change agents. They make project goals their own
        and use their skills and expertise to inspire a sense of shared purpose
        within the project team.
      </p>
    </InfoPageLayout>
  );
}
