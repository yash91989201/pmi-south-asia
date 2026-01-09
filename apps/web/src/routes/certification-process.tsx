import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/certification-process")({
  component: CertificationProcessComponent,
});

function CertificationProcessComponent() {
  return (
    <div className="w-full bg-white">
      <section className="bg-pmi-deep py-24 text-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-block rounded-full bg-pmi-primary px-4 py-1.5 font-bold text-xs uppercase tracking-widest">
            Official Guide
          </div>
          <h1 className="mb-6 font-bold text-5xl">
            Your Certification Journey
          </h1>
          <p className="max-w-3xl font-light text-gray-300 text-xl">
            As an official PMI Chartered Chapter and Authorized Training
            Partner, we guide you through the official process to earn your
            PMP®, CAPM®, or PMI-ACP®.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700 text-lg leading-relaxed">
            <p className="font-medium text-2xl text-pmi-deep">
              The path to certification is rigorous but rewarding.
            </p>
            <p>
              PMI certifications are globally recognized because they require a
              combination of real-world experience, formal education, and a
              passing score on a standardized exam. As the South Asia Chapter,
              we provide the <strong>Authorized Training</strong> required to
              sit for the exam and the community support to help you study.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center font-bold text-3xl text-pmi-deep md:text-4xl">
            The Official Certification Lifecycle
          </h2>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 hidden w-1 -translate-x-1/2 transform bg-gray-200 md:block" />

            <div className="space-y-20">
              <div className="relative flex flex-col items-center md:flex-row">
                <div className="order-2 mt-6 pr-0 text-center md:order-1 md:mt-0 md:w-1/2 md:pr-16 md:text-right">
                  <h3 className="mb-2 font-bold text-2xl text-pmi-primary">
                    1. Validate Eligibility
                  </h3>
                  <p className="text-gray-600">
                    Ensure you meet the experience and education requirements
                    for your desired certification (e.g., for PMP: 36 months
                    experience with a degree, or 60 months without).
                  </p>
                </div>
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-pmi-deep font-bold text-white">
                  1
                </div>
                <div className="order-1 pl-0 md:order-2 md:w-1/2 md:pl-16">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <FileText className="mb-2 h-8 w-8 text-pmi-accent" />
                    <span className="font-bold text-gray-900">
                      PMI Handbook
                    </span>
                    <p className="text-gray-500 text-sm">
                      Download the specific handbook for your cert at PMI.org.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center md:flex-row">
                <div className="order-2 pr-0 md:order-1 md:w-1/2 md:pr-16">
                  <div className="flex flex-col items-end rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <Award className="mb-2 h-8 w-8 text-pmi-accent" />
                    <span className="text-right font-bold text-gray-900">
                      Chapter Training
                    </span>
                    <p className="text-right text-gray-500 text-sm">
                      Our Bootcamps provide the required 35 Contact Hours.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-pmi-deep font-bold text-white">
                  2
                </div>
                <div className="order-1 mt-6 pl-0 text-center md:order-2 md:mt-0 md:w-1/2 md:pl-16 md:text-left">
                  <h3 className="mb-2 font-bold text-2xl text-pmi-primary">
                    2. Fulfill Education Requirements
                  </h3>
                  <p className="text-gray-600">
                    Most certifications require contact hours of formal
                    education. As an ATP, the South Asia Chapter offers courses
                    that utilize official PMI content to satisfy this
                    requirement.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center md:flex-row">
                <div className="order-2 mt-6 pr-0 text-center md:order-1 md:mt-0 md:w-1/2 md:pr-16 md:text-right">
                  <h3 className="mb-2 font-bold text-2xl text-pmi-primary">
                    3. Submit Application
                  </h3>
                  <p className="text-gray-600">
                    Create an account on PMI.org and submit your application.
                    Document your projects and training. PMI typically reviews
                    applications within 5 business days.
                  </p>
                </div>
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-pmi-deep font-bold text-white">
                  3
                </div>
                <div className="order-1 pl-0 md:order-2 md:w-1/2 md:pl-16">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <CheckCircle2 className="mb-2 h-8 w-8 text-pmi-accent" />
                    <span className="font-bold text-gray-900">
                      Audit Process
                    </span>
                    <p className="text-gray-500 text-sm">
                      Some applications are selected for random audit. Keep your
                      certificates handy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center md:flex-row">
                <div className="order-2 pr-0 md:order-1 md:w-1/2 md:pr-16">
                  <div className="flex flex-col items-end rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <Globe className="mb-2 h-8 w-8 text-pmi-accent" />
                    <span className="text-right font-bold text-gray-900">
                      Pearson VUE
                    </span>
                    <p className="text-right text-gray-500 text-sm">
                      Take the exam online or at a local center.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-pmi-deep font-bold text-white">
                  4
                </div>
                <div className="order-1 mt-6 pl-0 text-center md:order-2 md:mt-0 md:w-1/2 md:pl-16 md:text-left">
                  <h3 className="mb-2 font-bold text-2xl text-pmi-primary">
                    4. Payment & Scheduling
                  </h3>
                  <p className="text-gray-600">
                    Once approved, pay the exam fee. <strong>Tip:</strong> Join
                    PMI and the South Asia Chapter <em>before</em> paying to
                    save significantly on the exam cost. Then, schedule your
                    exam via Pearson VUE.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center md:flex-row">
                <div className="order-2 mt-6 pr-0 text-center md:order-1 md:mt-0 md:w-1/2 md:pr-16 md:text-right">
                  <h3 className="mb-2 font-bold text-2xl text-pmi-primary">
                    5. Maintenance (CCRS)
                  </h3>
                  <p className="text-gray-600">
                    After passing, you enter the Continuing Certification
                    Requirements System (CCRS) cycle. You must earn Professional
                    Development Units (PDUs) every 3 years (e.g., 60 PDUs for
                    PMP) to maintain your status.
                  </p>
                </div>
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-pmi-deep font-bold text-white">
                  5
                </div>
                <div className="order-1 pl-0 md:order-2 md:w-1/2 md:pl-16">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                    <Clock className="mb-2 h-8 w-8 text-pmi-accent" />
                    <span className="font-bold text-gray-900">
                      3 Year Cycle
                    </span>
                    <p className="text-gray-500 text-sm">
                      Attend Chapter events to earn PDUs easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-gray-100 border-t bg-gray-50 py-24">
        <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 font-bold text-3xl text-pmi-deep">
            Why train with the South Asia Chapter?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 font-bold text-pmi-primary text-xl">
                Official Content
              </h3>
              <p className="text-gray-600">
                We use PMI-developed training materials that are only available
                to Authorized Training Partners.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 font-bold text-pmi-primary text-xl">
                Vetted Instructors
              </h3>
              <p className="text-gray-600">
                Our instructors are PMP certified and have completed PMI's
                rigorous "Train the Trainer" program.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 font-bold text-pmi-primary text-xl">
                Community Support
              </h3>
              <p className="text-gray-600">
                Gain access to local study groups and mentors who have
                successfully navigated the exam.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-pmi-brand px-8 py-4 font-bold text-white transition-colors hover:bg-blue-700"
              to="/contact"
            >
              Inquire About Upcoming Courses <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
