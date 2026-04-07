import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import farhanImg from "@/assets/farhan-rayyan.jpg";
import abuYousobImg from "@/assets/abu-yousob.jpg";
import tarifulNafeesImg from "@/assets/tariful-nafees.png";
import marefulFounderImg from "@/assets/mareful-kirof-founder.jpg";
import StatCounter from "@/components/StatCounter";
import BackgroundPaths from "@/components/BackgroundPaths";
import ProfileCard from "@/components/ProfileCard";
import SEOHead from "@/components/SEOHead";

const FadeIn = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const team = [
  { name: "FarHan Rayyan", role: "Director & COO", handle: "farhanrayyan", bio: "FarHan keeps everything running smoothly at MrKirof. He's the one making sure projects stay on track, teams are aligned, and clients are happy. He joined early on and helped grow the team from just 5 people to 20 — without ever dropping the ball. He genuinely cares about the people he works with, and it shows in how he leads.", image: farhanImg, gradient: "linear-gradient(145deg, #0f172a8c 0%, #3B82F644 100%)", glowColor: "rgba(59, 130, 246, 0.6)", avatarBottom: "30px" },
  { name: "Abu Yousob", role: "Creative Director", handle: "abuyousob", bio: "Abu is the creative heart of MrKirof. He's been designing for over 10 years and has a real gift for turning ideas into visuals that actually mean something. Whether it's a full brand identity or a simple social post, he treats every project like it matters — because to him, it does. He's not about making things pretty for the sake of it. He wants the work to connect with people.", image: abuYousobImg, gradient: "linear-gradient(145deg, #4c1d958c 0%, #a855f744 100%)", glowColor: "rgba(168, 85, 247, 0.5)" },
  { name: "Tariful Nafees", role: "Project Manager & Client Relations", handle: "tarifulnafees", bio: "Tariful is the person clients talk to the most, and for good reason. He listens well, communicates clearly, and always follows through. He's managed hundreds of projects and built real relationships with clients from all over the world. People trust him because he's honest and reliable. If something needs to get done, Tariful makes sure it happens.", image: tarifulNafeesImg, gradient: "linear-gradient(145deg, #0c4a6e8c 0%, #0ea5e944 100%)", glowColor: "rgba(14, 165, 233, 0.5)" },
];


const timeline = [
  { year: "2013", title: "Founded", desc: "Mareful Kirof launches Kirof as a solo brand design studio." },
  { year: "2015", title: "First 50 Clients", desc: "Expanded to web development. Hired the first 3 team members." },
  { year: "2018", title: "18 Services", desc: "Full-service offering complete — from brand to AI automation. Team of 12." },
  { year: "2020", title: "Fully Remote", desc: "Transitioned to remote-first. Hired across 3 continents." },
  { year: "2023", title: "3000+ Projects", desc: "Milestone: 3000 projects delivered with zero missed deadlines." },
  { year: "2025", title: "The Future", desc: "Expanding into AI-powered design systems and product strategy." },
];

const awards = [
  { award: "Awwwards Honorable Mention", project: "Starkline Platform", year: "2024" },
  { award: "Dribbble Top Agency", project: "Brand Identity Collection", year: "2024" },
  { award: "CSS Design Awards", project: "Blumora App UI", year: "2023" },
  { award: "FWA Site of the Day", project: "Pivvo Product Launch", year: "2023" },
  { award: "Webby Nominee", project: "Noxian Financial Platform", year: "2022" },
];

