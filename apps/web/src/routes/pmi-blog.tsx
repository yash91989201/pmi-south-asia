import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/pmi-blog")({
  component: PMIBlogComponent,
});

function PMIBlogComponent() {
  return (
    <InfoPageLayout title="The PMI Blog">
      <p>
        Read the official blog from PMI Global for worldwide trends and
        announcements.
      </p>
      <p>
        Visit{" "}
        <a
          className="text-pmi-primary underline"
          href="https://www.pmi.org/learning/thought-leadership/blog"
        >
          pmi.org/blog
        </a>{" "}
        for the latest posts.
      </p>
    </InfoPageLayout>
  );
}
