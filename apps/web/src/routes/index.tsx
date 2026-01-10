import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";

import type { Event } from "@/lib/types";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Chapter Dinner Meeting: AI in Project Management",
    date: "October 15, 2024 - 6:00 PM",
    location: "South City Convention Center",
    description:
      "Earn 2.0 PDUs (Ways of Working). A deep dive into how Generative AI is changing the landscape of risk management.",
  },
  {
    id: "2",
    title: "PMP® Exam Prep Boot Camp (Weekends)",
    date: "November 05, 2024 - 8:30 AM",
    location: "Virtual Instructor-Led",
    description:
      "Official PMI Authorized Training Partner (ATP) course. Includes official PMI study materials and 35 Contact Hours.",
  },
  {
    id: "3",
    title: "New Member Orientation & Networking",
    date: "November 20, 2024 - 5:30 PM",
    location: "The Downtown Hub",
    description:
      "Connect with the Board of Directors and learn how to maximize your PMI South Chapter membership benefits.",
  },
];

function HomeComponent() {
  return (
    <div className="w-full">
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-pmi-deep text-white">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-purple-900/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-1/2 w-1/3 rounded-full bg-pmi-primary/20 blur-[100px]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="relative order-2 h-[350px] w-full overflow-hidden md:order-1 md:h-[550px] md:w-1/2">
            <div className="absolute inset-0 flex items-center justify-center md:justify-start">
              <div className="relative h-full w-full overflow-hidden rounded-3xl md:w-[110%] md:rounded-r-[40%]">
                <img
                  alt="Professional woman smiling"
                  className="h-full w-full object-cover"
                  height={1200}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200&crop=focalpoint&fp-y=0.25&q=80"
                  width={1000}
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
              </div>
            </div>
          </div>

          <div className="order-1 flex w-full flex-col justify-center px-4 py-16 text-left md:order-2 md:w-1/2 md:py-24 md:pl-12 lg:pl-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pmi-accent/90 px-4 py-1.5 font-bold text-xs uppercase tracking-widest">
                <CheckCircle2 size={14} /> Official Chartered Component
              </div>
              <h1 className="mb-6 font-extrabold text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Empowering Project Professionals in South Asia
              </h1>
              <p className="mb-8 font-light text-gray-200 text-lg leading-relaxed md:text-xl">
                We are the premier resource for Project Management in the
                region. Join a community dedicated to the highest standards of
                practice, ethics, and professional development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="flex transform items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-base text-pmi-deep shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl md:px-10 md:py-4 md:text-lg"
                  to="/membership"
                >
                  Join Chapter <ArrowRight size={20} />
                </Link>
                <Link
                  className="rounded-full border-2 border-white/30 px-8 py-3.5 font-bold text-base text-white transition-all duration-300 hover:bg-white/10 md:px-10 md:py-4 md:text-lg"
                  to="/certifications"
                >
                  Get Certified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="group rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition duration-300 hover:border-pmi-primary/20 hover:shadow-lg md:p-12">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-pmi-primary transition-transform group-hover:scale-110">
                <Users size={32} />
              </div>
              <h3 className="mb-4 font-bold text-2xl text-gray-900">
                Local Community
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Network with over 1,500 qualified professionals in the South
                Asia region. Exchange ideas at our monthly chapter meetings.
              </p>
            </div>
            <div className="group rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition duration-300 hover:border-pmi-primary/20 hover:shadow-lg md:p-12">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-pmi-primary transition-transform group-hover:scale-110">
                <Award size={32} />
              </div>
              <h3 className="mb-4 font-bold text-2xl text-gray-900">
                Authorized Training
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a PMI Authorized Training Partner (ATP), we provide official
                exam prep courses for PMP®, CAPM®, and PMI-ACP®.
              </p>
            </div>
            <div className="group rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition duration-300 hover:border-pmi-primary/20 hover:shadow-lg md:p-12">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-pmi-primary transition-transform group-hover:scale-110">
                <TrendingUp size={32} />
              </div>
              <h3 className="mb-4 font-bold text-2xl text-gray-900">
                Earn PDUs
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Maintain your certification easily. Our events align with the
                PMI Talent Triangle®: Ways of Working, Power Skills, and
                Business Acumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-4xl">
              <h2 className="mb-6 font-extrabold text-4xl text-gray-900 leading-tight tracking-tight md:text-5xl">
                Gold Standard Certifications
              </h2>
              <p className="font-light text-gray-600 text-xl leading-relaxed md:text-2xl">
                Validate your skills with globally recognized credentials. As an
                authorized chapter, we guide you through the application,
                preparation, and maintenance of your PMI certifications.
              </p>
            </div>
            <Link
              className="flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-gray-900 px-8 py-4 font-bold text-gray-900 text-lg transition-colors hover:bg-gray-900 hover:text-white"
              to="/certifications"
            >
              View All Certifications <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] bg-[#1e0a45] p-10 text-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 h-40 w-40">
                <svg
                  className="absolute top-6 right-6 h-24 w-24 fill-current text-purple-500 opacity-80"
                  viewBox="0 0 100 100"
                >
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                </svg>
              </div>
              <div className="z-10 mb-10">
                <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 font-bold text-sm text-white uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
              <div className="relative z-10 mt-auto">
                <h4 className="mb-2 font-bold text-purple-300 text-xl">PMP®</h4>
                <h3 className="mb-4 font-bold text-3xl leading-tight">
                  Project Management Professional
                </h3>
                <p className="mb-4 font-bold text-base text-gray-300">
                  3-5 years of experience
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  The gold standard. Validates your competence to perform in the
                  role of a project manager.
                </p>
              </div>
            </div>

            <div className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] bg-[#001f3f] p-10 text-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 h-40 w-40">
                <div className="h-full w-full translate-x-10 -translate-y-10 transform rounded-full bg-cyan-400 opacity-20 blur-2xl" />
                <svg
                  className="absolute top-6 right-6 h-24 w-24 fill-current text-cyan-400 opacity-80"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
              <div className="z-10 mb-10">
                <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 font-bold text-sm text-white uppercase tracking-wide">
                  Entry Level
                </span>
              </div>
              <div className="relative z-10 mt-auto">
                <h4 className="mb-2 font-bold text-cyan-200 text-xl">CAPM®</h4>
                <h3 className="mb-4 font-bold text-3xl leading-tight">
                  Certified Associate in Project Management
                </h3>
                <p className="mb-4 font-bold text-base text-gray-300">
                  No experience required
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  Demonstrates your understanding of the foundational knowledge,
                  terminology, and processes.
                </p>
              </div>
            </div>

            <div className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] bg-white p-10 text-gray-900 shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 h-40 w-40">
                <svg
                  className="absolute top-6 right-6 h-24 w-24 fill-current text-[#e0c655] opacity-80"
                  viewBox="0 0 100 100"
                >
                  <path d="M0 100 L100 100 L100 0 Z" />
                </svg>
              </div>
              <div className="z-10 mb-10">
                <span className="inline-block rounded-full border border-gray-300 px-4 py-1.5 font-bold text-gray-600 text-sm uppercase tracking-wide">
                  Agile
                </span>
              </div>
              <div className="relative z-10 mt-auto">
                <h4 className="mb-2 font-bold text-pmi-brand text-xl">
                  PMI-ACP®
                </h4>
                <h3 className="mb-4 font-bold text-3xl leading-tight">
                  Agile Certified Practitioner
                </h3>
                <p className="mb-4 font-bold text-base text-gray-500">
                  2+ years of experience
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Proof of your real-world experience and skill in Agile
                  techniques and approaches.
                </p>
              </div>
            </div>

            <div className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] bg-white p-10 text-gray-900 shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 h-40 w-40">
                <div className="h-full w-full translate-x-10 -translate-y-10 transform rounded-full bg-orange-100 opacity-50 blur-2xl" />
              </div>
              <div className="z-10 mb-10">
                <span className="inline-block rounded-full border border-gray-300 px-4 py-1.5 font-bold text-gray-600 text-sm uppercase tracking-wide">
                  Advanced
                </span>
              </div>
              <div className="relative z-10 mt-auto">
                <h4 className="mb-2 font-bold text-pmi-brand text-xl">PgMP®</h4>
                <h3 className="mb-4 font-bold text-3xl leading-tight">
                  Program Management Professional
                </h3>
                <p className="mb-4 font-bold text-base text-gray-500">
                  8+ years of experience
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Designed for those who manage multiple, complex projects to
                  achieve strategic results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-gray-100 border-y bg-gray-50 py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-between">
            <div>
              <span className="font-bold text-pmi-primary text-sm uppercase tracking-wider">
                Professional Development
              </span>
              <h2 className="mt-2 font-bold text-4xl text-gray-900">
                Upcoming Chapter Events
              </h2>
            </div>
            <Link
              className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-bold text-lg text-pmi-primary transition hover:border-pmi-primary md:flex"
              to="/contact"
            >
              Full Calendar <Calendar size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                className="group flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                key={event.id}
              >
                <div className="h-2 bg-gray-100 transition-colors duration-300 group-hover:bg-pmi-primary" />
                <div className="flex-grow p-8">
                  <div className="mb-4 flex w-fit items-center gap-2 rounded-lg bg-purple-50 px-4 py-2 font-bold text-pmi-primary text-sm uppercase tracking-wide">
                    {event.date}
                  </div>
                  <h3 className="mb-4 font-bold text-gray-900 text-xl leading-snug transition-colors group-hover:text-pmi-primary">
                    {event.title}
                  </h3>
                  <p className="mb-6 line-clamp-3 text-base text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="mt-auto px-8 pb-8">
                  <Link
                    className="flex w-full items-center justify-between border-gray-100 border-t pt-6 font-bold text-base text-gray-700 transition-colors hover:text-pmi-primary"
                    to="/contact"
                  >
                    Register Now <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pmi-primary py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="mb-8 font-bold text-4xl md:text-5xl">
            Join the South Asia Chapter
          </h2>
          <p className="mx-auto mb-12 max-w-3xl font-light text-2xl text-purple-100">
            Expand your network, maintain your certification, and advance your
            career with the region's leading project management community.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              className="transform rounded-full bg-white px-10 py-5 font-bold text-lg text-pmi-primary shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
              to="/membership"
            >
              Become a Member
            </Link>
            <Link
              className="transform rounded-full border-2 border-purple-300 bg-transparent px-10 py-5 font-bold text-lg text-white transition hover:-translate-y-1 hover:bg-white hover:text-pmi-primary"
              to="/contact"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