const About = () => {
  return (
    <PageTransition>
      <SEOHead
        title="About Us - Our Team, Story & Values"
        description="Meet the 20-person remote team behind MrKirof. 12 years of experience, 1500+ clients across 14 countries, and 3000+ projects delivered with zero missed deadlines."
        path="/about"
      />
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <BackgroundPaths />
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-border" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">About Us</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[0.9] tracking-tight mb-8">
                  We craft brands<br />
                  that{" "}
                  <span className="text-gradient">endure</span>
                </h1>
                <p className="text-muted-foreground font-body text-base leading-relaxed max-w-xl">
                  A remote-first creative and financial agency built on craft, precision, and partnership. 12 years. 1500+ clients. No shortcuts.
                </p>
              </motion.div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-accent">20</span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Team Members</p>
                  </div>
                  <div>
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-foreground">3</span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Continents</p>
                  </div>
                  <div>
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-foreground">14+</span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Countries Served</p>
                  </div>
                  <div>
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-foreground">0</span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Missed Deadlines</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Spotlight ── */}
      <FadeIn>
        <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, hsl(var(--accent) / 0.08), transparent 60%)' }} />
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Images */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* Main image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 overflow-hidden rounded-lg"
                  >
                    <img
                      src={marefulFounderImg}
                      alt="Mareful Kirof, Founder & CEO of MrKirof creative agency"
                      loading="lazy"
                      className="w-full aspect-[4/5] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                  {/* Decorative accent line */}
                  <div className="absolute -left-4 top-8 w-1 h-24 bg-accent/40 rounded-full" />
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-7 pt-8 lg:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Meet the Founder</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[0.9] tracking-tight mb-4">
                    Mareful <span className="text-gradient">Kirof</span>
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent/70 mb-6">Founder & CEO</p>
                  <div className="text-white/60 font-body text-base leading-relaxed space-y-4 mb-8 max-w-xl">
                    <p>
                      In 2013, Mareful Kirof walked away from a comfortable career to follow a simple goal. Building brands that don't just exist, but <span className="text-white font-semibold">get noticed</span>. What started as a one-man studio in a tiny apartment became <span className="text-white font-semibold">MrKirof</span>, a full-service creative agency.
                    </p>
                    <p>
                      His philosophy is pretty straightforward: if it doesn't make the client's say wow, it doesn't ship. That high standard has attracted <span className="text-white font-semibold">1,500+ clients across 14 countries</span>, built a remote team of 20 specialists spanning 18 disciplines, and delivered <span className="text-white font-semibold">3,000+ projects</span> without missing a single deadline.
                    </p>
                    <p>
                      Mareful doesn't just run MrKirof. He pays close attention to every detail, every pixel, every word. Average was never good enough.
                    </p>
                  </div>
                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    {[
                      { value: "12+", label: "Years Leading" },
                      { value: "1500+", label: "Clients Served" },
                      { value: "0", label: "Deadlines Missed" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <span className="font-display text-2xl font-extrabold text-accent">{s.value}</span>
                        <p className="font-mono text-xs uppercase tracking-wider text-white/30 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="magnetic-btn border border-white/20 text-white font-display text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 hover:border-accent hover:text-accent transition-all duration-500 group"
                    data-cursor-hover
                  >
                    Work with Mareful
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Team ── */}
      <FadeIn>
        <section className="surface py-16 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--accent) / 0.06), transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Team</span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[0.9]">
                  The minds behind<br />the <span className="text-gradient">magic</span>
                </h2>
              </div>
              <p className="text-muted-foreground font-body text-base max-w-sm leading-relaxed">
                A carefully assembled team of specialists who care deeply about their craft and your success.
              </p>
            </div>
            <div className="space-y-20 md:space-y-28">
              {team.map((member, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                  >
                    <div className={`lg:col-span-5 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative group" data-cursor-hover>
                        <div
                          className="relative w-full max-w-[340px] mx-auto aspect-[3/4] overflow-hidden rounded-2xl"
                          style={{ background: member.gradient }}
                        >
                          <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-700" style={{ background: member.gradient }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -inset-4 -z-10 rounded-3xl opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-700" style={{ background: member.glowColor }} />
                      </div>
                    </div>
                    <div className={`lg:col-span-7 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-[0.9] mb-2">{member.name}</h3>
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent/70 mb-5">{member.role}</p>
                      <p className="text-muted-foreground font-body text-base leading-relaxed max-w-lg mb-6">{member.bio}</p>
                      <span className="inline-block font-mono text-xs text-muted-foreground/40">@{member.handle}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ── Timeline ── */}
      <FadeIn>
        <section className="surface py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
            <div className="mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Journey</span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[0.9]">
                How we got <span className="text-gradient">here</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative flex items-start gap-8 py-8 ${i % 2 === 0 ? "md:flex-row md:text-right" : "md:flex-row-reverse md:text-left"}`}
                  >
                    <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "pr-12" : "pl-12"}`}>
                      <div>
                        <h3 className="font-display text-base font-bold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 border border-accent/40 bg-background flex items-center justify-center z-10">
                      <span className="font-mono text-xs text-accent">{item.year.slice(2)}</span>
                    </div>
                    <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                      <span className="font-mono text-xs text-accent">{item.year}</span>
                      <div className="md:hidden mt-1">
                        <h3 className="font-display text-base font-bold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Awards ── */}
      <FadeIn>
        <section className="surface py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Recognition</span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[0.9]">
                  Awards &<br /><span className="text-gradient">features</span>
                </h2>
              </div>
            </div>
            <div className="space-y-0 divide-y divide-border/50">
              {awards.map((a, i) => (
                <motion.div
                  key={a.award}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-center justify-between py-6 md:py-8 hover:px-4 transition-all duration-500"
                  data-cursor-hover
                >
                  <div className="flex items-center gap-5">
                    <Trophy size={16} className="text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-base font-bold group-hover:text-accent transition-colors">{a.award}</h3>
                      <p className="text-muted-foreground font-body text-base mt-0.5">{a.project}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/50">{a.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── CTA ── */}
      <FadeIn>
        <section className="surface py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] bg-accent/[0.03] origin-center" style={{ transform: 'rotate(-12deg)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, hsl(var(--accent) / 0.06), transparent 70%)' }} />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10 px-6 md:px-8 lg:px-16">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent mb-10">
              <span className="w-8 h-px bg-accent" />
              Join 1500+ Happy Clients
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-[0.85] tracking-tight mb-6">
              Ready to work with<br />a team that <span className="text-gradient">cares</span>?
            </h2>
            <p className="text-muted-foreground font-body text-base mb-14 max-w-md mx-auto leading-relaxed">
              Let's talk about your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="magnetic-btn bg-accent text-accent-foreground font-display font-extrabold px-7 py-3 rounded-full inline-flex items-center gap-3 text-base hover:shadow-[0_0_60px_hsl(var(--accent)/0.3)] transition-all duration-500 group"
                data-cursor-hover
              >
                Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/work"
                className="magnetic-btn border border-foreground/20 text-foreground font-display font-bold px-7 py-3 rounded-full inline-flex items-center gap-3 text-base hover:border-accent hover:text-accent transition-all duration-500 group"
                data-cursor-hover
              >
                See Our Work <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  );
};

export default About;
