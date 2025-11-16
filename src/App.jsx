import { useState } from 'react'
import './App.css'
import AvatarWithEyes from './components/AvatarWithEyes.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen w-full flex-col px-4 pb-12 pt-3 sm:px-6">
        <header className="flex items-center justify-between gap-4 py-2">
          <div className="text-sm font-semibold tracking-[0.25em] text-sky-400/80 sm:text-xs">
            SANMITHRA
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-200 shadow-sm sm:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className="mr-1 text-[10px] font-medium">Menu</span>
            <span className="flex flex-col gap-[3px]">
              <span className="h-[2px] w-3 bg-slate-200" />
              <span className="h-[2px] w-3 bg-slate-200" />
            </span>
          </button>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <button onClick={() => scrollTo('about')} className="transition-colors hover:text-sky-400">
              About
            </button>
            <button onClick={() => scrollTo('skills')} className="transition-colors hover:text-sky-400">
              Skills
            </button>
            <button onClick={() => scrollTo('projects')} className="transition-colors hover:text-sky-400">
              Projects
            </button>
            <button onClick={() => scrollTo('experience')} className="transition-colors hover:text-sky-400">
              Experience
            </button>
            <button onClick={() => scrollTo('contact')} className="transition-colors hover:text-sky-400">
              Contact
            </button>
          </nav>
        </header>

        {/* Mobile nav menu */}
        {isMenuOpen && (
          <nav className="mb-3 flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-3 text-sm text-slate-200 shadow-lg sm:hidden">
            <button
              onClick={() => scrollTo('about')}
              className="rounded-md px-2 py-1 text-left hover:bg-slate-800/80"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="rounded-md px-2 py-1 text-left hover:bg-slate-800/80"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-md px-2 py-1 text-left hover:bg-slate-800/80"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="rounded-md px-2 py-1 text-left hover:bg-slate-800/80"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-md px-2 py-1 text-left hover:bg-slate-800/80"
            >
              Contact
            </button>
          </nav>
        )}

        <main className="mt-4 flex flex-1 flex-col gap-16 pb-10">
          {/* Hero */}
          <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/40 px-4 py-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:px-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400/80">
                  Software Engineer
                </p>
                <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Sanmithra L</h1>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400/80">
                Transforming ideas into fast, dependable software.
              </p>
              <h2 className="text-balance text-3xl font-semibold text-slate-50 sm:text-4xl lg:text-5xl">
                Building reliable systems with clean, scalable code.
              </h2>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                I&apos;m a software engineer who enjoys crafting efficient, maintainable solutions
                across the stack, obsessing over the details that make experiences feel smooth
                and dependable.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo('projects')}
                  className="rounded-full bg-sky-400 px-5 py-2 text-sm font-medium text-slate-950 shadow-md shadow-sky-400/40 transition hover:bg-teal-400"
                >
                  View Projects
                </button>
                <button className="rounded-full border border-slate-600/70 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-purple-400 hover:text-purple-300">
                  Download Resume
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="rounded-full border border-transparent px-5 py-2 text-sm font-medium text-slate-300 transition hover:text-sky-400"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <AvatarWithEyes />
            </div>
          </section>

          {/* About */}
          <section id="about" className="border-t border-slate-800/80 bg-slate-950/60">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pt-10 md:flex-row md:px-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-xl font-semibold text-slate-50">About</h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  Skilled Software Engineer with a Computer Science Engineering degree and a habit of turning coffee
                  into clean, scalable code. I build dynamic web applications, jump between frontend and backend like
                  it&apos;s a side quest, and adapt to new technologies faster than my tabs multiply.
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Passionate about crafting efficient, maintainable solutions and obsessing over tiny UX details no one
                  notices — but I know, and that&apos;s enough. Always leveling up, staying curious, and keeping an eye on
                  emerging tech, because in this industry, staying still is basically a bug.
                </p>
                <p className="text-sm text-slate-400">
                  Beyond code, you&apos;ll usually find me with a pencil or brush in hand, sketching or painting.
                </p>
              </div>
              <div className="flex w-full flex-1 items-center justify-center md:justify-end">
                <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-sm text-slate-300 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400/80">
                    Snapshot
                  </p>
                  <p className="mt-3 text-sm">
                    2+ years building reliable backend and frontend systems, with a bias toward clean architecture,
                    performance, and thoughtful developer experience.
                  </p>
                  <p className="mt-3 text-xs text-slate-400">
                    Currently focused on Spring Boot services and smooth user experiences in React.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="border-t border-slate-800/80 bg-slate-950/60">
            <div className="mx-auto w-full max-w-6xl px-4 pt-10 md:px-8">
              <h2 className="mb-4 text-xl font-semibold text-slate-50">Skills &amp; Tech Stack</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Languages</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Frameworks &amp; Libraries</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Spring Boot</li>
                  <li>React</li>
                  <li>Kafka</li>
                  <li>Hibernate</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Databases</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Cloud &amp; DevOps</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>AWS (S3, EC2)</li>
                  <li>Jenkins</li>
                  <li>Nginx</li>
                  <li>Docker &amp; Kubernetes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Other</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Microservices</li>
                  <li>Socket Programming</li>
                  <li>Secure Application Design</li>
                  <li>Git, Agile/Scrum</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Beyond Code</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Pencil sketching</li>
                  <li>Painting</li>
                </ul>
              </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="border-t border-slate-800/80 bg-slate-950/60">
            <div className="mx-auto w-full max-w-6xl px-4 pt-10 md:px-8">
              <h2 className="mb-4 text-xl font-semibold text-slate-50">Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-100">
                  TOTP-Based Two-Factor Authentication System
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Backend system implementing time-based one-time passwords (TOTP) to add an additional security
                  layer on top of username/password authentication.
                </p>
                <p className="mt-2 text-xs text-sky-300">Java · Spring Boot · Security · TOTP</p>
                <div className="mt-3">
                  <a
                    href="https://github.com/Sanmithra-L/totp-mfa-backend"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300"
                  >
                    View on GitHub
                  </a>
                </div>
              </article>

              <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-100">Event-Driven Order Management System</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Event-driven architecture for managing orders and workflows, using messaging to decouple services
                  and improve scalability and reliability.
                </p>
                <p className="mt-2 text-xs text-sky-300">Java · Spring Boot · Kafka · Microservices</p>
                <div className="mt-3">
                  <a
                    href="https://github.com/Sanmithra-L/event-driven-order-management-system"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300"
                  >
                    View on GitHub
                  </a>
                </div>
              </article>
              </div>
            </div>
          </section>

          {/* Experience & Education */}
          <section id="experience" className="border-t border-slate-800/80 bg-slate-950/60">
            <div className="mx-auto w-full max-w-6xl px-4 pt-10 md:px-8">
              <h2 className="mb-4 text-xl font-semibold text-slate-50">Experience &amp; Education</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Experience</h3>
                  <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
                    <p className="font-medium text-slate-100">Software Engineer</p>
                    <p className="mt-1 text-xs text-slate-400">2+ years</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Working across backend services and user-facing features, owning pieces of the stack end-to-end
                      from design to deployment.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Education</h3>
                  <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
                    <p className="font-medium text-slate-100">BNM Institute of Technology</p>
                    <p className="mt-1 text-xs text-slate-400">Bachelor of Engineering in Computer Science</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Strong foundations in computer science, algorithms, and system design, now applied to building
                      production-grade software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="border-t border-slate-800/80 bg-slate-950/60">
            <div className="mx-auto w-full max-w-6xl px-4 pt-10 md:px-8">
              <h2 className="mb-4 text-xl font-semibold text-slate-50">Contact</h2>
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="space-y-3 text-sm text-slate-300">
                  <p className="font-medium text-slate-100">SANMITHRA L</p>
                  <p>+91 80738 38327 · Bangalore</p>
                  <p>
                    <a href="mailto:sanmithra04@gmail.com" className="text-sky-400 hover:text-sky-300">
                      sanmithra04@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://linkedin.com/in/sanmithra-l"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300"
                    >
                      linkedin.com/in/sanmithra-l
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/Sanmithra-L"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300"
                    >
                      github.com/Sanmithra-L
                    </a>
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400/80">
                    Let&apos;s collaborate
                  </p>
                  <p className="mt-3 text-sm">
                    Whether it&apos;s backend-heavy systems work or a polished user experience, I&apos;m open to interesting
                    problems where reliability and clarity matter.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog section intentionally removed for now */}
        </main>
      </div>
    </div>
  )
}

export default App
