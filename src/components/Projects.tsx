import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

type Status = 'Live' | 'Concept' | 'Building';

const caseStudy = {
  name: 'Double Green',
  kind: 'Client project · Produce business',
  href: 'https://doublegreen.ca/',
  url: 'doublegreen.ca',
  steps: [
    {
      label: 'The problem',
      text: 'A family-run produce business had no real home online. Customers couldn’t browse products or easily find the shop.',
    },
    {
      label: 'What I built',
      text: 'A fast, mobile-first storefront with product filtering, Google Maps, and local SEO built in from day one.',
    },
    {
      label: 'The result',
      text: 'Live and production-ready at doublegreen.ca — easy to browse on a phone and set up to show up in local searches.',
    },
  ],
  tags: ['Mobile-first', 'Product filtering', 'Google Maps', 'Local SEO'],
};

const projects: {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  status: Status;
  href: string | null;
}[] = [
  {
    num: '02',
    name: 'Indian Sweets & Chai Shop',
    desc: 'A warm, appetite-first site for a Surrey mithai and chai shop — menu, location, and hours a tap away.',
    tags: ['Restaurant', 'Surrey, BC', 'Mobile-first'],
    status: 'Concept',
    href: 'https://barfi-psi.vercel.app/',
  },
  {
    num: '03',
    name: 'Indian Meal-Prep Service',
    desc: 'A clean, trust-building site for a healthy tiffin and meal-prep business — plans, delivery days, and ordering.',
    tags: ['Meal prep', 'Surrey, BC', 'Ordering'],
    status: 'Concept',
    href: 'https://macrodabba.vercel.app/',
  },
  {
    num: '04',
    name: 'Slate & Tile Roofer',
    desc: 'A premium site for a family-owned roofing company — services, past work, and a clear path to a free estimate.',
    tags: ['Trades', 'Lead generation', 'Local SEO'],
    status: 'Concept',
    href: 'https://allens-roofing.vercel.app/',
  },
  {
    num: '05',
    name: 'HydroFlow',
    desc: 'A native iPhone and Apple Watch app that tracks daily water intake with HealthKit and watch complications.',
    tags: ['iPhone', 'Apple Watch', 'HealthKit'],
    status: 'Building',
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
        <h2 className="section-title reveal">Work</h2>
      </div>

      <div className="container">
        <article className={`${styles.case} reveal`}>
          <div className={styles.caseHead}>
            <span className={styles.caseNum}>01</span>
            <div>
              <p className={styles.caseKind}>{caseStudy.kind}</p>
              <h3 className={styles.caseName}>{caseStudy.name}</h3>
            </div>
            <span className={`${styles.status} ${styles.statusLive}`}>
              <span className="pulse-dot" />
              Live
            </span>
          </div>
          <div className={styles.caseSteps}>
            {caseStudy.steps.map((st) => (
              <div key={st.label} className={styles.caseStep}>
                <p className={styles.caseLabel}>{st.label}</p>
                <p className={styles.caseText}>{st.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.caseFoot}>
            <div className={styles.tags}>
              {caseStudy.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <a href={caseStudy.href} target="_blank" rel="noreferrer" className={styles.caseLink}>
              Visit {caseStudy.url} ↗&#xFE0E;
            </a>
          </div>
        </article>

        <p className={`${styles.conceptNote} reveal`}>
          <strong>Concept designs</strong> — sites I designed to show local businesses
          what’s possible. They are not paid client work.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map((p) => {
          const isExternal = p.href && p.href.startsWith('http');
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
                  p.status === 'Live'
                    ? styles.statusLive
                    : p.status === 'Concept'
                      ? styles.statusConcept
                      : styles.statusBuilding
                }`}>
                  {p.status !== 'Concept' && (
                    <span className={`pulse-dot ${p.status === 'Live' ? '' : 'pulse-dot--orange'}`} />
                  )}
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
