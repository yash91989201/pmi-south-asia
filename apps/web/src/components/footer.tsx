import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-gray-200 border-t bg-gray-50 pt-16 pb-8 font-sans text-gray-900 text-sm">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Main Links Grid */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-base text-pmi-deep">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/report-pdus"
                >
                  Report PDUs
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/online-courses"
                >
                  Online Courses
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/pmbok-guide"
                >
                  PMBOK® Guide
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/webinars"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/events"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/store"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/elearning-gifts"
                >
                  eLearning Gifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Certifications */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-base text-pmi-deep">
              Certifications
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  search={{ id: "pmp" }}
                  to="/certifications"
                >
                  Project Management Professional (PMP)®
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  search={{ id: "capm" }}
                  to="/certifications"
                >
                  Certified Associate in Project Management (CAPM)®
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  search={{ id: "pmi-acp" }}
                  to="/certifications"
                >
                  PMI Agile Certified Practitioner (PMI-ACP)®
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/certifications"
                >
                  Compare Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-base text-pmi-deep">Membership</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/membership"
                >
                  Become a Member
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/local-chapters"
                >
                  Local Chapters
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/membership-faqs"
                >
                  Membership FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Partner */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-base text-pmi-deep">Community</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/community-latest"
                  >
                    Latest from the Community
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/discussions"
                  >
                    Discussions
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/templates"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/about"
                  >
                    Volunteering
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-base text-pmi-deep">
                Partner with PMI
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/enterprise-partners"
                  >
                    Enterprise and Commercial Partners
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/training-partners"
                  >
                    Training Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Organization */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-base text-pmi-deep">Organization</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/about"
                >
                  Our Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/about"
                >
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/about"
                >
                  Our Leadership
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/pmi-blog"
                >
                  The PMI Blog
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/what-is-pm"
                >
                  What is Project Management?
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/what-is-pm"
                >
                  What is a Project Manager?
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/press"
                >
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-pmi-primary hover:underline"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Support & Branding */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-base text-pmi-deep">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-pmi-primary hover:underline"
                    to="/store-help"
                  >
                    Store Help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-auto flex flex-col space-y-4">
              <div className="mb-2">
                {/* PMI Logo Representation */}
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-3xl text-pmi-brand tracking-tighter">
                    P
                  </span>
                  <span className="font-extrabold text-3xl text-pmi-accent tracking-tighter">
                    M
                  </span>
                  <span className="font-extrabold text-3xl text-pmi-primary tracking-tighter">
                    I
                  </span>
                  <sup className="mt-2 font-bold text-gray-500 text-xs">®</sup>
                </div>
                <div className="font-bold text-pmi-deep text-xs uppercase leading-tight tracking-wider">
                  South Asia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-gray-200 border-t pt-8 text-gray-500 text-xs md:flex-row">
          <div className="mb-4 flex flex-wrap justify-center gap-4 md:mb-0 md:gap-6">
            <Link
              className="hover:text-pmi-primary hover:underline"
              to="/accessibility"
            >
              Accessibility
            </Link>
            <Link
              className="hover:text-pmi-primary hover:underline"
              to="/privacy"
            >
              Privacy
            </Link>
            <Link
              className="hover:text-pmi-primary hover:underline"
              to="/sitemap"
            >
              Sitemap
            </Link>
            <Link
              className="hover:text-pmi-primary hover:underline"
              to="/terms"
            >
              Terms of use
            </Link>
            <Link
              className="hover:text-pmi-primary hover:underline"
              to="/purchasing-terms"
            >
              Purchasing Terms
            </Link>
            <Link
              className="hover:text-pmi-primary hover:underline"
              to="/advertising"
            >
              Advertising & Sponsorship
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} PMI South Asia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
