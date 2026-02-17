import { motion, type Easing, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const skills = {
  "Languages": ["TypeScript", "JavaScript", "HTML", "CSS"],
  "Frameworks": ["React", "Next.js", "TailwindCSS", "Redux", "Zustand", "React Query", "React Hook Form"],
  "Backend & DB": ["Firebase", "Supabase", "Stripe"],
  "Tools": ["Git", "GitHub", "Vercel", "Netlify", "Vite", "Figma", "Jest"],
};

const experiences = [
  {
    company: "Skinstric AI",
    role: "Frontend Engineer",
    period: "Sep 2024 – Apr 2025",
    location: "Remote",
    highlights: [
      "Architected real-time skin analysis platform using OpenAI Vision API and Next.js with 98% detection accuracy",
      "Built custom GSAP animation system increasing user retention by 40%",
      "Optimized performance with Next.js Server Components achieving sub-2s analysis time",
      "Developed responsive UI with TailwindCSS and 60% improved engagement",
    ],
  },
  {
    company: "Frontend Simplified",
    role: "Frontend Developer & Mentor",
    period: "Jan 2024 – Aug 2024",
    location: "Remote",
    highlights: [
      "Selected as peer mentor after top 5% cohort performance, mentoring 20+ students",
      "Created workshops improving portfolio load times by 50%",
      "Built reusable ShadCN/UI component library reducing dev time by 40%",
      "Led accessibility study groups achieving 90% WCAG compliance",
    ],
  },
];
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground glow hover:opacity-90 transition-opacity"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gradient">SG</span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center section-padding pt-32">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="relative max-w-6xl mx-auto w-full">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-sm text-primary mb-4 tracking-widest uppercase"
          >
            Software Engineer
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Stephanie
            <br />
            <span className="text-gradient">Gonzalez</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            A versatile developer specializing in frontend and fullstack development. 
            Building scalable, efficient, and user-friendly applications.
          </motion.p>
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity glow"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">About</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Crafting digital <span className="text-gradient">experiences</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.p
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I'm a software developer passionate about creating beautiful, performant web applications.
              With expertise in React, TypeScript, and modern frontend frameworks, I focus on building 
              products that make a real impact.
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={staggerItem} className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Belleville, NJ, United States</span>
              </motion.div>
              <motion.div variants={staggerItem} className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>stephanie.gl@icloud.com</span>
              </motion.div>
              <motion.div variants={staggerItem} className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (862) 786-9966</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-padding bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Where I've <span className="text-gradient">worked</span>
            </h2>
          </motion.div>
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4, ease }}
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
                />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-primary font-mono text-sm">{exp.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm font-mono mt-1 md:mt-0">
                    {exp.period} · {exp.location}
                  </p>
                </div>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2 text-muted-foreground"
                >
                  {exp.highlights.map((h, j) => (
                    <motion.li key={j} variants={staggerItem} className="flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Projects</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Personal <span className="text-gradient">projects</span>
            </h2>
          </motion.div>
          <motion.div
            custom={0}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">Anime Search API Platform</h3>
                <p className="text-primary font-mono text-sm">Full-Stack Search Application</p>
              </div>
              <div className="flex gap-3 mt-3 md:mt-0">
                <a
                  href="https://anime-verse-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-border rounded-lg hover:border-primary hover:text-primary transition-colors font-mono"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/StephanieGL/AnimeVerse-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-border rounded-lg hover:border-primary hover:text-primary transition-colors font-mono"
                >
                  GitHub
                </a>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              A fully functional search platform for anime series, featuring responsive design,
              loading states, and dynamic routing to showcase content on both mass-level search
              and individual detail routes.
            </p>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2 text-muted-foreground mb-6"
            >
              <motion.li variants={staggerItem} className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                <span>Engineered and integrated a search API for anime with fully responsive design</span>
              </motion.li>
              <motion.li variants={staggerItem} className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                <span>Implemented loading states and dynamic routing for individual anime detail pages</span>
              </motion.li>
              <motion.li variants={staggerItem} className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                <span>Built mass-level search functionality to browse and discover anime series</span>
              </motion.li>
            </motion.ul>
            <div className="flex flex-wrap gap-2">
              {["React", "API Integration", "Dynamic Routing", "Responsive Design"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Skills</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Tech <span className="text-gradient">stack</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <h3 className="font-mono text-sm text-primary mb-4 tracking-wider uppercase">
                  {category}
                </h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={staggerItem}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Education</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              <span className="text-gradient">Background</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              custom={0}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-1">B.S. Electrical Engineering</h3>
              <p className="text-primary font-mono text-sm mb-2">Universidad Pontificia Bolivariana</p>
              <p className="text-muted-foreground text-sm">3.9 GPA</p>
            </motion.div>
            <motion.div
              custom={1}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-1">Frontend Development Certificate</h3>
              <p className="text-primary font-mono text-sm">Frontend Simplified</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              <motion.a
                variants={staggerItem}
                whileHover={{ scale: 1.15, y: -4 }}
                href="mailto:stephanie.gl@icloud.com"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:glow transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                variants={staggerItem}
                whileHover={{ scale: 1.15, y: -4 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:glow transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                variants={staggerItem}
                whileHover={{ scale: 1.15, y: -4 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:glow transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-primary" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-8 border-t border-border"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold text-gradient">SG</span>
          <p className="text-sm text-muted-foreground">
            © 2025 Stephanie Gonzalez. All rights reserved.
          </p>
        </div>
      </motion.footer>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
