import Head from "next/head";
import data from "../content/portfolio.json";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{data.name} — Multi-disciplinary Creative</title>
        <meta name="description" content={data.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#hero" className={styles.navLogo}>&lt;rooney/&gt;</a>
        <ul className={styles.navLinks}>
          {["about","education","skills","experience","projects","contact"].map(l => (
            <li key={l}><a href={`#${l}`}>./{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className={styles.navHire}>hire_me()</a>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>[≡]</button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {["about","education","skills","experience","projects","contact"].map(l => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)}>./{l}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.mobileHire}>hire_me()</a>
        </div>
      )}

      <main>
        <section id="hero" className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.profileWrap}>
              <img src="/photo.jpg" alt={data.name} className={styles.profileImg}
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
              <div className={styles.profilePlaceholder} style={{display:'none'}}>👤</div>
            </div>
            <p className={styles.cmd}>$ whoami</p>
            <h1 className={styles.heroName}>{data.name}<span className={styles.cursor}></span></h1>
            <p className={styles.cmd}>$ roles --list</p>
            <div className={styles.rolesWrap}>
              {data.roles.map((r, i) => <span key={i} className={styles.rolePill}>{r}</span>)}
            </div>
            <p className={styles.heroBio}>{data.tagline}</p>
            <div className={styles.heroBtns}>
              <a href="#projects" className={styles.btnPrimary}>View My Work</a>
              <a href="#contact" className={styles.btnOutline}>Hire Me</a>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <p className={styles.sectionNum}>01. /about</p>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.sectionLine}></div>
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.dot} ${styles.dotR}`}></span>
              <span className={`${styles.dot} ${styles.dotY}`}></span>
              <span className={`${styles.dot} ${styles.dotG}`}></span>
              <span className={styles.terminalTitle}>~/about-rooney.sh</span>
            </div>
            <div className={styles.terminalBody}>
              {[
                { icon: "📍", label: "location", value: data.location },
                { icon: "📅", label: "years_active", value: "2024 – Present" },
              ].map((row, i) => (
                <div key={i} className={styles.aboutRow}>
                  <span className={styles.aboutIcon}>{row.icon}</span>
                  <div>
                    <div className={styles.aboutLabel}>{row.label}</div>
                    <div className={styles.aboutValue}>{row.value}</div>
                  </div>
                </div>
              ))}
              <div className={styles.aboutRow}>
                <span className={styles.aboutIcon}>💼</span>
                <div>
                  <div className={styles.aboutLabel}>status</div>
                  <div className={styles.statusBadge}>
                    <span className={styles.statusDot}></span>
                    {data.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className={styles.section}>
          <p className={styles.sectionNum}>02. /education</p>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.sectionLine}></div>
          <div className={styles.eduGrid}>
            {data.education.map((edu, i) => (
              <div key={i} className={styles.eduCard}>
                <div className={styles.eduIcon}>{edu.emoji}</div>
                <div>
                  <div className={styles.eduCmd}>$ cat ./{edu.type.toLowerCase().replace(/ /g,"-")}.md</div>
                  <div className={styles.eduTitle}>{edu.title}</div>
                  <div className={styles.eduType}>{edu.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <p className={styles.sectionNum}>03. /skills</p>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.sectionLine}></div>
          <p className={styles.sectionSub}>Tooling and disciplines I work across daily.</p>
          <div className={styles.skillsGrid}>
            {data.skills.map((cat, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.skillCat}>{cat.emoji} {cat.category}</div>
                <div className={styles.skillTags}>
                  {cat.items.map((item, j) => <span key={j} className={styles.skillTag}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <p className={styles.sectionNum}>04. /experience</p>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.sectionLine}></div>
          {data.experience.map((exp, i) => (
            <div key={i} className={styles.expTimeline}>
              <div className={styles.expDot}></div>
              <div className={styles.expCard}>
                <h3 className={styles.expTitle}>{exp.title}</h3>
                <span className={styles.expDate}>{exp.period}</span>
                <p className={styles.expDesc}>{exp.description}</p>
                <ul className={styles.expList}>
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section id="projects" className={styles.section}>
          <p className={styles.sectionNum}>05. /projects</p>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.sectionLine}></div>
          <p className={styles.sectionSub}>A selection of recent client work.</p>
          <div className={styles.projectsGrid}>
            {data.projects.map((proj, i) => (
              <div key={i} className={styles.projectCard}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectNum}>project_0{i+1}</span>
                  <span className={styles.projectTag}>{proj.tag}</span>
                </div>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <p className={styles.sectionNum}>06. /contact</p>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.sectionLine}></div>
          <p className={styles.sectionSub}>Got a project in mind? Let&apos;s build something great.</p>
          <div className={styles.contactGrid}>
            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <span className={`${styles.dot} ${styles.dotR}`}></span>
                <span className={`${styles.dot} ${styles.dotY}`}></span>
                <span className={`${styles.dot} ${styles.dotG}`}></span>
                <span className={styles.terminalTitle}>~/contact.sh</span>
              </div>
              <div className={styles.contactList}>
                <a href={`mailto:${data.email}`} className={styles.contactItem}>✉️ {data.email}</a>
                <a href={`tel:${data.phone}`} className={styles.contactItem}>📞 {data.phone}</a>
                <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noreferrer" className={styles.contactItem}>💬 WhatsApp: {data.phone}</a>
                <a href={`https://instagram.com/${data.instagram}`} target="_blank" rel="noreferrer" className={styles.contactItem}>📸 @{data.instagram}</a>
              </div>
              <div className={styles.echoLine}>$ echo &quot;Let&apos;s connect&quot; <span className={styles.cursor} style={{height:"14px"}}></span></div>
            </div>
            <div className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send Message</h3>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>&gt; name</label>
                <input type="text" className={styles.formInput} placeholder="John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>&gt; email</label>
                <input type="email" className={styles.formInput} placeholder="you@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>&gt; message</label>
                <textarea className={styles.formInput} placeholder="Tell me about your project..." rows={5}></textarea>
              </div>
              <button className={styles.formSubmit}>send_message()</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerCopy}>© 2024 {data.name}. All rights reserved.</p>
        <p className={styles.footerBuilt}>Built with <code>&lt;code/&gt;</code> & coffee in Eldoret</p>
      </footer>
    </>
  );
  }
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {["about","education","skills","experience","projects","contact"].map(l => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)}>./{l}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.mobileHire}>hire_me()</a>
        </div>
      )}

      <main>
        <section id="hero" className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.profileWrap}>
              <img src="/photo.jpg" alt={data.name} className={styles.profileImg}
                onErro
