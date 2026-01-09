import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, Menu, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";

const coreCerts = [
  {
    name: "Certified Associate in Project Management (CAPM)®",
    id: "capm",
    code: "CAPM®",
  },
  {
    name: "Project Management Professional (PMP)®",
    id: "pmp",
    code: "PMP®",
  },
  {
    name: "Program Management Professional (PgMP)®",
    id: "pgmp",
    code: "PgMP®",
  },
  {
    name: "Portfolio Management Professional (PfMP)®",
    id: "pfmp",
    code: "PfMP®",
  },
];

const specializedCerts = [
  {
    name: "PMI Agile Certified Practitioner (PMI-ACP)®",
    id: "pmi-acp",
    code: "PMI-ACP®",
  },
  {
    name: "PMI Professional in Business Analysis (PMI-PBA)®",
    id: "pmi-pba",
    code: "PMI-PBA®",
  },
  {
    name: "PMI Risk Management Professional (PMI-RMP)®",
    id: "pmi-rmp",
    code: "PMI-RMP®",
  },
  {
    name: "PMI Scheduling Professional (PMI-SP)®",
    id: "pmi-sp",
    code: "PMI-SP®",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCertMenu, setShowCertMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setShowCertMenu(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed z-50 w-full font-sans transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <div
        className={`border-gray-100 border-b bg-white transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            className="group z-50 flex items-center gap-4"
            onClick={closeMenu}
            to="/"
          >
            <svg
              aria-label="PMI Logo"
              className={`${scrolled ? "h-10 w-10" : "h-12 w-12"} flex-shrink-0 transition-all duration-300`}
              fill="none"
              role="img"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>PMI Logo</title>
              <text
                fill="black"
                fontFamily="Arial, sans-serif"
                fontSize="58"
                fontWeight="900"
                x="-2"
                y="47"
              >
                P
              </text>

              <path
                d="M52 2.5 H 70 A 22.5 22.5 0 0 0 70 47.5 H 52 V 2.5 Z"
                fill="#ff6b00"
              />
              <path
                d="M98 2.5 H 80 A 22.5 22.5 0 0 1 80 47.5 H 98 V 2.5 Z"
                fill="#ff6b00"
              />

              <path
                d="M2 52.5 H 48 V 62 Q 38 75 48 88 V 97.5 H 2 V 88 Q 12 75 2 62 V 52.5 Z"
                fill="#00a3e0"
              />

              <defs>
                <clipPath id="purple-clip">
                  <rect height="45" width="46" x="52" y="52.5" />
                </clipPath>
              </defs>
              <g clipPath="url(#purple-clip)">
                <rect fill="#5621b4" height="45" width="46" x="52" y="52.5" />
                <line
                  stroke="white"
                  strokeWidth="8"
                  x1="45"
                  x2="105"
                  y1="50"
                  y2="110"
                />
                <line
                  stroke="white"
                  strokeWidth="8"
                  x1="75"
                  x2="135"
                  y1="50"
                  y2="110"
                />
                <line
                  stroke="white"
                  strokeWidth="8"
                  x1="15"
                  x2="75"
                  y1="50"
                  y2="110"
                />
              </g>
            </svg>

            <div className="hidden flex-col justify-center sm:flex">
              <div className="flex flex-col font-medium text-[13px] text-pmi-brand leading-[0.85] tracking-tight">
                <span>Project</span>
                <span>Management</span>
                <span>Institute.</span>
              </div>
              <span className="mt-0.5 font-bold text-pmi-deep text-sm uppercase leading-none tracking-wider">
                South Asia
              </span>
            </div>
          </Link>

          <nav className="hidden h-full items-center gap-8 md:flex">
            <Link
              className={`flex h-full items-center border-b-4 pt-1 font-bold text-sm transition-colors ${isActive("/") ? "border-pmi-primary text-pmi-primary" : "border-transparent text-gray-700 hover:text-pmi-primary"}`}
              to="/"
            >
              Home
            </Link>

            <div
              className="group relative flex h-full items-center"
              onMouseEnter={() => setShowCertMenu(true)}
              onMouseLeave={() => setShowCertMenu(false)}
            >
              <Link
                className={`flex h-full items-center gap-1 border-b-4 pt-1 font-bold text-sm transition-colors ${isActive("/certifications") || showCertMenu ? "border-pmi-primary text-pmi-primary" : "border-transparent text-gray-700 hover:text-pmi-primary"}`}
                to="/certifications"
              >
                Certifications <ChevronDown size={14} />
              </Link>

              <div
                className={`absolute top-full -left-20 w-[900px] origin-top transform overflow-hidden rounded-b-2xl border-gray-100 border-t bg-white shadow-2xl transition-all duration-300 ${showCertMenu ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"}`}
              >
                <div className="grid grid-cols-3 gap-8 p-8">
                  <div className="space-y-4">
                    <div className="font-bold text-gray-400 text-xs uppercase tracking-wider">
                      Core
                    </div>
                    {coreCerts.map((c) => (
                      <Link
                        className="block rounded p-2 font-medium text-gray-700 text-sm transition-colors hover:bg-gray-50 hover:text-pmi-primary"
                        key={c.id}
                        onClick={() => setShowCertMenu(false)}
                        search={{ id: c.id }}
                        to="/certifications"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="font-bold text-gray-400 text-xs uppercase tracking-wider">
                      Specialized
                    </div>
                    {specializedCerts.map((c) => (
                      <Link
                        className="block rounded p-2 font-medium text-gray-700 text-sm transition-colors hover:bg-gray-50 hover:text-pmi-primary"
                        key={c.id}
                        onClick={() => setShowCertMenu(false)}
                        search={{ id: c.id }}
                        to="/certifications"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-start rounded-xl bg-gray-50 p-6">
                    <h4 className="mb-2 font-bold text-lg text-pmi-deep">
                      Certification Process
                    </h4>
                    <p className="mb-4 text-gray-500 text-xs">
                      Learn how to apply, prepare, and maintain your
                      certification.
                    </p>
                    <Link
                      className="rounded-full bg-pmi-primary px-4 py-2 font-bold text-sm text-white transition-colors hover:bg-pmi-deep"
                      onClick={() => setShowCertMenu(false)}
                      to="/certification-process"
                    >
                      View Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              className={`flex h-full items-center border-b-4 pt-1 font-bold text-sm transition-colors ${isActive("/certification-process") ? "border-pmi-primary text-pmi-primary" : "border-transparent text-gray-700 hover:text-pmi-primary"}`}
              to="/certification-process"
            >
              Process
            </Link>
            <Link
              className={`flex h-full items-center border-b-4 pt-1 font-bold text-sm transition-colors ${isActive("/membership") ? "border-pmi-primary text-pmi-primary" : "border-transparent text-gray-700 hover:text-pmi-primary"}`}
              to="/membership"
            >
              Membership
            </Link>
            <Link
              className={`flex h-full items-center border-b-4 pt-1 font-bold text-sm transition-colors ${isActive("/about") ? "border-pmi-primary text-pmi-primary" : "border-transparent text-gray-700 hover:text-pmi-primary"}`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`flex h-full items-center border-b-4 pt-1 font-bold text-sm transition-colors ${isActive("/contact") ? "border-pmi-primary text-pmi-primary" : "border-transparent text-gray-700 hover:text-pmi-primary"}`}
              to="/contact"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              className="flex items-center gap-2 font-bold text-gray-700 text-sm transition-colors hover:text-pmi-primary"
              to="/membership"
            >
              <User size={18} /> Log In
            </Link>
            <div className="h-6 w-px bg-gray-200" />
            <button
              className="text-gray-500 transition-colors hover:text-pmi-primary"
              type="button"
            >
              <Search size={20} />
            </button>
          </div>

          <button
            className="z-50 p-2 text-gray-800 md:hidden"
            onClick={toggleMenu}
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-pmi-deep/90 backdrop-blur-md transition-all duration-500 md:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className={`absolute top-0 right-0 flex h-full w-[85%] transform flex-col bg-white shadow-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-gray-100 border-b bg-gray-50 p-6">
            <span className="font-bold text-lg text-pmi-deep">Menu</span>
          </div>

          <div className="flex-grow space-y-6 overflow-y-auto p-6">
            <Link
              className="flex items-center justify-between border-gray-100 border-b pb-4 font-bold text-gray-800 text-xl"
              onClick={closeMenu}
              to="/"
            >
              Home <ChevronRight className="text-gray-400" size={16} />
            </Link>

            <div className="border-gray-100 border-b pb-4">
              <div className="mb-4 flex items-center justify-between font-bold text-gray-800 text-xl">
                Certifications
              </div>
              <div className="space-y-3 border-pmi-primary/20 border-l-2 pl-4">
                <p className="font-bold text-gray-400 text-xs uppercase">
                  Core
                </p>
                {coreCerts.map((c) => (
                  <Link
                    className="block py-1 font-medium text-gray-600 text-sm"
                    key={c.id}
                    onClick={closeMenu}
                    search={{ id: c.id }}
                    to="/certifications"
                  >
                    {c.code.split(" ")[0]}
                  </Link>
                ))}
                <p className="mt-4 font-bold text-gray-400 text-xs uppercase">
                  Specialized
                </p>
                {specializedCerts.map((c) => (
                  <Link
                    className="block py-1 font-medium text-gray-600 text-sm"
                    key={c.id}
                    onClick={closeMenu}
                    search={{ id: c.id }}
                    to="/certifications"
                  >
                    {c.code.split(" ")[0]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              className="flex items-center justify-between border-gray-100 border-b pb-4 font-bold text-gray-800 text-xl"
              onClick={closeMenu}
              to="/certification-process"
            >
              Process <ChevronRight className="text-gray-400" size={16} />
            </Link>
            <Link
              className="flex items-center justify-between border-gray-100 border-b pb-4 font-bold text-gray-800 text-xl"
              onClick={closeMenu}
              to="/membership"
            >
              Membership <ChevronRight className="text-gray-400" size={16} />
            </Link>
            <Link
              className="flex items-center justify-between border-gray-100 border-b pb-4 font-bold text-gray-800 text-xl"
              onClick={closeMenu}
              to="/about"
            >
              About <ChevronRight className="text-gray-400" size={16} />
            </Link>
            <Link
              className="flex items-center justify-between border-gray-100 border-b pb-4 font-bold text-gray-800 text-xl"
              onClick={closeMenu}
              to="/contact"
            >
              Contact <ChevronRight className="text-gray-400" size={16} />
            </Link>
          </div>

          <div className="space-y-4 border-gray-100 border-t bg-gray-50 p-6">
            <Link
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 font-bold text-gray-700 hover:border-pmi-primary hover:text-pmi-primary"
              onClick={closeMenu}
              to="/membership"
            >
              <User size={18} /> Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
