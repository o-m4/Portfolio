"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, ExternalLink, ChevronDown, Terminal, Server, Brain, Code, FileText, Send } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C7.9 2.1 6.7 2.5 6.7 2.5a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 5 9.7c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        glowRef.current!.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.04), transparent 40%)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-zinc-50 overflow-hidden font-sans selection:bg-zinc-800">
      {/* Layer 1: Base Dark Grid with Vignette */}
      <div className="fixed inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-30 pointer-events-none" />

      {/* Layer 2: Performance-optimized Ambient Gradients (No heavy blurs) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-1/4 left-1/3 w-[800px] h-[800px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(161,161,170,0.1) 0%, transparent 70%)' }} />
      </div>

      {/* Layer 3: Dynamic Mouse Glow (Ref-based, no re-renders) */}
      <div 
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      />

      {/* Background AI HUD */}
      <div className="fixed left-8 bottom-8 z-0 opacity-10 pointer-events-none select-none hidden lg:flex flex-col items-start">
        <Brain className="w-64 h-64 mb-6 text-zinc-300" />
        <div className="font-mono text-2xl text-zinc-400 space-y-2">
          <p>{">"} System.init()</p>
          <p className="text-emerald-500">{">"} Status: Online</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-800/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="#hero" className="font-semibold text-lg tracking-tight hover:text-zinc-300 transition-colors">
            Om Yadav
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/o-m4" target="_blank" className="text-zinc-400 hover:text-white transition-colors hidden sm:block">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/om-yadav-ai/" target="_blank" className="text-zinc-400 hover:text-white transition-colors hidden sm:block">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-zinc-800/50"
        >
          <div className="flex flex-col p-6 gap-4 text-base font-medium text-zinc-400">
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">About</Link>
            <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Projects</Link>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Skills</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Contact</Link>
            <div className="flex gap-4 pt-2 border-t border-zinc-900 mt-2">
              <Link href="https://github.com/o-m4" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/om-yadav-ai/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 pt-20 md:pt-24 pb-20 md:pb-24 space-y-20 md:space-y-24">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[75vh] flex flex-col justify-center pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn} className="space-y-3">
                <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-300">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                  Available for opportunities
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  Hi, I&apos;m <span className="gradient-text">Om Yadav</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400">
                  AI Systems & Backend Engineer
                </h2>
                <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed pb-2">
                  Building scalable AI architectures, high-performance backends, and intelligent production systems.
                </p>
                <div className="font-mono text-sm text-zinc-500 border-l-2 border-zinc-800 pl-4 py-1 space-y-1.5">
                  <p><span className="text-emerald-500">{">"}</span> Currently building AI-driven backend systems</p>
                  <p><span className="text-emerald-500">{">"}</span> Open to internships & collaborations</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2">
                <Button size="lg" asChild className="rounded-full w-full sm:w-auto">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="rounded-full w-full sm:w-auto">
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full group w-full sm:w-auto">
                  <Link href="#contact">
                    Contact Me
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center mt-12 md:mt-0"
            >
              {/* Outer Glow (Static to reduce rendering overhead) */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-zinc-500/10 blur-[40px] z-0 hidden md:block" />
              
              {/* Profile Container with Performance CSS Floating Effect */}
              <div className="relative z-20 animate-float">
                {/* Gradient Border Ring */}
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-zinc-500/50 to-zinc-900/50 z-10 opacity-70 blur-[1px]" />
                
                {/* Image Mask */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-20 bg-zinc-900 border border-zinc-800/80">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                  <Image src="/profile.png" alt="Om Yadav" fill priority sizes="(max-width: 768px) 224px, 288px" className="object-cover opacity-90 scale-105" />
                </div>
              </div>
              
              {/* Floating Badges (GPU accelerated CSS) */}
              <div className="absolute top-4 -left-2 md:top-10 md:-left-6 glass-card px-3 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-mono border border-zinc-700 z-30 shadow-lg animate-float-fast">
                Python
              </div>
              <div className="absolute bottom-6 -right-2 md:bottom-10 md:-right-4 glass-card px-3 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-mono border border-zinc-700 z-30 shadow-lg animate-float-delayed">
                FastAPI
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 glass-card px-3 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-mono border border-zinc-700 z-30 shadow-lg animate-float">
                AI/ML
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-6">About Me</motion.h2>
            <motion.div variants={fadeIn} className="prose prose-invert prose-zinc text-zinc-400 text-lg leading-relaxed">
              <p>
                I build high-performance AI architectures and scalable backend systems. My core focus is engineering production-grade APIs, optimizing machine learning workflows, and designing robust data pipelines.
              </p>
              <p>
                I bridge the gap between theoretical AI models and real-world deployment, ensuring systems are not just intelligent, but resilient, fast, and scalable.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-10">Experience</motion.h2>
            
            <motion.div variants={fadeIn} className="relative pl-6 md:pl-8 border-l border-zinc-800 space-y-12">
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[41px] top-1 h-4 w-4 md:h-5 md:w-5 rounded-full border-4 border-black bg-zinc-300" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100">Product & Applied Research Intern</h3>
                  <span className="text-sm font-mono text-zinc-500 mt-1 md:mt-0">Winnovation</span>
                </div>
                <ul className="mt-4 space-y-3 text-zinc-400 list-disc list-outside ml-4 marker:text-zinc-700">
                  <li>Engineered data preprocessing and validation pipelines utilizing Python and Pandas.</li>
                  <li>Architected and developed scalable Flask backend services and REST API integrations.</li>
                  <li>Designed and executed AI experimentation workflows to optimize model performance.</li>
                  <li>Collaborated closely with cross-functional teams adopting a product-centric development lifecycle.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold tracking-tight mb-8 md:mb-10">Featured Projects</motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div variants={fadeIn} className="group h-full relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-blue-500/20 group-hover:to-zinc-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <Card className="relative h-full flex flex-col bg-black border-zinc-800/60 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
                  <div className="aspect-video w-full overflow-hidden bg-zinc-900 relative border-b border-zinc-800">
                    <Image src="/smart-crm.png" alt="Smart Civic Service CRM" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-emerald-400 transition-colors">Smart Civic Service CRM</CardTitle>
                    <CardDescription className="mt-2">
                      A scalable multi-role civic complaint management platform featuring SLA-based workflows, real-time tracking, communication systems, and analytics dashboards.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">FastAPI</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">REST APIs</Badge>
                      <Badge variant="secondary">Analytics</Badge>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1 list-disc ml-4 marker:text-zinc-700">
                      <li>Real-time complaint tracking</li>
                      <li>Admin analytics dashboard</li>
                      <li>SLA workflow management</li>
                      <li>Citizen-official communication</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="grid grid-cols-2 gap-3 pt-0">
                    <Button variant="secondary" size="sm" asChild className="w-full">
                      <Link href="https://github.com/o-m4/smart_crm" target="_blank">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="border-zinc-700 w-full" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" /> Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={fadeIn} className="group h-full relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-blue-500/20 group-hover:to-zinc-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <Card className="relative h-full flex flex-col bg-black border-zinc-800/60 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
                  <div className="aspect-video w-full overflow-hidden bg-zinc-900 relative border-b border-zinc-800">
                    <Image src="/Sentient.png" alt="Sentient AI" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-emerald-400 transition-colors">Sentient — AI AML Detection</CardTitle>
                    <CardDescription className="mt-2">
                      AI-powered AML and compliance detection platform analyzing over 200,000 financial transactions using anomaly detection and Gemini-generated insights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Flask</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Gemini API</Badge>
                      <Badge variant="secondary">Scikit-learn</Badge>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1 list-disc ml-4 marker:text-zinc-700">
                      <li>AML anomaly detection</li>
                      <li>Conversational schema analysis</li>
                      <li>Precision/Recall/F1 evaluation</li>
                      <li>Compliance analytics dashboard</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="grid grid-cols-2 gap-3 pt-0">
                    <Button variant="secondary" size="sm" asChild className="w-full">
                      <Link href="https://github.com/o-m4/Sentient-Ai_Project_21-02-2026" target="_blank">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="border-zinc-700 w-full" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" /> Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold tracking-tight mb-8 md:mb-10">Technical Arsenal</motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Languages", icon: <Code className="w-5 h-5 text-zinc-400 mb-3" />, skills: ["Python", "Java", "C"] },
                { title: "Backend", icon: <Server className="w-5 h-5 text-zinc-400 mb-3" />, skills: ["Flask", "FastAPI", "REST APIs"] },
                { title: "ML & Data", icon: <Brain className="w-5 h-5 text-zinc-400 mb-3" />, skills: ["Pandas", "NumPy", "Scikit-learn"] },
                { title: "Tools", icon: <Terminal className="w-5 h-5 text-zinc-400 mb-3" />, skills: ["Git", "GitHub", "VS Code"] }
              ].map((category, idx) => (
                <motion.div key={idx} variants={fadeIn} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500/0 to-zinc-500/0 group-hover:from-zinc-500/10 group-hover:to-zinc-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <Card className="relative bg-zinc-900/40 border-zinc-800/50 group-hover:border-zinc-700/80 transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      {category.icon}
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        {category.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mr-2" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="scroll-mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold tracking-tight mb-8 md:mb-10">Achievements</motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "India Innovates 2026", desc: "Top 5,000 among 25,000+ participants nationwide." },
                { title: "GDG Cloud New Delhi HackFest 2.0", desc: "Round 4 Finalist demonstrating advanced cloud & backend solutions." },
                { title: "AMD AI Hackathon IIT Delhi", desc: "Participant exploring high-performance AI inference." }
              ].map((achievement, idx) => (
                <motion.div key={idx} variants={fadeIn} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500/0 to-zinc-500/0 group-hover:from-zinc-500/10 group-hover:to-zinc-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <Card className="relative bg-zinc-900/40 border-zinc-800/50 group-hover:border-zinc-700/80 transition-all duration-300 h-full group-hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-base text-zinc-200">{achievement.title}</CardTitle>
                      <CardDescription className="text-sm mt-2">{achievement.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-4">Let&apos;s Build Something</motion.h2>
            <motion.p variants={fadeIn} className="text-zinc-400 mb-10">
              Currently open for internships, collaborative projects, and engineering roles.
            </motion.p>

            <motion.div variants={fadeIn} className="grid sm:grid-cols-2 gap-4 text-left mb-12">
              <a href="mailto:omyadavjgp@gmail.com" className="flex items-center p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors">
                <Mail className="w-5 h-5 text-zinc-400 mr-4" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-zinc-500">omyadavjgp@gmail.com</div>
                </div>
              </a>
              <a href="tel:+917232949072" className="flex items-center p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors">
                <FileText className="w-5 h-5 text-zinc-400 mr-4" />
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-xs text-zinc-500">+91 7232949072</div>
                </div>
              </a>
            </motion.div>

            <motion.form variants={fadeIn} className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                  <Input id="name" placeholder="Alan Turing" className="bg-zinc-900/40 border-zinc-800 focus-visible:ring-emerald-500/20 focus-visible:border-emerald-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                  <Input id="email" type="email" placeholder="alan@enigma.com" className="bg-zinc-900/40 border-zinc-800 focus-visible:ring-emerald-500/20 focus-visible:border-emerald-500/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <Textarea id="message" placeholder="How can I help you?" className="min-h-[120px] bg-zinc-900/40 border-zinc-800 focus-visible:ring-emerald-500/20 focus-visible:border-emerald-500/50 transition-all" />
              </div>
              <Button type="submit" className="w-full h-12 bg-zinc-100 hover:bg-white text-zinc-900 font-medium">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-10 text-center text-sm text-zinc-600 relative z-10 flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-px bg-zinc-800" />
        <p>Engineered by <span className="text-zinc-300 font-medium">Om Yadav</span></p>
      </footer>
    </div>
  );
}
