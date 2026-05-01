import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    num: '01',
    name: 'Local Produce Shop',
    desc: 'A fast, SEO-optimised storefront for a local farm-to-table business, with product filtering and Google Maps integration.',
    tags: ['React', 'TypeScript', 'Vite', 'Local SEO'],
    status: 'Live' as const,
    href: 'https://doublegreen.ca/',
  },
  {
    num: '02',
    name: 'Portfolio Website',
    desc: 'This very site — a hand-crafted, animation-rich portfolio built from scratch with React, TypeScript, and pure CSS.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    status: 'Live' as const,
    href: '#contact',
  },
  {
    num: '03',
    name: 'Hydration Tracker',
    desc: 'A native watchOS + iOS app that tracks daily water intake using HealthKit, with Apple Watch complications and Siri Shortcuts.',
    tags: ['Swift', 'SwiftUI', 'watchOS', 'HealthKit'],
    status: 'Building' as const,
    href: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.07 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className="container">
        <p className="section-label reveal">Selected work</p>
        <h2 className="section-title reveal">Projects</h2>
      </div>

      <div className={styles.list}>
        {projects.map((p) => {
          const isExternal = p.href && p.href.startsWith('http');
          const isContact = p.href === '#contact';
          const inner = (
            <>
              <span className={styles.num}>{p.num}</span>
              <div className={styles.info}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.desc}</p>
                {p.tags.length > 0 && (
                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.statusWrap}>
                <span className={`${styles.status} ${
                  p.status === 'Live' ? styles.statusLive : styles.statusBuilding
                }`}>
                  <span className={`pulse-dot ${p.status === 'Live' ? '' : 'pulse-dot--orange'}`} />
                  {p.status}
                </span>
              </div>
            </>
          );

          if (isExternal) {
            return (
              <a key={p.num} href={p.href!} target="_blank" rel="noreferrer"
                className={`${styles.row} ${styles.rowLink} reveal`}>
                {inner}
              </a>
            );
          }
          if (isContact) {
            return (
              <button key={p.num} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`${styles.row} ${styles.rowLink} reveal`}>
                {inner}
              </button>
            );
          }
          return (
            <div key={p.num} className={`${styles.row} reveal`}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
