import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Code2, Menu, X,
  Terminal, Braces, Database, Server, Layers3, Mail, MapPin,
  ExternalLink, GraduationCap, Sparkles, GitBranch, Download,
  CheckCircle2, CircleDot
} from 'lucide-react'

const links = {
  github: 'https://github.com/sinhass753-arch',
  linkedin: 'https://www.linkedin.com/in/shubham-sinhaaa/',
  leetcode: 'https://leetcode.com/u/shubham_sinha_303/',
  expense: 'https://github.com/sinhass753-arch/expense-tracker',
}

const skills = [
  { title: 'Languages', icon: Code2, items: ['Java', 'C++', 'Python'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'REST APIs', 'Spring Security'] },
  { title: 'Databases', icon: Database, items: ['MongoDB', 'SQL'] },
  { title: 'Tools & Concepts', icon: Layers3, items: ['Git', 'GitHub', 'OOP', 'Data Structures & Algorithms'] },
]

const projects = [
  {
    number: '01',
    name: 'Expense Tracker',
    category: 'BACKEND APPLICATION',
    description: 'A personal finance application focused on organizing expenses and building practical backend skills. The repository is a work in progress.',
    stack: ['Java', 'Spring Boot', 'MongoDB', 'Spring Security'],
    status: 'In progress',
    href: links.expense,
    featured: true,
  },
  {
    number: '02',
    name: 'Investment & Portfolio Management Platform',
    category: 'PLANNED FLAGSHIP PROJECT',
    description: 'A planned fintech platform exploring portfolio tracking, transaction workflows, financial analytics and backend system design.',
    stack: ['Java', 'Spring Boot', 'Database Design', 'System Design'],
    status: 'Planned',
    href: null,
    featured: false,
  },
]

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Profiles', '#profiles'],
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="section-label mb-3 text-xs font-bold uppercase">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-zinc-400">{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] text-zinc-100">
      <div className="page-grid pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
      <div className="glow pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[760px] -translate-x-1/2" />

      <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#09090b]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-display text-xl font-bold tracking-tight" onClick={closeMenu}>
            shubham<span className="text-teal-300">.</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-zinc-400 transition hover:text-white">{label}</a>
            ))}
            <a href="#contact" className="rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:bg-teal-300/20">Let's connect <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
          </div>
          <button className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#101013] px-5 py-4 md:hidden">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="block py-3 text-sm text-zinc-300">{label}</a>)}
            <a href="#contact" onClick={closeMenu} className="mt-2 block py-3 text-sm font-semibold text-teal-200">Let's connect ↗</a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto flex min-h-[760px] max-w-6xl scroll-mt-24 items-center px-5 pb-24 pt-36 sm:px-8">
          <div className="relative z-10 max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/[0.07] px-4 py-2 text-xs font-medium text-teal-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300" />
              COMPUTER SCIENCE STUDENT · IIIT DELHI
            </div>
            <p className="mb-4 text-lg text-zinc-400">Hello, I'm</p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Shubham<br /><span className="text-gradient">Sinha.</span>
            </h1>
            <h2 className="mt-7 font-display text-xl font-medium text-zinc-200 sm:text-2xl">
              Aspiring Software Engineer <span className="text-zinc-600">/</span> Backend Development
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Computer Science and Economics student at IIIT Delhi, interested in building reliable software, backend applications and understanding how systems work under the hood.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-teal-200">
                Explore my work <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/5">
                <Github size={17} /> GitHub
              </a>
            </div>
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Delhi, India</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> IIIT Delhi</span>
              <span className="inline-flex items-center gap-2"><Braces size={15} /> Java · Spring Boot</span>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-28 right-10 hidden h-72 w-72 items-center justify-center rounded-full border border-teal-200/10 lg:flex">
            <div className="absolute inset-7 rounded-full border border-teal-200/10" />
            <div className="absolute inset-14 rounded-full border border-teal-200/10" />
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-teal-200/20 bg-teal-200/[0.06] text-teal-200 shadow-[0_0_90px_rgba(45,212,191,0.12)]">
              <Terminal size={54} strokeWidth={1.2} />
            </div>
            <span className="absolute right-3 top-14 h-2 w-2 rounded-full bg-teal-300" />
            <span className="absolute bottom-12 left-5 h-1.5 w-1.5 rounded-full bg-teal-300/70" />
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.2em] text-zinc-600 transition hover:text-teal-200 sm:flex">
            Scroll to explore <ArrowDown size={14} />
          </a>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <SectionHeading eyebrow="01 / About" title="A little about me." />
              <div className="space-y-5 text-[15px] leading-8 text-zinc-400">
                <p>I'm a student at <strong className="font-semibold text-zinc-200">Indraprastha Institute of Information Technology Delhi (IIIT Delhi)</strong>, pursuing Computer Science with Economics.</p>
                <p>I'm currently strengthening my foundations in programming, data structures and algorithms, object-oriented design and backend development with Java and Spring Boot.</p>
                <p>I enjoy learning by building projects and improving them through better code structure, database design, testing and thoughtful engineering decisions.</p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl border border-white/[0.08] p-6">
                <GraduationCap className="mb-5 text-teal-200" size={23} />
                <p className="text-xs uppercase tracking-widest text-zinc-500">Education</p>
                <h3 className="mt-2 font-display text-lg font-semibold">IIIT Delhi</h3>
                <p className="mt-1 text-sm text-zinc-400">Computer Science + Economics</p>
              </div>
              <div className="glass rounded-2xl border border-white/[0.08] p-6">
                <Code2 className="mb-5 text-teal-200" size={23} />
                <p className="text-xs uppercase tracking-widest text-zinc-500">Current focus</p>
                <h3 className="mt-2 font-display text-lg font-semibold">Backend Engineering</h3>
                <p className="mt-1 text-sm text-zinc-400">Java · Spring Boot · APIs</p>
              </div>
              <div className="glass rounded-2xl border border-white/[0.08] p-6 sm:col-span-2">
                <Sparkles className="mb-5 text-teal-200" size={23} />
                <p className="text-xs uppercase tracking-widest text-zinc-500">What I'm working towards</p>
                <h3 className="mt-2 font-display text-lg font-semibold">Building strong engineering fundamentals</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-400">Writing maintainable code, understanding trade-offs and developing projects that solve practical problems.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="02 / Toolkit" title="Technologies & skills." description="A snapshot of the tools and concepts I'm learning and using. This list will grow as I build and gain hands-on experience." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ title, icon: Icon, items }) => (
              <div key={title} className="card-hover rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-200/15 bg-teal-200/[0.07] text-teal-200"><Icon size={21} /></div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-zinc-400"><span className="h-1.5 w-1.5 rounded-full bg-teal-300/70" />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="03 / Selected work" title="Projects I'm building." description="I prefer a small number of thoughtful projects that demonstrate practical engineering over a long list of unfinished demos." />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map(project => (
                <article key={project.number} className="card-hover flex min-h-[340px] flex-col rounded-2xl border border-white/[0.09] bg-[#111114] p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm text-zinc-600">{project.number} / 02</span>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${project.status === 'In progress' ? 'border-amber-300/20 bg-amber-300/[0.07] text-amber-200' : 'border-zinc-500/20 bg-zinc-500/[0.07] text-zinc-400'}`}>{project.status}</span>
                  </div>
                  <p className="mt-9 text-[10px] font-bold tracking-[.2em] text-teal-300">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{project.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map(tag => <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">{tag}</span>)}
                  </div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-teal-100">View repository <ArrowUpRight size={16} /></a>
                  ) : (
                    <span className="mt-7 inline-flex w-fit items-center gap-2 text-sm text-zinc-600"><CircleDot size={15} /> Project roadmap</span>
                  )}
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-zinc-600">Project descriptions and statuses are intentionally kept honest. More details, architecture diagrams and demos will be added as the projects mature.</p>
          </div>
        </section>

        <section id="profiles" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="04 / Around the web" title="Find me online." description="You can explore my code, problem-solving practice and professional profile through these links." />
          <div className="grid gap-4 md:grid-cols-3">
            <a href={links.github} target="_blank" rel="noreferrer" className="card-hover group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <Github className="mb-8 text-zinc-200" size={26} />
              <h3 className="font-display text-xl font-semibold">GitHub</h3>
              <p className="mt-2 text-sm text-zinc-500">Projects, repositories and code.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-teal-200">Visit profile <ArrowUpRight size={15} /></span>
            </a>
            <a href={links.leetcode} target="_blank" rel="noreferrer" className="card-hover group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <Code2 className="mb-8 text-zinc-200" size={26} />
              <h3 className="font-display text-xl font-semibold">LeetCode</h3>
              <p className="mt-2 text-sm text-zinc-500">Data structures and algorithms practice.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-teal-200">View profile <ArrowUpRight size={15} /></span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="card-hover group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <Linkedin className="mb-8 text-zinc-200" size={26} />
              <h3 className="font-display text-xl font-semibold">LinkedIn</h3>
              <p className="mt-2 text-sm text-zinc-500">Connect and view my professional profile.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-teal-200">Connect <ArrowUpRight size={15} /></span>
            </a>
          </div>
        </section>

        <section id="contact" className="border-t border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
            <p className="section-label mb-3 text-xs font-bold uppercase">05 / Contact</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Let's build something <span className="text-gradient">meaningful.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400">I'm open to connecting with fellow developers, learning from the community and exploring software engineering opportunities.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-teal-200"><Linkedin size={17} /> Connect on LinkedIn</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/5"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Shubham Sinha. Built with React & Tailwind CSS.</span>
          <a href="#home" className="inline-flex items-center gap-1 transition hover:text-teal-200">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
