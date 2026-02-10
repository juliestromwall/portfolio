"use client";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Product Strategy",
  "User Research",
  "Roadmap Planning",
  "Cross-Functional Leadership",
  "Data-Driven Decisions",
  "Agile & Scrum",
  "Stakeholder Management",
  "Go-to-Market",
];

const PROJECTS = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Led a complete redesign of the checkout experience, reducing cart abandonment by 35% and increasing conversion rates. Coordinated cross-functional teams across engineering, design, and marketing to deliver on a tight timeline.",
    tags: ["Product Strategy", "UX", "E-Commerce"],
    color: "bg-teal-light",
    borderColor: "border-teal",
  },
  {
    title: "Mobile App Launch",
    description:
      "Took a native mobile app from concept to launch in 6 months. Conducted extensive user research, defined the MVP scope, and managed a team of 8 engineers. The app reached 50K downloads in the first quarter.",
    tags: ["Mobile", "Launch", "User Research"],
    color: "bg-terracotta-light",
    borderColor: "border-terracotta",
  },
  {
    title: "Internal Tools & Workflow Automation",
    description:
      "Identified operational bottlenecks and built an internal tooling roadmap that saved 20+ hours per week across the operations team. Partnered with engineering to prioritize and ship improvements incrementally.",
    tags: ["Internal Tools", "Automation", "Operations"],
    color: "bg-teal-light",
    borderColor: "border-teal",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Designed and shipped a real-time analytics dashboard used by 200+ stakeholders. Defined key metrics, coordinated with data engineering, and iterated rapidly based on user feedback to drive adoption.",
    tags: ["Analytics", "Data", "Stakeholder Alignment"],
    color: "bg-terracotta-light",
    borderColor: "border-terracotta",
  },
];

const ABOUT_ITEMS = [
  {
    icon: "💡",
    title: "Product Thinking",
    description:
      "I focus on understanding user needs deeply before jumping to solutions. Every feature starts with a clear problem statement and measurable outcome.",
  },
  {
    icon: "🤝",
    title: "Cross-Functional Leadership",
    description:
      "I thrive at the intersection of engineering, design, and business — aligning diverse teams around shared goals and shipping great products together.",
  },
  {
    icon: "📊",
    title: "Data-Informed Decisions",
    description:
      "I believe in letting data guide priorities while leaving room for intuition and user empathy. Metrics matter, but so does the story behind them.",
  },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-charcoal/5 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-charcoal text-sm font-bold tracking-tight"
          >
            JS
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-charcoal/70 transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-teal/30 bg-teal-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-dark">
                  Product Manager
                </span>
                <span className="rounded-full border border-terracotta/30 bg-terracotta-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
                  Builder
                </span>
              </div>

              <h1 className="mb-2 text-6xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl">
                <span className="block">Julie</span>
                <span className="block">Stromwall</span>
              </h1>

              <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide text-muted md:text-xl">
                Product Manager
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-charcoal/70 md:text-lg">
                I build thoughtful digital products that solve real problems.
                With a focus on user empathy, data-driven decisions, and
                cross-functional collaboration, I turn ambiguity into clear
                roadmaps and shipped features.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-transparent hover:text-charcoal"
                >
                  View My Work
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:border-teal hover:text-teal"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                <div className="h-80 w-80 overflow-hidden rounded-2xl border-4 border-charcoal/80 shadow-[8px_8px_0px_0px_rgba(45,155,138,0.3)] md:h-96 md:w-96">
                  {/* Replace /photo.jpg with your actual photo */}
                  <img
                    src="/photo.jpg"
                    alt="Julie Stromwall, Product Manager"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.classList.add(
                        "bg-gradient-to-br",
                        "from-teal-light",
                        "to-terracotta-light",
                      );
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
        <div className="border-y border-charcoal/10 bg-cream-dark py-4 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-4 text-sm font-semibold uppercase tracking-widest text-charcoal/40">
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
            <span className="mb-4 inline-block rounded-md border border-charcoal/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
              Who I Am
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              About Julie
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-terracotta" />
          </div>

          <div className="mb-16 mx-auto max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-charcoal/70">
              I&apos;m a product manager who loves the messy middle of building
              something great. I believe the best products come from deeply
              understanding users, asking the right questions, and bringing
              people together to ship work that matters.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {ABOUT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-charcoal/10 bg-white p-8 transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="bg-cream-dark py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <span className="mb-4 inline-block rounded-md border border-charcoal/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
              My Work
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              Featured Projects
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-teal" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className={`group cursor-pointer rounded-xl border-2 border-charcoal/10 ${project.color} p-8 transition-all hover:border-charcoal/30 hover:shadow-lg`}
              >
                <h3 className="mb-4 text-xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-charcoal/60">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-charcoal/15 bg-white/60 px-3 py-1 text-xs font-medium text-charcoal/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal/40 transition-colors group-hover:text-teal">
                  View Details
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-charcoal/10 bg-charcoal py-16 text-cream">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {[
            { number: "8+", label: "Years Experience" },
            { number: "20+", label: "Products Shipped" },
            { number: "50+", label: "Stakeholders Aligned" },
            { number: "3", label: "Companies" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-teal md:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-cream/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border-2 border-charcoal/10 bg-white p-12 text-center md:p-20">
            <span className="mb-4 inline-block rounded-md border border-charcoal/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
              Let&apos;s Connect
            </span>
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Get in Touch
            </h2>
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-terracotta" />
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-charcoal/60">
              Interested in working together, have a question, or just want to
              say hello? I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:julie@example.com"
                className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal bg-charcoal px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-transparent hover:text-charcoal"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:border-teal hover:text-teal"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#home"
            className="flex h-8 w-8 items-center justify-center rounded border-2 border-charcoal text-xs font-bold"
          >
            JS
          </a>
          <p className="text-xs text-charcoal/40">
            &copy; {new Date().getFullYear()} Julie Stromwall. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 transition-colors hover:text-teal"
          >
            Back to Top &uarr;
          </a>
        </div>
      </footer>
    </div>
  );
}
