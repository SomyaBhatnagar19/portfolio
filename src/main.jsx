import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Cpu, BriefcaseBusiness, GraduationCap, Download,
  MapPin, Sparkles
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Somya Bhatnagar",
  role: "Senior Software Engineer",
  location: "Bengaluru",
  email: "bhatnagarsomya19@gmail.com", 
  github: "https://github.com/SomyaBhatnagar19",
  linkedin: "https://www.linkedin.com/in/somya-bhatnagar-56531a341/", 
  resume: "/assets/resume.pdf", 
};

const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "HTML5", "CSS3"] },
  { group: "Frameworks & runtime", items: ["Django", "React", "Node.js"] },
  { group: "Focus areas", items: ["Backend development", "REST APIs", "Responsive UI", "AI & automation"] },
  { group: "Currently exploring", items: ["Generative AI", "Agentic AI", "LLM applications", "Workflow automation"] },
];

const projects = [
  {
    number: "01",
    title: "Django REST API",
    type: "BACKEND DEVELOPMENT",
    description: "A backend application demonstrating API design, structured endpoints, data handling and authentication patterns.",
    stack: ["Python", "Django", "REST API"],
    github: "https://github.com/SomyaBhatnagar19", 
    demo: "",
  },
  {
    number: "02",
    title: "Responsive Web Application",
    type: "FULL-STACK DEVELOPMENT",
    description: "A responsive web experience focused on clean UI, reusable components and a smooth experience across screen sizes.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername",
    demo: "",
  },
  {
    number: "03",
    title: "AI Assistant / Automation",
    type: "AI ENGINEERING · EXPLORATION",
    description: "An evolving project exploring LLM-powered assistance, practical automation and intelligent application workflows.",
    stack: ["Python", "LLMs", "Automation"],
    github: "https://github.com/yourusername",
    demo: "",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const nav = [
    ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"],
    ["Projects", "#projects"], ["Contact", "#contact"]
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">S.</span><span>SOMYA BHATNAGAR</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR THE NEXT CHALLENGE</div>
            <h1>Engineering ideas<br/><span>into powerful</span><br/><em>digital solutions.</em></h1>
            <p className="hero-intro">
              Hi, I'm <strong>{profile.name}</strong>, a {profile.role.toLowerCase()} 
               building scalable, reliable and user-focused digital solutions. 
              I specialize in Python, Django, React.js and JavaScript, combining 
              strong backend engineering with modern frontend development. 
              I enjoy turning complex challenges into practical solutions and 
              exploring Generative AI, Agentic AI, LLM-powered applications and 
              intelligent workflow automation to build what's next.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={16} />
                View Resume
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14}/> {profile.location}</span>
              <span className="meta-divider"/>
              <span>PYTHON · DJANGO · JAVASCRIPT</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative software engineering illustration">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="art-grid"/>
            <div className="code-card">
              <div className="code-card-top"><span/><span/><span/><small>developer.py</small></div>
              <div className="code-lines">
                <p><i>01</i> <b>class</b> Engineer:</p>
                <p><i>02</i> &nbsp; skills = [</p>
                <p><i>03</i> &nbsp;&nbsp; <strong>"Python"</strong>,</p>
                <p><i>04</i> &nbsp;&nbsp; <strong>"Django"</strong>,</p>
                <p><i>05</i> &nbsp;&nbsp; <strong>"JavaScript"</strong></p>
                <p><i>06</i> &nbsp; ]</p>
                <p><i>07</i> &nbsp; <b>build</b>(<strong>"what's next"</strong>)</p>
                <p><i>08</i> <span className="cursor">▍</span></p>
              </div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15}/> CLEAN CODE</div>
            <div className="floating-chip chip-bottom"><Sparkles size={15}/> CURIOUS BY DESIGN</div>
            <div className="art-caption">FIG. 01 — IDEAS INTO INTERFACES</div>
          </div>
          <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE <ArrowDownRight size={15}/></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">A LITTLE ABOUT MY APPROACH</span>
            <p>Curiosity first. <span>Clarity always.</span> Build, learn, improve — repeat.</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Engineering mindset.<br/><span>Human perspective.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">I enjoy turning complex problems into simple, usable digital experiences.</p>
              <p>I’m passionate about building technology that solves real problems and creates meaningful impact. With an engineering mindset and experience across full-stack development, I combine technical thinking, creativity and problem-solving to turn complex challenges into elegant solutions. Always exploring better ways to build, innovate and make technology work smarter — especially through AI and automation.</p>
            </div>
            <div className="about-facts">
              <div className="fact">
                <span>01</span>
                <div>
                  <b>Own the entire solution</b>
                  <p>Turning business requirements into reliable, end-to-end software solutions.</p>
                </div>
              </div>

              <div className="fact">
                <span>02</span>
                <div>
                  <b>Engineer for scale & reliability</b>
                  <p>Building maintainable applications with clean architecture and performance in mind.</p>
                </div>
              </div>

              <div className="fact">
                <span>03</span>
                <div>
                  <b>Lead with problem-solving</b>
                  <p>Making thoughtful technical decisions, solving complex challenges and delivering results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-heading">
              <span className="section-index">02 / EXPERIENCE</span>
              <h2>Where I've<br/><span>made an impact.</span></h2>
            </div>
            <div className="timeline">
              <div className="timeline-marker"><BriefcaseBusiness size={18}/></div>
              <div className="timeline-content">
                <div className="timeline-top"><span className="section-index">SOFTWARE ENGINEERING</span><span className="timeline-date">PROFESSIONAL EXPERIENCE</span></div>
                <h3>Software Engineer</h3>
                <h4>Roboprenr Advanced Learning LLP</h4>
                <p>Worked on web application development and software solutions using JavaScript, HTML, CSS, Python and Django. Contributed across development tasks and collaborated on building practical technology experiences.</p>
                <div className="tag-list"><span>JavaScript</span><span>Python</span><span>Django</span><span>HTML</span><span>CSS</span></div>
                <p className="timeline-note">Add your exact employment dates, product details and measurable achievements here.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <span className="section-index">03 / TOOLKIT</span>
            <h2>Tools of the<br/><span>trade.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.group}>
                <div className="skill-card-top"><span>0{index + 1}</span>{index === 0 ? <Code2/> : index === 1 ? <Layers3/> : index === 2 ? <BriefcaseBusiness/> : <Cpu/>}</div>
                <h3>{skill.group}</h3>
                <div className="tag-list">{skill.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-wrap">
            <div className="projects-heading">
              <div className="section-heading"><span className="section-index">04 / SELECTED WORK</span><h2>Things I've<br/><span>been building.</span></h2></div>
              <p>A selection of projects and explorations. Replace these starter entries with your real work, screenshots and repository links.</p>
            </div>
            <div className="project-list">
              {projects.map(project => (
                <article className="project-row" key={project.number}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-main"><span className="section-index">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.title}`}><Github size={19}/></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`}><ArrowUpRight size={19}/></a>}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap education-section" id="education">
          <div className="section-heading">
            <span className="section-index">05 / EDUCATION</span>
            <h2>Strong foundations.<br/><span>Always evolving.</span></h2>
          </div>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={25}/></div>
            <div><span className="section-index">2016 — 2020</span><h3>B.Tech in Aerospace Engineering</h3><p>9.1 CGPA · First Class with Distinction</p></div>
            <span className="education-side">ENGINEERING</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-index">06 / GET IN TOUCH</span>
            <h2>Have a good<br/>problem to <em>solve?</em></h2>
            <p>I'm always interested in meaningful challenges, collaborative teams and opportunities to build useful things.</p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>SOMYA BHATNAGAR</span></a><span>DESIGNED & BUILT WITH CARE · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);