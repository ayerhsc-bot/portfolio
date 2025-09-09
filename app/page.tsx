import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconTools,
  IconFolder,
  IconMail,
  IconSchool,
  IconBriefcase,
} from "@tabler/icons-react";
import Image from "next/image";
import { WobbleCardDemo } from "@/components/wobble-card-demo";
import { Mail as MailIcon, Linkedin as LinkedinIcon, Github as GithubIcon, FileDown as FileDownIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Fixed 100vh aurora background behind content */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <AuroraBackground>{null}</AuroraBackground>
      </div>
      <div className="relative z-10 min-h-screen p-8 pb-20 gap-16 sm:p-20 snap-y snap-mandatory">
        {/* Floating Dock */}
        <FloatingDock
          desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          mobileClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
          items={[
            {
              title: "Home",
              icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#home",
            },
            {
              title: "About",
              icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#about",
            },
            {
              title: "Skills",
              icon: (
                <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#skills",
            },
            {
              title: "Projects",
              icon: (
                <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#projects",
            },
            {
              title: "Education",
              icon: (
                <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#education",
            },
            {
              title: "Experience",
              icon: (
                <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#experience",
            },
            {
              title: "Contact",
              icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#contact",
            },
          ]}
        />
        {/* Hero Section (first screen) */}
        <section id="home" className="relative min-h-screen px-4 snap-start">
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-3 bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 bg-clip-text text-transparent leading-tight">
              Shreya Sarkar
            </h1>
            <h2 className="text-2xl sm:text-4xl font-semibold mb-8 text-white drop-shadow-lg">
              Aspiring Software Engineer | BA LL.B Graduate
            </h2>
            <p className="text-lg sm:text-2xl text-white/90 max-w-4xl mb-10 leading-relaxed font-light">
              Law graduate pivoting to software engineering. Seeking early-career SWE roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://seq6ecbqjukmvbmg.public.blob.vercel-storage.com/resume-NekM8R1w7lmI4MQDQ4fIl1KG7u0K6m.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500"
              >
                <span className="relative z-10">Download Résumé</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        

        {/* About Section */}
        <section id="about" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white drop-shadow-lg">
              About Me
            </h2>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                I am a BA LL.B graduate from the University of Calcutta who is transitioning into software engineering through focused coursework and hands-on projects. My legal background trained me in structured research, precise documentation, and stakeholder collaboration, while my media work strengthened my communication and product instincts. I am completing Harvard CS50x and practicing algorithmic problem solving on LeetCode. I build full-stack web projects to apply learning, and I am seeking an apprenticeship to gain mentorship and production software experience.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center text-white drop-shadow-lg">
              Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "REST APIs", "OAuth integrations (Spotify)", "SQL (Postgres / Supabase)", "Git / GitHub", "Basic testing"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Learning in progress</h3>
                <ul className="text-white/90 space-y-2 text-lg">
                  <li>CS50x (Harvard)</li>
                  <li>Data Structures & Algorithms practice on LeetCode (easy problems; arrays, strings, recursion)</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Transferable</h3>
                <div className="flex flex-wrap gap-2">
                  {["Analytical research", "Technical documentation", "Collaboration and communication", "Deadline-driven delivery", "Public speaking"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-10xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center text-white drop-shadow-lg">
              Featured Projects
            </h2>
            <WobbleCardDemo />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white drop-shadow-lg">Education</h2>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl space-y-6">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                BA LL.B, University of Calcutta (2020–2025), CGPA 7.05
              </p>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                Online: CS50x (Harvard)
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-center text-white drop-shadow-lg">Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white">Legal Intern — Office of Pradeep Rai (Supreme Court)</h3>
                <p className="text-white/70 mb-2">Aug 2024–Sep 2024 · New Delhi</p>
                <p className="text-white/90">Conducted legal research and drafted case summaries, petitions, and procedural guides for senior advocates.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white">Legal Intern — KV Narendra & Associates</h3>
                <p className="text-white/70 mb-2">Mar 2025–Apr 2025 · Bengaluru</p>
                <p className="text-white/90">Drafted real-estate agreements, performed due diligence, and supported client consultations.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl md:col-span-2">
                <h3 className="text-2xl font-bold text-white">Social Media Manager & Content Creator — Radio Mirchi Bangla</h3>
                <p className="text-white/70 mb-2">Oct 2023–Feb 2024 · Kolkata</p>
                <p className="text-white/90">Designed digital content strategy, produced multimedia assets, and managed PR for Mirchi Music Awards Bangla.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white drop-shadow-lg">
              Let's Work Together
            </h2>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl mb-12">
              <p className="text-xl sm:text-2xl text-white/90 mb-6 font-light leading-relaxed">
                Interested in apprenticeships or early-career SWE roles.
              </p>
              <div className="text-white/80 mb-10 space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <MailIcon className="h-5 w-5 text-cyan-300" />
                  <a href="mailto:sarkarshreya624@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline">sarkarshreya624@gmail.com</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <LinkedinIcon className="h-5 w-5 text-cyan-300" />
                  <a href="https://www.linkedin.com/in/shreya-sarkar-b23586243/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">linkedin.com/in/shreya-sarkar-b23586243</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <GithubIcon className="h-5 w-5 text-cyan-300" />
                  <a href="https://github.com/ayerhsc-bot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">github.com/ayerhsc-bot</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FileDownIcon className="h-5 w-5 text-cyan-300" />
                  <a href="https://seq6ecbqjukmvbmg.public.blob.vercel-storage.com/resume-NekM8R1w7lmI4MQDQ4fIl1KG7u0K6m.pdf" download className="text-cyan-400 hover:text-cyan-300 hover:underline">resume.pdf</a>
                </div>
              </div>
              <div className="flex gap-6 items-center justify-center flex-col sm:flex-row">
                <a
                  href="mailto:sarkarshreya624@gmail.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500"
                >
                  <span className="relative z-10 inline-flex items-center gap-2"><MailIcon className="h-5 w-5" />Send Email</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a
                  href="https://www.linkedin.com/in/shreya-sarkar-b23586243/"
          target="_blank"
          rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="inline-flex items-center gap-2"><LinkedinIcon className="h-5 w-5" />LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-white/70 text-lg font-light">
              © 2024 Shreya. Built with Next.js and Tailwind CSS.
            </p>
          </div>
      </footer>
    </div>
    </>
  );
}
