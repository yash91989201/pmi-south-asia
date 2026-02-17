import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyComponent,
});

function RefundPolicyComponent() {
  return (
    <InfoPageLayout title="Refund Policy">
      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          No Refund Post Examination
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Once a candidate has attempted any examination, including the
            Pre-Board or Final Exam, no refund will be provided under any
            circumstances.
          </li>
          <li>
            This policy is designed to maintain the integrity of the course and
            assessment process, as study materials and evaluation resources have
            already been utilized at this stage.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          90% Fee Refund Policy Before Examination
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Candidates who wish to cancel their enrollment prior to attempting
            the Pre-Board Exam are eligible for a 90% refund of the total course
            fee.
          </li>
          <li>
            Refund requests are valid only if submitted within 24 hours of
            payment and the candidate has not attended the Pre-Board Exam.
            Failure to meet these conditions will make the candidate ineligible
            for a refund.
          </li>
          <li>
            All refund requests must be submitted in writing via email to the
            official support team.
          </li>
          <li>
            Once approved, refunds will be processed within 5–7 working days,
            with an additional up to 7 working days for the credited amount to
            reflect in the candidate's original payment account.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">No Full Refunds</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Please note that PMI South Asia does not provide a 100% refund under
            any circumstances.
          </li>
          <li>
            This policy accounts for administrative, processing, and content
            access costs incurred at the time of enrollment.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          Refund Request Guidelines
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            To initiate a refund, candidates must email sales@pmisouthasia.in
            with the following details: full name, registered email ID, course
            name, payment receipt, and reason for cancellation.
          </li>
          <li>
            Requests submitted without complete information may experience
            delays in processing.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          10% Processing Deduction on Refunds
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            All approved refunds will incur a 10% deduction to cover expenses
            related to digital content delivery, study materials, and platform
            usage.
          </li>
          <li>
            This deduction is applied consistently across all refund cases.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          Non-Refundable Cases
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Partial Course Completion:</strong> No refund will be issued
            if a candidate has completed only a portion of the course.
          </li>
          <li>
            <strong>Delayed Course Progress:</strong> Refunds are not available
            due to delays in course completion resulting from the candidate's
            own pace or schedule.
          </li>
          <li>
            <strong>Accessed Content:</strong> Once study materials, training
            videos, or Pre-Board Assessments have been accessed, the candidate
            becomes ineligible for a refund.
          </li>
          <li>
            <strong>Dissatisfaction with Course Content:</strong> Refunds cannot
            be requested based solely on personal preferences, expectations, or
            dissatisfaction with the course material.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          Consent to Policies
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            By enrolling in any course offered by PMI South Asia, candidates
            acknowledge and agree to abide by all policies, terms of service,
            and refund guidelines.
          </li>
          <li>
            Enrollment confirms that the candidate has read, understood, and
            accepted the terms outlined in these policies, including those
            related to payment, course access, exam schedules, and refunds.
          </li>
          <li>
            Candidates are responsible for reviewing all policies prior to
            enrollment, as continued use of course materials constitutes
            acceptance of all terms and conditions.
          </li>
          <li>
            PMI South Asia is an independent training and service provider and
            is not affiliated with, authorized by, or officially connected to
            any other institute, organization, or governing body. All rights to
            its services, content, and training materials are exclusively owned
            and reserved by PMI South Asia.
          </li>
          <li>
            Our programs are intended solely for skill development and
            professional growth. PMI South Asia does not guarantee any job
            placement, promotion, financial gain, or other monetary benefits
            upon completion of its training or certification programs.
          </li>
          <li>
            PMI South Asia is not responsible for any financial, personal, or
            professional losses incurred by individuals who enroll in our
            services based on third-party recommendations, promotions, or
            representations. Participation in such engagements is entirely at
            the individual's discretion and responsibility.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">Refund Requests</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Same Day Requests:</strong> If we receive a refund request
            on the same day within 24 hours of purchase, we will initiate your
            refund.
          </li>
          <li>
            <strong>Post-Enrollment Requests:</strong> Refund requests will not
            be entertained post 24 hours of enrollment, as per our Terms and
            Conditions.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">How to Inform Us</h2>
        <p>To initiate a refund request, please follow these steps:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Contact Us:</strong> Inform our customer service department
            of your decision to cancel the order. This can be done via:
            <ul className="list-disc space-y-1 pt-2 pl-6">
              <li>
                Email:{" "}
                <a
                  className="text-pmi-primary hover:underline"
                  href="mailto:sales@pmisouthasia.in"
                >
                  sales@pmisouthasia.in
                </a>
              </li>
              <li>Proof of transaction</li>
            </ul>
          </li>
          <li>
            <strong>Cancellation Confirmation:</strong> You will receive a
            confirmation email once your cancellation request has been
            successfully submitted.
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          Refund Initiation Process
        </h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Review Request:</strong> Upon receiving your refund request,
            we will review it as per the terms and conditions.
          </li>
          <li>
            <strong>Approval Notification:</strong> If your refund request is
            approved, you will be entitled to a full refund.
          </li>
          <li>
            <strong>Refund Process:</strong> The refund will be processed to
            your original source of payment or the same payment method you used.
          </li>
        </ol>
        <h3 className="mt-4 font-semibold text-gray-800 text-lg">
          Processing Time
        </h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The refund process may take 10 to 15 business days to complete.
          </li>
          <li>
            This timeframe includes the processing time by our financial
            institution and any processing time required by your payment
            provider.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">Exceptions</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Refund requests made after 24 hours of purchase and enrollment will
            not be entertained.
          </li>
          <li>
            Customized training programs based on assessed skill sets are
            non-refundable after enrollment.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">Important Notes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Pricing Variability:</strong> The pricing for the same
            course may vary for different candidates based on factors such as
            the number of days and hours required for training. These variables
            are determined by the candidate's skillset and learning needs,
            assessed and managed by our professional instructors to tailor the
            training duration accordingly.
          </li>
          <li>
            <strong>Document Retention:</strong> Keep copies of all
            communications and documentation related to your refund request for
            your records.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          Refund Policy Summary
        </h2>
        <p>
          PMI South Asia follows a strict refund policy to maintain the
          integrity of its training and examination systems. No refund is
          applicable once a candidate attempts any pre-board or final
          examination, or accesses study materials, assessments, or training
          content. Candidates may request a 90% refund only if the request is
          raised within 24 hours of payment and before attempting or attending
          any exam; a mandatory 10% deduction applies in all refund cases to
          cover administrative, content, and platform costs. PMI South Asia does
          not offer a 100% refund under any circumstances. Refund requests must
          be submitted in writing via email with complete details, and approved
          refunds are processed within 5–7 working days, with an additional up
          to 7 working days for bank credit. Refunds are not applicable for
          partial course completion, delayed progress at the candidate's own
          pace, dissatisfaction with course content, or reliance on third-party
          recommendations. By enrolling, candidates confirm that they have read,
          understood, and agreed to all terms and policies. PMI South Asia is an
          independent training provider and does not guarantee employment,
          monetary benefits, or outcomes from its programs.
        </p>
      </section>
    </InfoPageLayout>
  );
}
