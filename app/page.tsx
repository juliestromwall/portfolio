"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Product Strategy",
  "0\u21921 Product Development",
  "Product Roadmaps",
  "Cross-Functional Leadership",
  "Stakeholder Alignment",
  "Data-Driven Decision Making",
  "Regulatory Compliance",
  "Go-to-Market",
  "Discovery to Delivery",
  "Implementation Leadership",
  "Shipping & Adoption",
];

const PROJECTS = [
  {
    title: "0\u21921 Medical Records & Review Platform",
    description:
      "Built a HIPAA-compliant SaaS platform to manage medical records intake, automated requests, and clinical review workflows. Led discovery, roadmap definition, and delivery across engineering and operations to replace manual, error-prone processes. By designing for transparency, visibility, and accountability across every step of the records lifecycle, the platform became a growth engine \u2014 helping the company scale its client base and operational capacity.",
    tags: ["0\u21921 Product", "Healthcare SaaS", "Workflow Automation", "HIPAA Compliant", "Data & Compliance"],
    color: "bg-teal-light dark:bg-teal/10",
    borderColor: "border-teal",
    images: [
      { src: "/projects/gather/admin-dashboard.png", label: "Admin Dashboard", group: "Admin" },
      { src: "/projects/gather/admin-case-detail.png", label: "Case Detail & Intake", group: "Admin" },
      { src: "/projects/gather/client-dashboard.png", label: "Client Dashboard", group: "Users" },
      { src: "/projects/gather/client-case-detail.png", label: "Case Records & Activity", group: "Users" },
    ],
    videos: [],
  },
  {
    title: "RepCommish \u2014 Sales & Commission Tracking Platform",
    description:
      "Founded and built RepCommish, a commission tracking platform that helps sales reps accurately record deals, calculate commissions, and track payments owed versus paid. Took the product from concept to live business \u2014 defining the vision, designing the system, and building it from the ground up. RepCommish replaces manual spreadsheets with a simple, reliable platform that gives reps real financial visibility.",
    tags: ["0\u21921 Product", "FinTech-lite", "Workflow Automation", "Data Accuracy"],
    color: "bg-terracotta-light dark:bg-terracotta/10",
    borderColor: "border-terracotta",
    images: [
      { src: "/projects/commission/slide-1.png", label: "Dashboard", group: "App" },
      { src: "/projects/commission/slide-2.png", label: "Commission Detail", group: "App" },
      { src: "/projects/commission/slide-3.png", label: "Brand Detail", group: "App" },
    ],
    videos: [],
  },
  {
    title: "Journey Management System",
    description:
      "Led product strategy and delivery for a SaaS platform supporting surrogacy and fertility agencies. Owned roadmap planning, requirements definition, and cross-functional execution, partnering closely with engineering, operations, and clients to improve core workflows, scale platform capabilities, and support real-world agency needs in a highly operational, compliance-sensitive environment.",
    tags: ["Product Management", "Healthcare SaaS", "Operational Workflows", "Compliance", "Customer-Driven Product"],
    color: "bg-teal-light dark:bg-teal/10",
    borderColor: "border-teal",
    images: [
      { src: "/projects/orchid/pregnancy-calendar.png", label: "Pregnancy Calendar", group: "App" },
      { src: "/projects/orchid/match-view.png", label: "Surrogate Matching", group: "App" },
      { src: "/projects/orchid/admin-case-list.png", label: "Admin Case List", group: "Admin" },
      { src: "/projects/orchid/task-list.png", label: "Journey Tasks", group: "Admin" },
    ],
    videos: [],
  },
  {
    title: "0\u21921 Provider Network Platform",
    description:
      "Led the 0\u21921 build of a provider network platform designed to connect agencies with vetted healthcare providers. Owned product discovery, roadmap definition, and delivery \u2014 translating complex operational and compliance requirements into a scalable, easy-to-use system that supports provider onboarding, management, and utilization.",
    tags: ["0\u21921 Product", "Marketplace Platform", "Regulated SaaS", "Compliance"],
    color: "bg-terracotta-light dark:bg-terracotta/10",
    borderColor: "border-terracotta",
    images: [],
    videos: [
      { id: "CgJtN9dYVZM", title: "Platform Demo" },
      { id: "i_3Pe7HQqdM", title: "Provider Network Demo" },
    ],
  },
];

