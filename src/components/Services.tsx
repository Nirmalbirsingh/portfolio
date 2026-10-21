import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

const cards = [
  {
    num: '01',
    title: 'Business Websites',
    desc: 'A website that looks great on phones, loads fast, and makes it easy for customers to call, visit, or order.',
    tags: ['Mobile-friendly', 'Fast loading', 'Click-to-call'],
  },
  {
    num: '02',
    title: 'Get Found on Google',
    desc: 'Local SEO so people searching “near me” in Surrey find you — Google-friendly pages, Maps, and help with your Business Profile.',
    tags: ['Local SEO', 'Google Maps', 'Business Profile'],
  },
  {
    num: '03',
    title: 'Website Redesigns',
    desc: 'Old, slow, or hard to use on a phone? I rebuild it with a modern look and keep everything that already works.',
    tags: ['Modern design', 'Speed boost', 'Easy to update'],
  },
  {
    num: '04',
    title: 'iOS & Watch Apps',
    desc: 'Native iPhone and Apple Watch apps with a polished feel, for businesses and startups that need more than a website.',
    tags: ['iPhone', 'Apple Watch', 'Swift'],
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
        <p className={`section-label reveal`}>How I can help</p>
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
