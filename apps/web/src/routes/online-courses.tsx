import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/online-courses")({
  component: OnlineCoursesComponent,
});

function OnlineCoursesComponent() {
  return (
    <InfoPageLayout title="Online Courses">
      <p>
        Expand your skills with our curated selection of online learning
        opportunities. From on-demand webinars to full e-learning modules, we
        support your continuous growth.
      </p>
      <p>
        South Chapter members receive discounts on select PMI eLearning courses.
        Check your member dashboard for promo codes.
      </p>
    </InfoPageLayout>
  );
}
