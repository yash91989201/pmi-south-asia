import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, CheckCircle2, Globe, Users } from "lucide-react";

export const Route = createFileRoute("/membership")({
  component: MembershipComponent,
});

function MembershipComponent() {
  return (
    <div className="w-full bg-white">
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden px-4 py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#2e1a47] via-[#5e2d79] to-[#2e1a47]" />
        <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff6b00]/20 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0075c9]/30 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <h1 className="mb-8 font-bold text-5xl leading-tight tracking-tight drop-shadow-sm md:text-7xl">
            You belong in the <br />
            South Asia Chapter
          </h1>
          <p className="mx-auto max-w-3xl font-light text-purple-100 text-xl leading-relaxed drop-shadow-sm md:text-2xl">
            Join a vibrant community of project professionals. Gain access to
            local networking, discounted events, and exclusive professional
            development opportunities right here in the South Asia region.
          </p>
          <div className="mt-10">
            <Link
              className="rounded-full bg-white px-10 py-4 font-bold text-lg text-pmi-primary shadow-lg transition hover:bg-gray-100"
              to="/contact"
            >
              Join PMI & South Asia Chapter
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/2">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-[#5621b4]">
                <Users size={32} />
              </div>
              <h2 className="mb-6 font-bold text-4xl text-[#13072e]">
                Local Networking
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                As a South Asia Chapter member, you are never alone. Connect
                with peers at our monthly dinner meetings, networking mixers,
                and breakfast roundtables. Our members come from diverse
                industries including Tech, Construction, Healthcare, and
                Finance, providing you with a rich perspective on project
                management.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                alt="Community networking"
                className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 md:flex-row-reverse">
            <div className="md:w-1/2">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#0075c9]">
                <BookOpen size={32} />
              </div>
              <h2 className="mb-6 font-bold text-4xl text-[#13072e]">
                Professional Development
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Maintain your credentials with ease. The South Asia Chapter
                offers numerous opportunities to earn PDUs throughout the year,
                often at little to no cost for members. From webinars to
                workshops, we ensure you stay up-to-date with the PMI Talent
                Triangle®.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 font-medium text-gray-700">
                  <CheckCircle2 className="text-pmi-brand" size={20} />{" "}
                  Discounted PMP Prep Courses
                </li>
                <li className="flex items-center gap-2 font-medium text-gray-700">
                  <CheckCircle2 className="text-pmi-brand" size={20} />{" "}
                  Exclusive Workshops
                </li>
                <li className="flex items-center gap-2 font-medium text-gray-700">
                  <CheckCircle2 className="text-pmi-brand" size={20} /> PDU
                  Reporting Support
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                alt="Knowledge resources"
                className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl text-pmi-deep">
              Membership Types
            </h2>
            <p className="text-gray-600 text-lg">
              Note: You must be a PMI Global member to join the South Asia
              Chapter.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 px-4 py-1 font-bold text-gray-800 text-sm uppercase tracking-wide">
                Step 1
              </div>
              <h3 className="mb-2 font-bold text-gray-900 text-xl">
                PMI Global Membership
              </h3>
              <div className="mb-6 font-extrabold text-4xl text-pmi-primary">
                $129
                <span className="font-normal text-base text-gray-500">
                  /year
                </span>
              </div>
              <p className="mb-6 text-gray-600 text-sm">
                Required. Includes digital PMBOK® Guide, tools, and templates.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> $405 PMP
                  Exam (vs $555)
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> Free
                  Standard Downloads
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />{" "}
                  PMIstandards+ Access
                </li>
              </ul>
            </div>

            <div className="relative -translate-y-0 transform rounded-2xl border-2 border-pmi-primary bg-[#1e0a45] p-8 text-white shadow-2xl md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pmi-accent px-4 py-1 font-bold text-sm text-white uppercase tracking-wide">
                Step 2 (Best Value)
              </div>
              <h3 className="mb-2 font-bold text-xl">
                South Asia Chapter Membership
              </h3>
              <div className="mb-6 font-extrabold text-4xl text-white">
                $30
                <span className="font-normal text-base text-gray-300">
                  /year
                </span>
              </div>
              <p className="mb-6 text-gray-300 text-sm">
                Add this to your cart when joining PMI Global.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-pmi-accent" size={18} /> Free
                  Monthly Meetings
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-pmi-accent" size={18} />{" "}
                  Networking Mixers
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-pmi-accent" size={18} />{" "}
                  Volunteer Opportunities
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-pmi-accent" size={18} /> Local
                  Job Board Access
                </li>
              </ul>
              <Link
                className="block w-full rounded-lg bg-white py-3 text-center font-bold text-pmi-deep transition-colors hover:bg-gray-100"
                to="/contact"
              >
                Join Now
              </Link>
            </div>

            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-xl">
              <h3 className="mb-2 font-bold text-gray-900 text-xl">
                Student Membership
              </h3>
              <div className="mb-6 font-extrabold text-4xl text-pmi-primary">
                $32
                <span className="font-normal text-base text-gray-500">
                  /year
                </span>
              </div>
              <p className="mb-6 text-gray-600 text-sm">
                For full-time students in degree-granting programs.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> Includes
                  Global Membership
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> CAPM
                  Exam Discount
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-500" size={18} /> Digital
                  Publications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="order-2 md:order-1 md:w-1/2">
              <img
                alt="Local impact"
                className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
            <div className="order-1 md:order-2 md:w-1/2">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-[#ff6b00]">
                <Globe size={32} />
              </div>
              <h2 className="mb-6 font-bold text-4xl text-[#13072e]">
                Volunteering
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Volunteers are the lifeblood of the South Asia Chapter. Develop
                leadership skills in a safe environment, earn PDUs, and give
                back to the profession. We have roles for everyone, from
                micro-volunteering at a single event to serving on a committee
                or the Board of Directors.
              </p>
              <Link
                className="mt-6 inline-block font-bold text-pmi-primary hover:underline"
                to="/contact"
              >
                Inquire about open volunteer roles &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
