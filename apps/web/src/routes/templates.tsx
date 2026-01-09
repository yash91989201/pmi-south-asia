import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/templates")({
  component: TemplatesComponent,
});

function TemplatesComponent() {
  return (
    <InfoPageLayout title="Templates">
      <p>
        Access our library of project management templates. From Project
        Charters to Risk Registers, these resources are free for chapter
        members.
      </p>
      <p>
        <em>Login required to access downloads.</em>
      </p>
    </InfoPageLayout>
  );
}
