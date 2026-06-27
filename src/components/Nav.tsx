import { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';

const links = ['Services', 'Projects', 'About', 'Contact'];

export default function Nav() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner} ref={innerRef}>
        <a href="#" className={styles.logo}>
          Nirmal<span className={styles.logoAccent}>.</span>
        </a>

        <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)} className={styles.link}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.themeToggle}
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? '☀' : '☽'}
        </button>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <button className={styles.cta} onClick={() => scrollTo('contact')}>
          Let's talk
        </button>
      </div>
    </nav>
  );
}
