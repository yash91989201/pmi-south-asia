import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";

import type { Certification } from "@/lib/types";

const searchSchema = z.object({
  id: z.string().optional(),
});

export const Route = createFileRoute("/certifications")({
  validateSearch: searchSchema,
  component: CertificationsComponent,
});

const certificationsData: Certification[] = [
  {
    id: "pmp",
    code: "PMP®",
    name: "Project Management Professional (PMP)®",
    type: "core",
    priceMember: "$405 USD",
    priceNonMember: "$555 USD",
    experienceLevel: "3-5 years of experience",
    description:
      "The PMP is the gold standard of project management certification. Validates your competence to perform in the role of a project manager, leading and directing projects and teams.",
    prerequisites: [
      "Four-Year Degree",
      "36 months leading projects",
      "35 hours of project management education/training or CAPM® Certification",
      "OR High School Diploma, 60 months leading projects, 35 hours of training",
    ],
    audience:
      "Experienced project managers responsible for all aspects of project delivery.",
    examDuration: "230 minutes",
    examQuestions: "180 questions",
    maintenancePdus: "60 PDUs every 3 years",
  },
  {
    id: "capm",
    code: "CAPM®",
    name: "Certified Associate in Project Management (CAPM)®",
    type: "core",
    priceMember: "$225 USD",
    priceNonMember: "$300 USD",
    experienceLevel: "No experience required",
    description:
      "Show the world that you possess the foundational knowledge and skills that project teams demand. The CAPM proves that you're ready to take on a wide range of projects.",
    prerequisites: [
      "Secondary degree (high school diploma, associate's degree or the global equivalent)",
      "23 contact hours of formal project management education",
    ],
    audience:
      "Entry-level project managers, students, or those looking to start a career.",
    examDuration: "180 minutes",
    examQuestions: "150 questions",
    maintenancePdus: "15 PDUs every 3 years",
  },
  {
    id: "pgmp",
    code: "PgMP®",
    name: "Program Management Professional (PgMP)®",
    type: "core",
    priceMember: "$800 USD",
    priceNonMember: "$1,000 USD",
    experienceLevel: "8+ years of experience",
    description:
      "Designed for those who manage multiple, complex projects to achieve strategic and organizational results.",
    prerequisites: [
      "Secondary degree + 48 months PM + 84 months PgM",
      "OR Four-year degree + 48 months PM + 48 months PgM",
    ],
    audience: "Senior-level practitioners who manage programs.",
    examDuration: "4 hours",
    examQuestions: "170 questions",
    maintenancePdus: "60 PDUs every 3 years",
  },
  {
    id: "pfmp",
    code: "PfMP®",
    name: "Portfolio Management Professional (PfMP)®",
    type: "core",
    priceMember: "$800 USD",
    priceNonMember: "$1,000 USD",
    experienceLevel: "8+ years of experience",
    description:
      "Recognizes the advanced experience and skill of portfolio managers.",
    prerequisites: ["96 months professional experience"],
    audience: "Executive or senior-level practitioners.",
    examDuration: "4 hours",
    examQuestions: "170 questions",
    maintenancePdus: "60 PDUs every 3 years",
  },
  {
    id: "pmi-acp",
    code: "PMI-ACP®",
    name: "PMI Agile Certified Practitioner (PMI-ACP)®",
    type: "specialized",
    priceMember: "$435 USD",
    priceNonMember: "$495 USD",
    experienceLevel: "2+ years of experience",
    description:
      "Created for those who believe in and apply agile principles and practices on projects.",
    prerequisites: [
      "21 contact hours of training in agile practices",
      "8 months agile experience",
    ],
    audience: "Practitioners who utilize Agile tools and techniques.",
    examDuration: "3 hours",
    examQuestions: "120 questions",
    maintenancePdus: "30 PDUs every 3 years",
  },
  {
    id: "pmi-pba",
    code: "PMI-PBA®",
    name: "Professional in Business Analysis (PMI-PBA)®",
    type: "specialized",
    priceMember: "$405 USD",
    priceNonMember: "$555 USD",
    experienceLevel: "3+ years of experience",
    description: "Highlight your expertise in business analysis.",
    prerequisites: ["60 months of business analysis experience"],
    audience: "Business analysts working on projects.",
    examDuration: "4 hours",
    examQuestions: "200 questions",
    maintenancePdus: "60 PDUs every 3 years",
  },
];

