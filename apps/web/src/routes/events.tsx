import { createFileRoute, Link } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/events")({
  component: EventsComponent,
});

function EventsComponent() {
  return (
    <InfoPageLayout title="Events Calendar">
      <p>
        Join us for networking, learning, and growth. We host monthly dinner
        meetings, breakfast roundtables, and annual symposiums.
      </p>
      <p>
        Visit the{" "}
        <Link className="text-pmi-primary underline" to="/">
          Home Page
        </Link>{" "}
        to see featured upcoming events or contact us for the full seasonal
        calendar.
      </p>
    </InfoPageLayout>
  );
}
