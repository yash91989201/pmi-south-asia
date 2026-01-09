import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/report-pdus")({
  component: ReportPDUsComponent,
});

function ReportPDUsComponent() {
  return (
    <InfoPageLayout title="Report PDUs">
      <p>
        Maintaining your certification requires earning and reporting
        Professional Development Units (PDUs). You can report your PDUs through
        the Continuing Certification Requirements System (CCRS).
      </p>
      <p className="font-bold">How to Report:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Log in to the CCRS with your PMI.org credentials.</li>
        <li>
          Select the category for your activity (Education or Giving Back).
        </li>
        <li>
          Enter the activity details. For South Chapter events, use the event
          code provided at the meeting.
        </li>
      </ul>
      <div className="mt-8">
        <a
          className="rounded-full bg-pmi-primary px-6 py-3 font-bold text-white transition hover:bg-pmi-deep"
          href="https://ccrs.pmi.org"
          rel="noreferrer"
          target="_blank"
        >
          Go to CCRS
        </a>
      </div>
    </InfoPageLayout>
  );
}
