import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/community-latest")({
  component: CommunityLatestComponent,
});

function CommunityLatestComponent() {
  return (
    <InfoPageLayout title="Latest from the Community">
      <p>
        Read about member success stories, recent event recaps, and chapter
        news.
      </p>
      <p>
        <strong>Recent Highlight:</strong> Our chapter recently won the "Chapter
        of the Year" award for our retention initiatives!
      </p>
    </InfoPageLayout>
  );
}
