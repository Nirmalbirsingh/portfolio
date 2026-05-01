import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

const cards = [
  {
    num: '01',
    title: 'Business Websites',
    desc: 'Fast, modern websites built to convert visitors into customers. From landing pages to multi-page sites.',
    tags: ['React', 'TypeScript', 'Vite', 'SEO'],
  },
  {
    num: '02',
    title: 'iOS & Watch Apps',
    desc: 'Native Apple platform apps with polished UI, smooth animations, and deep system integration.',
    tags: ['Swift', 'SwiftUI', 'watchOS', 'HealthKit'],
  },
  {
    num: '03',
    title: 'Front-End Dev',
    desc: 'Pixel-perfect implementations of designs with attention to accessibility, motion, and detail.',
    tags: ['HTML/CSS', 'JavaScript', 'Figma', 'Animations'],
  },
  {
    num: '04',
    title: 'Performance & SEO',
    desc: 'Audits, optimisation, and local SEO to make your site rank, load fast, and stay accessible.',
    tags: ['Core Web Vitals', 'Local SEO', 'Accessibility'],
  },
];

function ServiceCard({ num, title, desc, tags }: (typeof cards)[0]) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current!.style.setProperty('--mx', `${x}%`);
    cardRef.current!.style.setProperty('--my', `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} reveal`}
      onMouseMove={onMouseMove}
    >
      <div className={styles.glow} />
      <span className={styles.num}>{num}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
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
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className="container">
        <p className={`section-label reveal`}>What I do</p>
        <h2 className={`section-title reveal`}>Services</h2>
      </div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <ServiceCard key={c.num} {...c} />
        ))}
      </div>
    </section>
  );
}
