import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";
import {
  IconHome,
  IconUser,
  IconTools,
  IconFolder,
  IconMail,
  IconQuote,
} from "@tabler/icons-react";

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
              title: "Testimonials",
              icon: (
                <IconQuote className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#testimonials",
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
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-7xl sm:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Shreya
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              Full Stack Developer & Designer
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mb-16 leading-relaxed font-light">
              I create beautiful, functional web experiences that bring ideas to life. 
              Passionate about clean code, innovative design, and user-centered solutions.
            </p>
            
          </div>
        </section>

        

        {/* About Section */}
        <section id="about" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white drop-shadow-lg">
              About Me
            </h2>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                I'm a passionate developer with a love for creating digital experiences that matter. 
                With expertise in modern web technologies, I specialize in building scalable applications 
                that are both beautiful and functional.
              </p>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "React", "Next.js", "TypeScript", "Node.js",
                "Python", "PostgreSQL", "MongoDB", "AWS",
                "Figma", "Tailwind CSS", "Git", "Docker"
              ].map((skill) => (
                <div key={skill} className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-xl">
                  <span className="text-white font-semibold text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center text-white drop-shadow-lg">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-300 border border-white/10 shadow-xl hover:shadow-2xl">
                  <div className="h-56 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl mb-6 group-hover:from-blue-400/40 group-hover:via-purple-400/40 group-hover:to-pink-400/40 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">Project {project}</h3>
                  <p className="text-white/80 mb-6 text-lg leading-relaxed">
                    A brief description of the project and the technologies used to build it.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg hover:underline transition-colors">Live Demo</a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg hover:underline transition-colors">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-center text-white drop-shadow-lg">
              Testimonials
            </h2>
            <AnimatedTestimonials autoplay testimonials={[
              {
                name: "Alex Johnson",
                designation: "Product Manager, Acme Inc.",
                quote:
                  "Shreya delivered beyond expectations. The UX polish and code quality were outstanding.",
                src: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Priya Kumar",
                designation: "Founder, Startup XY",
                quote:
                  "From design to deployment, everything was smooth. Shreya communicates clearly and ships fast.",
                src: "https://images.unsplash.com/photo-1544006659-9a9dbaffd7e1?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Michael Chen",
                designation: "Tech Lead, DevWorks",
                quote:
                  "We integrated Shreya's components across our app. Performance and accessibility improved immediately.",
                src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
              },
            ] as Testimonial[]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-24 px-4 flex items-center snap-start">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white drop-shadow-lg">
              Let's Work Together
            </h2>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl mb-12">
              <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light leading-relaxed">
                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
              </p>
              <div className="flex gap-6 items-center justify-center flex-col sm:flex-row">
                <a
                  href="mailto:sarkarshreya624@gmail.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500"
                >
                  <span className="relative z-10">Send Email</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        <a
                  href="https://www.linkedin.com/in/shreya-sarkar-b23586243/"
          target="_blank"
          rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
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
