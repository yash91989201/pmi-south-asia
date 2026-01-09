import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/blogs")({
  component: BlogsComponent,
});

function BlogsComponent() {
  return (
    <InfoPageLayout title="Chapter Blogs">
      <p>
        Insights from local thought leaders. Our blog covers trends in Agile, AI
        in PM, and leadership.
      </p>
      <p>Interested in writing for us? Contact the VP of Marketing.</p>
    </InfoPageLayout>
  );
}
