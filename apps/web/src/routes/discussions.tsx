import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/discussions")({
  component: DiscussionsComponent,
});

function DiscussionsComponent() {
  return (
    <InfoPageLayout title="Discussions">
      <p>
        Join the conversation on our LinkedIn Group. Share challenges, ask
        questions, and offer advice to fellow project managers.
      </p>
      <a className="text-pmi-primary underline" href="#">
        Visit LinkedIn Group
      </a>
    </InfoPageLayout>
  );
}
