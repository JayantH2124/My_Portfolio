import {
  ArrowUpRight,
  Braces,
  CalendarCheck,
  Code2,
  Download,
  Eye,
  FileCode2,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Palette,
  Phone,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import portraitUrl from "./assets/jayanth-smile-natural-transparent.png";
import leetcodeOne from "./assets/leetcode1.jpeg";
import leetcodeTwo from "./assets/leetcode2.jpeg";
import leetcodeThree from "./assets/leetcode3.jpeg";
import saraOne from "./assets/sara1.jpeg";
import saraTwo from "./assets/sara2.jpeg";
import saraThree from "./assets/sara3.jpeg";
import tripPlannerOne from "./assets/tripplanner1.jpeg";
import tripPlannerTwo from "./assets/tripplanner2.jpeg";
import tripPlannerThree from "./assets/tripplanner3.jpeg";

const MotionDiv = motion.create("div");
const MotionSection = motion.create("section");
const MotionSpan = motion.create("span");

const profile = {
  name: "T Jayanth",
  title: "Python Developer",
  email: "thirlingijayanth@gmail.com",
  phone: "+91 9704391065",
  github: "https://github.com/JayantH2124",
  linkedin: "https://linkedin.com/in/t-jayanth-989183290/",
  leetcode: "https://leetcode.com/u/ThirlingijAyAnTh/",
};

const decorImages = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className:
      "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

const services = [
  {
    number: "01",
    name: "Python Development",
    icon: Terminal,
    skills: ["Python", "Automation", "Logic"],
    description:
      "Building practical application logic, automation-ready features, and clean problem-solving flows with Python.",
  },
  {
    number: "02",
    name: "HTML and CSS",
    icon: FileCode2,
    skills: ["HTML", "CSS", "Responsive UI"],
    description:
      "Creating clean, responsive web pages with semantic HTML, modern CSS layouts, and mobile-friendly styling.",
  },
  {
    number: "03",
    name: "UI Web Design",
    icon: Palette,
    skills: ["Layout", "Typography", "UX"],
    description:
      "Designing clean, mobile-friendly interfaces with strong layout, typography, and user experience fundamentals.",
  },
  {
    number: "04",
    name: "Java Coding",
    icon: Braces,
    skills: ["Java", "DSA", "Problem Solving"],
    description:
      "Solving programming challenges with a steady focus on fundamentals, data flow, and readable implementation.",
  },
  {
    number: "05",
    name: "Git Collaboration",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Workflow"],
    description:
      "Organizing repositories, project structure, and feature work using GitHub for a professional workflow.",
  },
];

const resumeHighlights = [
  {
    label: "Education",
    title: "B.Tech CSE AI",
    description:
      "Currently pursuing Computer Science Engineering with Artificial Intelligence at Parul University.",
  },
  {
    label: "Core Skills",
    title: "Python, Java, HTML, CSS",
    description:
      "Strong foundation in programming, responsive layouts, clean UI structure, and problem-solving basics.",
  },
  {
    label: "Development",
    title: "MERN Stack Projects",
    description:
      "Building full stack web applications with modern frontend pages, backend integration, and GitHub workflow.",
  },
  {
    label: "Practice",
    title: "LeetCode and GitHub",
    description:
      "Improving coding logic through regular practice, project work, and consistent repository organization.",
  },
];

const projects = [
  {
    number: "01",
    name: "TripPlanner",
    category: "Full Stack",
    link: "https://github.com/JayantH2124/Travel-Loop",
    github: "https://github.com/JayantH2124/Travel-Loop",
    status: "Completed",
    year: "2026",
    tech: ["React", "Node", "MongoDB", "CSS"],
    description:
      "Full stack trip planner focused on destination management, responsive UI, and smoother travel organization.",
    images: [tripPlannerOne, tripPlannerTwo, tripPlannerThree],
  },
  {
    number: "02",
    name: "SARA Application",
    category: "Python / Web",
    link: profile.github,
    github: profile.github,
    status: "In Progress",
    year: "2026",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    description:
      "Personal application project built to strengthen frontend structure, feature integration, and full stack workflow.",
    images: [saraOne, saraTwo, saraThree],
  },
  {
    number: "03",
    name: "Coding Profiles",
    category: "Practice",
    link: profile.leetcode,
    github: profile.github,
    status: "Active",
    year: "2026",
    tech: ["LeetCode", "Java", "Python", "DSA"],
    description:
      "Ongoing problem-solving practice across LeetCode and GitHub to keep sharpening software development skills.",
    images: [leetcodeOne, leetcodeTwo, leetcodeThree],
  },
];

type FadeInProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function FadeIn<T extends ElementType = "div">({
  as,
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  ...rest
}: FadeInProps<T>) {
  const Component = useMemo(() => motion.create((as ?? "div") as ElementType), [as]);

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

type MagnetProps = {
  children: ReactNode;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

function Magnet({
  children,
  strength = 34,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = ((event.clientX - centerX) / centerX) * strength;
      const moveY = ((event.clientY - centerY) / centerY) * strength;
      setTransition(activeTransition);
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0)`);
    };

    const handleMouseLeave = () => {
      setTransition(inactiveTransition);
      setTransform("translate3d(0, 0, 0)");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeTransition, inactiveTransition, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}

function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white transition duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      }}
    >
      <Mail className="h-4 w-4" />
      Contact Me
    </a>
  );
}

function ResumeButton({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <a
      href={`${import.meta.env.BASE_URL}resume.pdf`}
      download
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-medium uppercase tracking-widest transition duration-200 hover:scale-[1.03] sm:px-8 sm:py-3.5 sm:text-sm ${
        light
          ? "border-[#0C0C0C]/30 text-[#0C0C0C] hover:bg-[#0C0C0C]/5"
          : "border-[#D7E2EA]/40 text-[#D7E2EA] hover:bg-[#D7E2EA]/10"
      }`}
    >
      <Download className="h-4 w-4" />
      Resume
    </a>
  );
}

function ViewResumeButton({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <a
      href={`${import.meta.env.BASE_URL}resume.pdf`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs font-medium uppercase tracking-widest transition duration-200 hover:scale-[1.03] sm:px-8 sm:py-3.5 sm:text-sm ${
        light
          ? "border-[#0C0C0C]/30 text-[#0C0C0C] hover:bg-[#0C0C0C]/5"
          : "border-[#D7E2EA]/40 text-[#D7E2EA] hover:bg-[#D7E2EA]/10"
      }`}
    >
      <Eye className="h-4 w-4" />
      View Resume
    </a>
  );
}

function ProjectActionButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-7 sm:py-3.5 sm:text-sm"
    >
      {label}
      {icon}
    </a>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[760px] flex-col overflow-x-clip bg-[#0C0C0C] sm:min-h-screen">
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 flex justify-between px-4 pt-5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:px-6 sm:text-sm md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Skills" ? "#services" : `#${item.toLowerCase()}`}
            className="transition duration-200 hover:opacity-70"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-20 mt-8 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading w-full whitespace-nowrap text-[17vw] font-black uppercase leading-none tracking-tight sm:text-[14vw] md:text-[14.5vw] lg:text-[15.2vw]">
          Hi, i&apos;m jayanth
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 top-[48%] z-10 w-[310px] -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:w-[390px] md:w-[470px] lg:w-[560px]">
        <Magnet strength={52} className="relative">
          <img
            src={portraitUrl}
            alt="Smiling 3D creator portrait"
            className="w-full select-none object-contain"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-30 mt-auto flex flex-col items-start gap-5 px-5 pb-7 sm:flex-row sm:items-end sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          a python developer driven by building useful full stack applications
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-wrap gap-3">
            <ResumeButton />
            <ViewResumeButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ResumeSnapshotSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <FadeIn y={35} className="lg:sticky lg:top-20">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#BBCCD7]">
            <Code2 className="h-4 w-4" />
            Resume Snapshot
          </p>
          <h2 className="hero-heading text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none">
            What I Bring
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#D7E2EA]/70 sm:text-lg">
            A quick view of my education, technical skills, project work, and coding practice from my resume.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {resumeHighlights.map((item, index) => (
            <FadeIn
              key={item.label}
              delay={index * 0.08}
              y={30}
              className="min-h-[230px] rounded-[28px] border border-[#D7E2EA]/20 bg-white/[0.04] p-6 sm:p-7"
            >
              <p className="mb-5 text-xs font-medium uppercase tracking-widest text-[#BBCCD7]">
                {item.label}
              </p>
              <h3 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:text-base">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p
      ref={ref}
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {text.split("").map((char, index) => {
        const start = index / text.length;
        const end = Math.min(start + 0.12, 1);
        return (
          <AnimatedCharacter
            key={`${char}-${index}`}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

function AnimatedCharacter({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <MotionSpan style={{ opacity }} className="absolute inset-0">
        {char === " " ? "\u00A0" : char}
      </MotionSpan>
    </span>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      {decorImages.map((image) => (
        <FadeIn
          key={image.src}
          delay={image.delay}
          duration={0.9}
          x={image.x}
          y={0}
          className={`pointer-events-none absolute opacity-80 ${image.className}`}
        >
          <img src={image.src} alt="" loading="lazy" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40} className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          About me
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text="Motivated Computer Science Engineering student specializing in Artificial Intelligence, with a strong interest in software development, problem solving, Python, Java, and MERN stack technologies. I enjoy building real-world applications and improving every project with cleaner code and better user experience." />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn as="h2" className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
        Skills
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="flex gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:gap-12 md:py-12"
          >
            <span className="min-w-[88px] text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C] sm:min-w-[140px]">
              {service.number}
            </span>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0C0C0C] text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">
                  {service.name}
                </h3>
              </div>
              <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#0C0C0C]/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#0C0C0C]/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn as="h2" className="hero-heading mb-14 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20">
        Project
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const rawScale = useTransform(scrollYProgress, [0, 0.75], [1, targetScale]);
  const scale = useSpring(rawScale, { stiffness: 160, damping: 28 });

  return (
    <div ref={ref} className="h-[85vh] min-h-[760px]">
      <MotionDiv
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
        className="sticky rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8"
      >
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-x-8">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {project.number}
            </span>
            <div className="pb-2">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#BBCCD7] sm:text-base">
                <Sparkles className="h-4 w-4" />
                {project.category}
              </p>
              <h3 className="text-[clamp(2rem,5vw,5rem)] font-black uppercase leading-[0.95] tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:text-base">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-[#D7E2EA]/75">
                  <CalendarCheck className="h-3 w-3" />
                  {project.year}
                </span>
                <span className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-[#D7E2EA]/75">
                  {project.status}
                </span>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-[#D7E2EA]/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ProjectActionButton
              href={project.link}
              label="Live Project"
              icon={<ArrowUpRight className="h-4 w-4" />}
            />
            <ProjectActionButton
              href={project.github}
              label="GitHub"
              icon={<Github className="h-4 w-4" />}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[40%_1fr]">
          <div className="grid gap-4">
            <ProjectImage src={project.images[0]} className="h-[clamp(130px,16vw,230px)]" />
            <ProjectImage src={project.images[1]} className="h-[clamp(160px,22vw,340px)]" />
          </div>
          <ProjectImage src={project.images[2]} className="h-[420px] md:h-full" />
        </div>
      </MotionDiv>
    </div>
  );
}

function ProjectImage({ src, className }: { src: string; className: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className={`w-full rounded-[40px] bg-[#0C0C0C] object-contain sm:rounded-[50px] md:rounded-[60px] ${className}`}
    />
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 pb-16 pt-4 sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-[#D7E2EA]/20 pt-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#BBCCD7]">
            <Code2 className="h-4 w-4" />
            Currently pursuing B.Tech CSE AI at Parul University
          </p>
          <h2 className="hero-heading text-[clamp(2.8rem,8vw,7rem)] font-black uppercase leading-none">
            Let&apos;s build
          </h2>
          <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/70 sm:text-lg">
            Available for internships, freelance projects, and frontend/full stack roles.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-light text-[#D7E2EA]/75 sm:text-base">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 transition hover:text-[#D7E2EA]">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 transition hover:text-[#D7E2EA]">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-[#D7E2EA]/40 p-4 transition hover:bg-[#D7E2EA]/10" aria-label="GitHub">
            <Github />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-[#D7E2EA]/40 p-4 transition hover:bg-[#D7E2EA]/10" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <ResumeButton />
          <ViewResumeButton />
          <ContactButton />
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-[#D7E2EA]/10 pt-6 text-sm text-[#D7E2EA]/45">
        © 2026 T Jayanth.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <main className="main-wrapper">
      <HeroSection />
      <ResumeSnapshotSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
