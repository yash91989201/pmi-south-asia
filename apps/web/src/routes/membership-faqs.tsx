import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/membership-faqs")({
  component: MembershipFAQsComponent,
});

function MembershipFAQsComponent() {
  return (
    <InfoPageLayout title="Membership FAQs">
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 font-bold text-xl">
            Do I need to be a PMI Global member to join the chapter?
          </h3>
          <p>
            Yes, chapter membership is an add-on to your global PMI membership.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-xl">How much does it cost?</h3>
          <p>
            PMI Global membership is $129/year. South Chapter membership is
            $30/year.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-xl">
            Can I join multiple chapters?
          </h3>
          <p>
            Yes, you can join as many chapters as you like, provided you pay the
            dues for each.
          </p>
        </div>
      </div>
    </InfoPageLayout>
  );
}
