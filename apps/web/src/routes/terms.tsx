import { createFileRoute } from "@tanstack/react-router";

import InfoPageLayout from "@/components/info-page-layout";

export const Route = createFileRoute("/terms")({
  component: TermsComponent,
});

function TermsComponent() {
  return (
    <InfoPageLayout title="Terms and Conditions">
      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          1. Enrollment and Registration
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            1.1 Acceptance of Terms
          </h3>
          <p>
            By enrolling in our programs, becoming a member, or using this
            website, you agree to abide by these terms and conditions. These
            terms apply to all visitors, users, and members of PMI South Asia.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            1.2 Completion of Registration
          </h3>
          <p>
            Registration is complete upon payment of the applicable membership
            or program fee. All information provided during registration must be
            accurate, complete, and current at all times.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            1.3 Accurate Information
          </h3>
          <p>
            Participants and members must provide accurate and up-to-date
            information during registration. PMI South Asia reserves the right
            to suspend or terminate accounts with inaccurate information.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          2. Membership Benefits and Services
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            2.1 Membership Benefits
          </h3>
          <p>
            PMI South Asia membership provides access to networking events,
            professional development resources, chapter meetings, webinars, and
            exclusive content. Benefits are subject to change with notice to
            members.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            2.2 Non-Transferable
          </h3>
          <p>
            Membership benefits and access to services are strictly
            non-transferable and intended exclusively for the registered member.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            2.3 Membership Duration
          </h3>
          <p>
            Membership is valid for the period specified at the time of
            enrollment, typically one year from the date of payment
            confirmation.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          3. Program Content and Delivery
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            3.1 Educational Purpose
          </h3>
          <p>
            All program materials, including presentations, handouts, and
            assessments, are provided solely for educational and professional
            development purposes.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            3.2 Active Engagement
          </h3>
          <p>
            Participants are expected to actively engage in learning activities
            and complete any required assignments or assessments on time.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            3.3 Study Materials
          </h3>
          <p>
            Study materials and resources provided by PMI South Asia are for
            personal use only and will not be re-shared or redistributed without
            prior written consent.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">4. Code of Conduct</h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            4.1 Respectful Behavior
          </h3>
          <p>
            Respectful behavior towards instructors, fellow participants, staff
            members, and volunteers is mandatory at all PMI South Asia events
            and online platforms.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            4.2 Zero Tolerance Policy
          </h3>
          <p>
            Discrimination, harassment, or disruptive conduct will not be
            tolerated. Violations may result in immediate removal from events
            and termination of membership without refund.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            4.3 Professional Integrity
          </h3>
          <p>
            Plagiarism, cheating, or misrepresentation in any assessment or
            certification activity is strictly prohibited and may result in
            disciplinary action.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">5. Refund Policy</h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            5.1 Membership Refunds
          </h3>
          <p>
            Refund requests for membership fees must be submitted within 7 days
            of payment. A processing fee may apply. No refunds are provided
            after membership benefits have been accessed or utilized.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            5.2 Event and Program Refunds
          </h3>
          <p>
            For paid events and programs, refund requests must be submitted at
            least 7 days prior to the event date. No refunds will be provided
            for no-shows or cancellations within 7 days of the event.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            5.3 Processing Time
          </h3>
          <p>
            Approved refunds will be processed within 10-15 business days to the
            original payment method.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          6. Certification and Assessment
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            6.1 PMI Certifications
          </h3>
          <p>
            PMI South Asia provides exam preparation and training for PMI
            certifications. All certification exams are administered by PMI
            Global and subject to their policies and procedures.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            6.2 Chapter Certificates
          </h3>
          <p>
            Participants who meet program requirements may receive certificates
            of participation or completion from PMI South Asia. These are
            distinct from PMI Global certifications.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            6.3 Performance Requirements
          </h3>
          <p>
            Certification and certificate awards are contingent upon
            satisfactory performance and meeting all stated requirements.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          7. Intellectual Property
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            7.1 Copyright Protection
          </h3>
          <p>
            All course materials, presentations, documents, and content provided
            by PMI South Asia are protected by copyright and other intellectual
            property laws.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            7.2 Restrictions on Use
          </h3>
          <p>
            Participants and members may not reproduce, distribute, modify, or
            share PMI South Asia content without explicit written permission.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            7.3 PMI Trademarks
          </h3>
          <p>
            PMI, PMP, CAPM, PMI-ACP, PMBOK, and other PMI certification marks
            are registered trademarks of Project Management Institute, Inc. Use
            of these marks is subject to PMI Global policies.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          8. Privacy and Data Protection
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            8.1 Use of Personal Information
          </h3>
          <p>
            Personal information collected during registration will be used
            solely for membership services, program delivery, and chapter
            communications. We do not sell member data to third parties.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            8.2 Data Protection
          </h3>
          <p>
            We adhere to applicable data protection laws and maintain
            appropriate confidentiality and security measures.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            8.3 Communications
          </h3>
          <p>
            Members may receive communications regarding chapter updates,
            events, and professional development opportunities. Members can
            manage communication preferences through their account settings.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          9. Limitation of Liability
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            9.1 No Guaranteed Outcomes
          </h3>
          <p>
            PMI South Asia programs provide guidance and resources for
            professional development but do not guarantee specific career
            outcomes, job placements, or certification success.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            9.2 Independent Entity
          </h3>
          <p>
            PMI South Asia is a chartered component of PMI and operates
            independently. We are not responsible for PMI Global policies,
            certification decisions, or exam results.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            9.3 Third-Party Services
          </h3>
          <p>
            We are not responsible for third-party services, websites, or
            content linked from our platform.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          10. Modification of Terms
        </h2>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">
            10.1 Periodic Updates
          </h3>
          <p>
            These terms and conditions may be updated periodically. Members and
            users will be notified of significant changes via email or through
            the website.
          </p>

          <h3 className="font-semibold text-gray-800 text-lg">
            10.2 Continued Use
          </h3>
          <p>
            Continued use of PMI South Asia services after changes to these
            terms constitutes acceptance of the updated terms.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">
          11. Contact Information
        </h2>
        <p>
          For questions about these terms and conditions, please contact us:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Email:</strong>{" "}
            <a
              className="text-pmi-primary hover:underline"
              href="mailto:sales@pmisouthasia.in"
            >
              sales@pmisouthasia.in
            </a>
          </li>
          <li>
            <strong>Contact Page:</strong>{" "}
            <a className="text-pmi-primary hover:underline" href="/contact">
              Visit our Contact Page
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">12. Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of the
          jurisdiction in which PMI South Asia operates. Any disputes arising
          from these terms shall be resolved through appropriate legal channels
          in that jurisdiction.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-bold text-2xl text-gray-900">Last Updated</h2>
        <p>
          These terms and conditions were last updated on{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          .
        </p>
      </section>
    </InfoPageLayout>
  );
}
