import { createFileRoute } from "@tanstack/react-router";

import type { BoardMember } from "@/lib/types";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

const boardMembers: BoardMember[] = [
  {
    id: "1",
    name: "Sarah Jenkins, PMP",
    role: "Chapter President",
    bio: "Sarah leads the chapter strategy and alignment with PMI Global. She has over 15 years of experience in IT program management.",
    imageUrl: "",
  },
  {
    id: "2",
    name: "Michael Chen, PMI-ACP",
    role: "VP of Finance",
    bio: "Michael ensures the fiscal health of the chapter, managing budgets for events and member value initiatives.",
    imageUrl: "",
  },
  {
    id: "3",
    name: "Elena Rodriguez, PMP",
    role: "VP of Membership",
    bio: "Elena is dedicated to member retention and growth, ensuring every member finds value in their chapter affiliation.",
    imageUrl: "",
  },
  {
    id: "4",
    name: "David Smith, CAPM",
    role: "VP of Marketing & Communications",
    bio: "David manages the chapter brand, newsletters, and social media presence to keep the community informed.",
    imageUrl: "",
  },
  {
    id: "5",
    name: "Dr. Anita Patel, PfMP",
    role: "VP of Professional Development",
    bio: "Curating world-class learning opportunities, ATP courses, and PDU-bearing events for our members.",
    imageUrl: "",
  },
  {
    id: "6",
    name: "James Wilson",
    role: "VP of Volunteers",
    bio: "Empowering members to give back, lead initiatives, and earn PDUs through service to the chapter.",
    imageUrl: "",
  },
];

function AboutComponent() {
  return (
    <div className="w-full bg-[#faf9f6]">
      <section className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="relative z-10 h-[500px] w-full lg:h-[700px] lg:w-[45%] lg:pr-10">
              <div className="hero-curve relative h-full w-full overflow-hidden shadow-2xl">
                <img
                  alt="Professionals walking in field"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>

            <div className="w-full px-6 py-16 md:px-12 lg:w-[55%] lg:px-24 lg:py-0">
              <div className="max-w-2xl">
                <div className="mb-8 flex items-center gap-2 font-bold text-gray-500 text-sm uppercase tracking-widest">
                  <span>Home</span>
                  <span className="text-gray-300">/</span>
                  <span>About Us</span>
                  <span className="text-gray-300">/</span>
                  <span className="text-pmi-primary">Our Mission</span>
                </div>

                <h1 className="mb-8 font-extrabold text-4xl text-[#1e0a45] leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Project Management Institute South Asia Chapter
                </h1>

                <div className="space-y-6 font-light text-gray-700 text-lg leading-relaxed md:text-xl">
                  <p>
                    We are a chartered component of the Project Management
                    Institute (PMI), the world's leading professional
                    association for a growing global community of millions of
                    project professionals.
                  </p>
                  <p>
                    <strong>Our Purpose:</strong> To maximize project success to
                    elevate our world.
                  </p>
                  <p>
                    The South Asia Chapter serves professionals in the region by
                    providing networking, professional development, and
                    leadership opportunities. We are committed to the PMI
                    Culture Values of Make it Easy, Aim Higher, Be Welcoming,
                    Embrace Curiosity, and Together We Can.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-gray-100 border-y bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 divide-y divide-gray-100 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-4">
              <div className="mb-2 font-extrabold text-5xl text-pmi-primary">
                25+
              </div>
              <div className="font-bold text-gray-600 text-sm uppercase tracking-wider">
                Years Chartered
              </div>
            </div>
            <div className="py-4">
              <div className="mb-2 font-extrabold text-5xl text-pmi-accent">
                1,500+
              </div>
              <div className="font-bold text-gray-600 text-sm uppercase tracking-wider">
                Active Members
              </div>
            </div>
            <div className="py-4">
              <div className="mb-2 font-extrabold text-5xl text-pmi-brand">
                78%
              </div>
              <div className="font-bold text-gray-600 text-sm uppercase tracking-wider">
                PMP® Certified
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf9f6] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-6 font-bold text-4xl text-[#1e0a45]">
              Board of Directors
            </h2>
            <div className="h-1.5 w-20 rounded-full bg-pmi-primary" />
            <p className="mt-6 max-w-3xl font-light text-gray-600 text-xl">
              Our chapter is led by elected volunteers who are committed to
              serving our members and advancing the project management
              profession.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                className="group border-pmi-primary border-t-4 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl"
                key={member.id}
              >
                <h3 className="mb-2 font-bold text-2xl text-gray-900 transition-colors group-hover:text-pmi-primary">
                  {member.name}
                </h3>
                <p className="mb-6 font-bold text-pmi-primary text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              className="rounded-full border-2 border-[#1e0a45] bg-transparent px-10 py-4 font-bold text-[#1e0a45] transition-all duration-300 hover:bg-[#1e0a45] hover:text-white"
              type="button"
            >
              View Bylaws & Strategic Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