type TabType = "overview" | "exam-prep" | "requirements" | "maintain";

function CertificationsComponent() {
  const { id: certId } = Route.useSearch();
  const selectedCert = certificationsData.find((c) => c.id === certId);
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab("overview");
  }, [certId]);

  if (selectedCert) {
    return (
      <div className="w-full bg-white">
        <div className="border-white/10 border-b bg-[#001021] px-4 py-4 text-gray-400 text-xs sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1400px] items-center gap-2">
            <Link className="hover:text-white" to="/">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link className="hover:text-white" to="/certifications">
              Certifications
            </Link>
            <ChevronRight size={12} />
            <span className="font-bold text-white">{selectedCert.name}</span>
          </div>
        </div>

        <section className="relative overflow-hidden bg-[#001021] py-16 text-white lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001021] to-[#001b33]" />

          <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="relative flex-shrink-0">
                <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-cyan-600 to-blue-600 shadow-2xl md:h-96 md:w-96">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                  <div className="relative z-10 rounded-xl border-4 border-white/20 px-6 py-2 backdrop-blur-sm">
                    <span className="font-extrabold text-4xl text-white tracking-tighter drop-shadow-md md:text-6xl">
                      {selectedCert.code.replace("®", "")}
                      <sup className="text-xl md:text-2xl">®</sup>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1/3 w-full bg-black/20 blur-xl" />
                </div>
              </div>

              <div className="max-w-2xl flex-grow">
                <div className="mb-6 inline-block rounded-full border border-white/30 px-3 py-1 font-semibold text-xs uppercase tracking-wider">
                  Global Certification
                </div>
                <h1 className="mb-4 font-bold text-4xl leading-tight md:text-5xl">
                  {selectedCert.name}
                </h1>
                <h2 className="mb-6 font-bold text-cyan-400 text-xl md:text-2xl">
                  {selectedCert.experienceLevel}
                </h2>
                <p className="mb-8 text-gray-300 text-lg leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                  <div className="mb-6 flex flex-wrap gap-8">
                    <div>
                      <p className="mb-1 font-bold text-sm text-white">
                        PMI Member price
                      </p>
                      <p className="font-bold text-2xl text-white">
                        {selectedCert.priceMember}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-bold text-gray-400 text-sm">
                        Non-Member price
                      </p>
                      <p className="font-bold text-2xl text-gray-400">
                        {selectedCert.priceNonMember}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <a
                        className="rounded-full bg-white px-8 py-3 font-bold text-[#001021] shadow-lg transition-colors hover:bg-gray-200"
                        href="https://www.pmi.org/certifications"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Apply at PMI.org
                      </a>
                    </div>
                  </div>
                  <div className="border-white/10 border-t pt-4 text-gray-400 text-xs">
                    <p className="mb-2">
                      Exam fees are paid directly to PMI Global. Membership
                      discounts apply automatically at checkout.
                    </p>
                    <Link
                      className="flex items-center gap-1 font-bold text-cyan-400 hover:underline"
                      to="/membership"
                    >
                      Join Chapter for Study Groups <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-20 z-30 border-gray-200 border-b bg-white shadow-sm">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8 overflow-x-auto">
              {(
                ["overview", "exam-prep", "requirements", "maintain"] as const
              ).map((tab) => (
                <button
                  className={`whitespace-nowrap border-b-4 py-5 font-bold text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? "border-pmi-primary text-pmi-primary"
                      : "border-transparent text-gray-600 hover:text-pmi-primary"
                  }`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                >
                  {tab === "exam-prep" ? "Exam Prep" : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="min-h-[400px] space-y-12 lg:col-span-2">
                {activeTab === "overview" && (
                  <div className="space-y-10">
                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                      <h3 className="mb-6 flex items-center gap-3 font-bold text-2xl text-gray-900">
                        <Award className="text-pmi-primary" /> Why Earn the{" "}
                        {selectedCert.code}?
                      </h3>
                      <p className="mb-6 text-gray-600 text-lg leading-relaxed">
                        Earning the {selectedCert.name} demonstrates to
                        employers, peers, and the world that you have the
                        skills, knowledge, and experience to contribute
                        significantly to project team success.
                      </p>
                      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                          <h4 className="mb-2 font-bold text-blue-900">
                            Global Recognition
                          </h4>
                          <p className="text-blue-800 text-sm">
                            Your skills are recognized across industries and
                            geography.
                          </p>
                        </div>
                        <div className="rounded-xl border border-purple-100 bg-purple-50 p-6">
                          <h4 className="mb-2 font-bold text-pmi-deep">
                            Career Growth
                          </h4>
                          <p className="text-pmi-deep text-sm">
                            Certified professionals earn up to 20% more on
                            average (PMI Salary Survey).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                      <h3 className="mb-6 font-bold text-2xl text-gray-900">
                        Who Should Apply?
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {selectedCert.audience}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "exam-prep" && (
                  <div className="space-y-10">
                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                      <h3 className="mb-6 flex items-center gap-3 font-bold text-2xl text-gray-900">
                        <FileText className="text-pmi-primary" /> Exam
                        Information
                      </h3>
                      <p className="mb-8 text-gray-600 text-lg">
                        The {selectedCert.code} exam challenges you to apply
                        your knowledge and experience to real-life project
                        scenarios.
                      </p>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6">
                          <div className="rounded-full bg-white p-3 text-pmi-accent shadow-sm">
                            <Clock size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-500 text-sm uppercase">
                              Duration
                            </p>
                            <p className="font-bold text-gray-900 text-xl">
                              {selectedCert.examDuration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6">
                          <div className="rounded-full bg-white p-3 text-pmi-accent shadow-sm">
                            <FileText size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-500 text-sm uppercase">
                              Questions
                            </p>
                            <p className="font-bold text-gray-900 text-xl">
                              {selectedCert.examQuestions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                      <h3 className="mb-6 font-bold text-2xl text-gray-900">
                        Prepare with the Chapter
                      </h3>
                      <p className="mb-8 text-gray-600">
                        Success on the exam requires preparation. As an
                        Authorized Training Partner (ATP), the South Asia
                        Chapter provides official support.
                      </p>
                      <div className="space-y-4">
                        <div className="group cursor-pointer rounded-xl border border-gray-200 p-6 transition-colors hover:border-pmi-primary">
                          <h4 className="flex items-center justify-between font-bold text-gray-900 text-lg group-hover:text-pmi-primary">
                            Chapter Bootcamps <ArrowRight size={18} />
                          </h4>
                          <p className="mt-2 text-gray-600">
                            Instructor-led training that satisfies the 35
                            Contact Hours requirement.
                          </p>
                        </div>
                        <div className="group cursor-pointer rounded-xl border border-gray-200 p-6 transition-colors hover:border-pmi-primary">
                          <h4 className="flex items-center justify-between font-bold text-gray-900 text-lg group-hover:text-pmi-primary">
                            Exam Content Outline (ECO) <ArrowRight size={18} />
                          </h4>
                          <p className="mt-2 text-gray-600">
                            Download the official document that breaks down the
                            domains (People, Process, Business Environment).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "requirements" && (
                  <div className="space-y-10">
                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                      <h3 className="mb-6 flex items-center gap-3 font-bold text-2xl text-gray-900">
                        <GraduationCap className="text-pmi-primary" />{" "}
                        Eligibility Requirements
                      </h3>
                      <p className="mb-8 text-gray-600 text-lg">
                        To be eligible for the {selectedCert.code}, you must
                        meet specific educational and professional experience
                        requirements.
                      </p>

                      <div className="space-y-6">
                        {selectedCert.prerequisites.map((req, i) => (
                          <div
                            className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
                            key={req}
                          >
                            <div className="mt-1 rounded-full bg-green-100 p-2 text-green-700">
                              <CheckCircle2 size={20} />
                            </div>
                            <div>
                              <h4 className="mb-1 font-bold text-gray-900 text-lg">
                                Prerequisite Option {i + 1}
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                {req}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "maintain" && (
                  <div className="space-y-10">
                    <div className="rounded-2xl bg-white p-10 shadow-sm">
                      <h3 className="mb-6 flex items-center gap-3 font-bold text-2xl text-gray-900">
                        <RefreshCw className="text-pmi-primary" /> Maintaining
                        Your Certification
                      </h3>
                      <p className="mb-8 text-gray-600 text-lg">
                        To maintain your {selectedCert.code}, you must earn
                        Professional Development Units (PDUs) every three years.
                      </p>

                      <div className="mb-10 rounded-2xl border border-purple-100 bg-purple-50 p-8 text-center">
                        <h4 className="mb-4 font-bold text-pmi-deep text-sm uppercase tracking-widest">
                          Your Renewal Cycle
                        </h4>
                        <p className="mb-2 font-extrabold text-5xl text-pmi-primary">
                          {selectedCert.maintenancePdus?.split(" ")[0]}
                        </p>
                        <p className="font-bold text-gray-700 text-xl">
                          PDUs Required
                        </p>
                        <p className="mt-2 text-gray-500">Every 3 Years</p>
                      </div>

                      <h4 className="mb-4 font-bold text-gray-900 text-lg">
                        Earn PDUs with South Asia Chapter
                      </h4>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-gray-200 p-6">
                          <h5 className="mb-2 font-bold text-pmi-primary">
                            Education
                          </h5>
                          <p className="text-gray-600 text-sm">
                            Attend our monthly chapter meetings, webinars, or
                            formal training courses.
                          </p>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-6">
                          <h5 className="mb-2 font-bold text-pmi-primary">
                            Giving Back
                          </h5>
                          <p className="text-gray-600 text-sm">
                            Volunteer on the board, mentor new members, or speak
                            at an event.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <div className="rounded-2xl bg-pmi-primary p-8 text-white shadow-lg">
                  <h3 className="mb-4 font-bold text-xl">Not a Member?</h3>
                  <p className="mb-6 opacity-90">
                    Join PMI South Asia Chapter today to save on your
                    certification exam and get access to exclusive study groups.
                  </p>
                  <Link
                    className="inline-block w-full rounded-lg bg-white py-3 text-center font-bold text-pmi-primary transition-colors hover:bg-gray-100"
                    to="/membership"
                  >
                    Become a Member
                  </Link>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                    <Globe size={20} /> Exam Languages
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Arabic, Chinese (Simplified + Traditional), English, French,
                    German, Hebrew, Indonesian, Italian, Japanese, Korean,
                    Portuguese, Russian, Spanish, Turkish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 font-bold text-5xl text-gray-900">
            Certifications
          </h1>
          <p className="max-w-3xl text-gray-600 text-xl leading-relaxed">
            You have the skills. Now show the world. Earning a PMI certification
            shows that you have the essential knowledge and skills to lead
            projects and teams.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="mb-10 border-pmi-primary border-l-4 pl-4 font-bold text-3xl text-gray-900">
              Core Certifications
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {certificationsData
                .filter((c) => c.type === "core")
                .map((cert) => (
                  <Link
                    className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-pmi-primary hover:shadow-xl"
                    key={cert.id}
                    search={{ id: cert.id }}
                    to="/certifications"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-pmi-deep font-bold text-sm text-white transition-colors group-hover:bg-pmi-primary">
                      {cert.code.replace("®", "")}
                    </div>
                    <h3 className="mb-3 font-bold text-gray-900 text-xl transition-colors group-hover:text-pmi-primary">
                      {cert.name}
                    </h3>
                    <p className="mb-6 line-clamp-3 flex-grow text-gray-600 text-sm">
                      {cert.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1 font-bold text-pmi-primary text-sm">
                      View Details{" "}
                      <ArrowRight
                        className="transform transition-transform group-hover:translate-x-1"
                        size={16}
                      />
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h2 className="mb-10 border-pmi-accent border-l-4 pl-4 font-bold text-3xl text-gray-900">
              Specialized Certifications
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {certificationsData
                .filter((c) => c.type === "specialized")
                .map((cert) => (
                  <Link
                    className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-pmi-accent hover:shadow-xl"
                    key={cert.id}
                    search={{ id: cert.id }}
                    to="/certifications"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-800 font-bold text-sm text-white transition-colors group-hover:bg-pmi-accent">
                      {cert.code.replace("®", "")}
                    </div>
                    <h3 className="mb-3 font-bold text-gray-900 text-xl transition-colors group-hover:text-pmi-primary">
                      {cert.name}
                    </h3>
                    <p className="mb-6 line-clamp-3 flex-grow text-gray-600 text-sm">
                      {cert.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1 font-bold text-pmi-primary text-sm">
                      View Details{" "}
                      <ArrowRight
                        className="transform transition-transform group-hover:translate-x-1"
                        size={16}
                      />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
