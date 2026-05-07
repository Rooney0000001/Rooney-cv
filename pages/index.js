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
                onErro