const ABOUT_ITEMS = [
  {
    icon: "discovery",
    title: "Discovery & Strategy",
    description:
      "I dig into the \u2018why\u2019 before the \u2018what.\u2019 Through customer research, data analysis, and stakeholder alignment, I identify the right problems to solve and build conviction around a clear product direction.",
  },
  {
    icon: "compliance",
    title: "Data & Compliance",
    description:
      "I navigate complex regulatory requirements and data-driven workflows \u2014 from HIPAA to sensitive operational data \u2014 ensuring products are built right and stay compliant at scale.",
  },
  {
    icon: "build",
    title: "Build & Ship",
    description:
      "I work side-by-side with engineering and design to turn strategy into reality. I break down complexity, remove blockers, and drive execution so products actually launch \u2014 not just get planned.",
  },
  {
    icon: "grow",
    title: "Grow & Iterate",
    description:
      "Shipping is just the beginning. I measure what matters, listen to users, and iterate quickly to drive adoption, retention, and real business impact after launch.",
  },
];

/* Shared JS monogram component */
function JsLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <img src="/js-logo.png" alt="JS" className={dims} />
  );
}

/* Dark mode toggle icon */
function DarkModeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 text-charcoal/60 transition-colors hover:bg-charcoal/5 hover:text-charcoal dark:border-dark-text/10 dark:text-dark-text/60 dark:hover:bg-dark-text/5 dark:hover:text-dark-text"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        /* Sun icon */
        <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        /* Moon icon */
        <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Home() {
  const [modalProject, setModalProject] = useState<(typeof PROJECTS)[number] | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* Check session + dark mode preference on mount */
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("portfolio_auth") === "true") {
        setAuthenticated(true);
      }
      const saved = localStorage.getItem("portfolio_dark");
      if (saved === "true") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.add("transitioning");
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio_dark", String(next));
    setTimeout(() => document.documentElement.classList.remove("transitioning"), 350);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "JulieJae") {
      sessionStorage.setItem("portfolio_auth", "true");
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const closeModal = useCallback(() => {
    setModalProject(null);
    setActiveImage(0);
  }, []);

  useEffect(() => {
    if (!modalProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && modalProject.images.length > 0)
        setActiveImage((prev) => (prev + 1) % modalProject.images.length);
      if (e.key === "ArrowLeft" && modalProject.images.length > 0)
        setActiveImage((prev) => (prev - 1 + modalProject.images.length) % modalProject.images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalProject, closeModal]);

  /* ─── Password Gate ─── */
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream dark:bg-dark-bg px-6">
        <div className="absolute top-4 right-4">
          <DarkModeToggle dark={darkMode} onToggle={toggleDarkMode} />
        </div>
        <div className="w-full max-w-sm text-center">
          <div className="mb-8 flex justify-center">
            <img src="/js-logo.png" alt="JS" className="h-16 w-16" />
          </div>
          <h1 className="mb-2 text-2xl font-black tracking-tight text-charcoal dark:text-dark-text">Welcome</h1>
          <p className="mb-8 text-sm text-charcoal/50 dark:text-dark-text/50">Enter the password to view this portfolio.</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              placeholder="Password"
              className={`w-full rounded-lg border-2 ${passwordError ? "border-terracotta" : "border-charcoal/15 dark:border-dark-text/15"} bg-white dark:bg-dark-card px-4 py-3 text-center text-sm text-charcoal dark:text-dark-text outline-none transition-colors focus:border-teal`}
              autoFocus
            />
            {passwordError && (
              <p className="mt-2 text-xs text-terracotta">Incorrect password. Please try again.</p>
            )}
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-charcoal dark:bg-dark-text py-3 text-xs font-semibold uppercase tracking-widest text-cream dark:text-dark-bg transition-colors hover:bg-charcoal/90 dark:hover:bg-dark-text/90"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ─── Main Site ─── */
  return (
    <div id="home" className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-charcoal/5 dark:border-dark-text/5 bg-cream/80 dark:bg-dark-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home">
            <JsLogo />
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-8 sm:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-widest text-charcoal/70 dark:text-dark-text/70 transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <DarkModeToggle dark={darkMode} onToggle={toggleDarkMode} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-24 md:pt-28">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-10 flex items-center gap-3">
                <span className="whitespace-nowrap rounded-full border border-teal/30 bg-teal-light dark:bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-dark dark:text-teal">
                  Product Manager
                </span>
                <span className="whitespace-nowrap rounded-full border border-terracotta/30 bg-terracotta-light dark:bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
                  0&rarr;1 Product Builder
                </span>
                <span className="whitespace-nowrap rounded-full border border-charcoal/20 dark:border-dark-text/20 bg-charcoal/5 dark:bg-dark-text/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal/70 dark:text-dark-text/70">
                  Data &amp; Compliance
                </span>
              </div>

              <h1 className="mb-10 text-6xl font-black tracking-tight text-charcoal dark:text-dark-text md:text-7xl lg:text-8xl">
                Hi, I&apos;m Julie.
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-charcoal/70 dark:text-dark-text/70 md:text-lg">
                I build thoughtful digital products by connecting customer
                needs, product strategy, data-driven insights, and delivery.
              </p>

              <div className="mt-14 flex gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal dark:border-dark-text bg-charcoal dark:bg-dark-text px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cream dark:text-dark-bg transition-colors hover:bg-transparent hover:text-charcoal dark:hover:text-dark-text"
                >
                  View My Work
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/20 dark:border-dark-text/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal dark:text-dark-text transition-colors hover:border-teal hover:text-teal"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                <div className="h-80 w-80 overflow-hidden rounded-2xl border-4 border-charcoal/80 dark:border-dark-text/30 shadow-[8px_8px_0px_0px_rgba(45,155,138,0.3)] md:h-[26rem] md:w-[26rem]">
                  <img
                    src="/photo.jpg"
                    alt="Julie Stromwall, Product Manager"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.classList.add("bg-gradient-to-br", "from-teal-light", "to-terracotta-light");
                      target.parentElement!.innerHTML =
                        '<div class="flex h-full items-center justify-center text-sm text-charcoal/40">Drop photo.jpg in /public</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="border-y border-charcoal/10 dark:border-dark-text/10 bg-cream-dark dark:bg-dark-surface py-4 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-4 text-sm font-semibold uppercase tracking-widest text-charcoal/40 dark:text-dark-text/40">
                  {skill}
                </span>
                <span className="text-teal/40">&#9733;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-md border border-charcoal/20 dark:border-dark-text/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted dark:text-dark-muted">
              Who I Am
            </span>
            <h2 className="text-4xl font-black tracking-tight text-charcoal dark:text-dark-text md:text-5xl">
              About Julie
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-terracotta" />
          </div>

          {/* Two-column bio */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12 items-start mx-auto max-w-4xl">
            <p className="text-base leading-relaxed text-charcoal/70 dark:text-dark-text/70">
              I&apos;m a product manager who specializes in taking products from
              zero to one. From discovery to delivery, I connect the dots
              between what customers need, what the business requires, and
              what teams can build &mdash; then I make sure it actually ships.
            </p>
            <p className="text-base leading-relaxed text-charcoal/50 dark:text-dark-text/50 border-l-2 border-terracotta/30 pl-6">
              As a 3x gestational surrogate and lifelong empath, I&apos;m
              especially driven to build tools that support people through
              complex, emotional journeys. Beyond work, I&apos;m married to my
              junior-high sweetheart, a mom of two, a rescue-dog enthusiast,
              and I recharge through snowboarding, wakesurfing, hiking,
              backpacking, and volunteering.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-charcoal/10 dark:border-dark-text/10 bg-white dark:bg-dark-card p-6 transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <span className="mb-3 block text-teal">
                  {item.icon === "discovery" && (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  )}
                  {item.icon === "build" && (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3 12.75m3.32-2.68L9 4.5l3 3 3-3 2.68 2.68M21 12.75l-3.32 2.68L15 9.75" />
                    </svg>
                  )}
                  {item.icon === "grow" && (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  )}
                  {item.icon === "compliance" && (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                </span>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-charcoal dark:text-dark-text">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-charcoal/60 dark:text-dark-text/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="bg-cream-dark dark:bg-dark-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <span className="mb-4 inline-block rounded-md border border-charcoal/20 dark:border-dark-text/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted dark:text-dark-muted">
              My Work
            </span>
            <h2 className="text-4xl font-black tracking-tight text-charcoal dark:text-dark-text md:text-5xl">
              Featured Projects
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-teal" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                onClick={() => {
                  setModalProject(project);
                  setActiveImage(0);
                }}
                className={`group cursor-pointer overflow-hidden rounded-2xl ${project.color} transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="grid h-full md:grid-cols-5 min-h-[280px]">
                  {/* Text Side */}
                  <div className="flex flex-col justify-center p-8 md:col-span-2">
                    <h3 className="mb-4 text-lg font-bold tracking-tight text-charcoal dark:text-dark-text leading-snug">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal transition-all group-hover:gap-3">
                      View Project
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* Screenshots Side - Staggered Stack */}
                  <div className="relative md:col-span-3 min-h-[240px]">
                    {/* Medical Records - 4 images, wide staggered fan */}
                    {project.images.length === 4 && project.title.includes("Medical") && (
                      <>
                        <img
                          src={project.images[2].src}
                          alt={project.images[2].label}
                          className="absolute left-[4%] top-[20%] w-[66%] rounded-lg border border-white/30 dark:border-white/10 shadow-lg z-10 -rotate-3 opacity-60 transition-all duration-500 ease-out group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:-rotate-6 group-hover:opacity-90"
                        />
                        <img
                          src={project.images[1].src}
                          alt={project.images[1].label}
                          className="absolute right-[0%] top-[5%] w-[66%] rounded-lg border border-white/40 dark:border-white/10 shadow-xl z-20 rotate-3 opacity-75 transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:opacity-100"
                        />
                        <img
                          src={project.images[3].src}
                          alt={project.images[3].label}
                          className="absolute right-[2%] bottom-[2%] w-[55%] rounded-lg border border-white/20 dark:border-white/10 shadow-md z-[5] rotate-2 opacity-50 transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-3 group-hover:rotate-4 group-hover:opacity-80"
                        />
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].label}
                          className="absolute left-[10%] top-[10%] w-[70%] rounded-lg border border-white/60 dark:border-white/10 shadow-2xl z-30 -rotate-1 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.03]"
                        />
                      </>
                    )}

                    {/* JMS - 4 images, cascading diagonal (distinct from Medical Records) */}
                    {project.images.length === 4 && project.title.includes("Journey") && (
                      <>
                        <img
                          src={project.images[3].src}
                          alt={project.images[3].label}
                          className="absolute right-[1%] top-[6%] w-[58%] rounded-lg border border-white/25 dark:border-white/10 shadow-md z-[5] rotate-3 opacity-50 transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-2 group-hover:rotate-5 group-hover:opacity-80"
                        />
                        <img
                          src={project.images[1].src}
                          alt={project.images[1].label}
                          className="absolute left-[0%] bottom-[6%] w-[60%] rounded-lg border border-white/30 dark:border-white/10 shadow-lg z-10 -rotate-2 opacity-60 transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:translate-y-2 group-hover:-rotate-4 group-hover:opacity-85"
                        />
                        <img
                          src={project.images[2].src}
                          alt={project.images[2].label}
                          className="absolute right-[3%] bottom-[0%] w-[56%] rounded-lg border border-white/35 dark:border-white/10 shadow-lg z-15 rotate-1 opacity-65 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-3 group-hover:opacity-90"
                        />
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].label}
                          className="absolute left-[8%] top-[14%] w-[72%] rounded-lg border border-white/60 dark:border-white/10 shadow-2xl z-20 -rotate-1 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.03]"
                        />
                      </>
                    )}

                    {/* Commission - 3 images, centered vertically, crooked */}
                    {project.images.length === 3 && project.title.includes("Commission") && (
                      <>
                        <img
                          src={project.images[2].src}
                          alt={project.images[2].label}
                          className="absolute left-[2%] top-[28%] w-[60%] rounded-lg border border-white/30 dark:border-white/10 shadow-lg z-10 -rotate-2 opacity-55 transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:translate-y-1 group-hover:-rotate-5 group-hover:opacity-85"
                        />
                        <img
                          src={project.images[1].src}
                          alt={project.images[1].label}
                          className="absolute right-[0%] top-[22%] w-[62%] rounded-lg border border-white/40 dark:border-white/10 shadow-xl z-20 rotate-2 opacity-70 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:rotate-5 group-hover:opacity-95"
                        />
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].label}
                          className="absolute left-[12%] top-[18%] w-[65%] rounded-lg border border-white/60 dark:border-white/10 shadow-2xl z-30 rotate-1 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-2 group-hover:scale-[1.03]"
                        />
                      </>
                    )}

                    {/* Provider Network - stacked crooked video thumbnails */}
                    {project.images.length === 0 && project.videos.length > 0 && (
                      <>
                        {project.videos.length > 1 && (
                          <div className="absolute right-[4%] top-[10%] w-[68%] z-10 rotate-2 opacity-65 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:rotate-4 group-hover:opacity-90">
                            <img
                              src={`https://img.youtube.com/vi/${project.videos[1].id}/hqdefault.jpg`}
                              alt={project.videos[1].title}
                              className="w-full rounded-lg border border-white/40 dark:border-white/10 shadow-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/60 text-white shadow-md backdrop-blur-sm">
                                <svg className="h-4 w-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="absolute left-[6%] top-[18%] w-[72%] z-20 -rotate-2 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-3 group-hover:scale-[1.03]">
                          <img
                            src={`https://img.youtube.com/vi/${project.videos[0].id}/hqdefault.jpg`}
                            alt={project.videos[0].title}
                            className="w-full rounded-lg border border-white/60 dark:border-white/10 shadow-2xl"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal/70 text-white shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                              <svg className="h-6 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Fallback empty state */}
                    {project.images.length === 0 && project.videos.length === 0 && (
                      <div className="flex h-full items-center justify-center opacity-30">
                        <svg className="h-10 w-10 text-charcoal/20 dark:text-dark-text/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Quote */}
      <section className="border-y border-charcoal/10 dark:border-dark-text/10 bg-charcoal dark:bg-dark-card py-14 text-cream dark:text-dark-text">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-teal/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">My approach</span>
            <div className="h-px w-12 bg-teal/40" />
          </div>
          <p className="text-xl font-light italic tracking-wide text-cream/90 dark:text-dark-text/90 md:text-2xl">
            &ldquo;Comfortable in ambiguity. Effective in execution.&rdquo;
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border-2 border-charcoal/10 dark:border-dark-text/10 bg-white dark:bg-dark-card p-12 text-center md:p-20">
            <span className="mb-4 inline-block rounded-md border border-charcoal/20 dark:border-dark-text/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted dark:text-dark-muted">
              Let&apos;s Connect
            </span>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-charcoal dark:text-dark-text md:text-5xl">
              Get in Touch
            </h2>
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-terracotta" />
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-charcoal/60 dark:text-dark-text/60">
              Interested in working together, have a question, or just want to
              say hello? I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@juliestromwall.com"
                className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal dark:border-dark-text bg-charcoal dark:bg-dark-text px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-cream dark:text-dark-bg transition-colors hover:bg-transparent hover:text-charcoal dark:hover:text-dark-text"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/juliestromwall/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/20 dark:border-dark-text/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-charcoal dark:text-dark-text transition-colors hover:border-teal hover:text-teal"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal/10 dark:border-dark-text/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#home">
            <JsLogo size="sm" />
          </a>
          <p className="text-xs text-charcoal/40 dark:text-dark-text/40">
            &copy; {new Date().getFullYear()} Julie Stromwall. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 dark:text-dark-text/40 transition-colors hover:text-teal"
          >
            Back to Top &uarr;
          </a>
        </div>
      </footer>

      {/* Project Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 dark:bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white dark:bg-dark-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-charcoal/10 dark:border-dark-text/10 bg-white dark:bg-dark-card px-8 py-5">
              <h3 className="text-xl font-bold tracking-tight text-charcoal dark:text-dark-text">{modalProject.title}</h3>
              <button
                onClick={closeModal}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/10 dark:border-dark-text/10 text-charcoal/50 dark:text-dark-text/50 transition-colors hover:bg-cream dark:hover:bg-dark-surface hover:text-charcoal dark:hover:text-dark-text"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-8 py-6">
              <p className="mb-6 text-sm leading-relaxed text-charcoal/70 dark:text-dark-text/70">
                {modalProject.description}
              </p>

              {modalProject.videos.length > 0 && (
                <div className="mb-6 space-y-4">
                  {modalProject.videos.map((video, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-charcoal/10 dark:border-dark-text/10">
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {modalProject.images.length > 0 && (
                <div className="relative overflow-hidden rounded-xl border border-charcoal/10 dark:border-dark-text/10 bg-cream dark:bg-dark-surface">
                  <img
                    src={modalProject.images[activeImage].src}
                    alt={modalProject.images[activeImage].label}
                    className="w-full"
                  />
                  {modalProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveImage((prev) => (prev - 1 + modalProject.images.length) % modalProject.images.length)
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-white shadow-xl transition-all hover:scale-110"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setActiveImage((prev) => (prev + 1) % modalProject.images.length)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-white shadow-xl transition-all hover:scale-110"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-3 right-3 rounded-full bg-charcoal/60 px-3 py-1 text-xs font-medium text-white">
                        {activeImage + 1} / {modalProject.images.length}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
