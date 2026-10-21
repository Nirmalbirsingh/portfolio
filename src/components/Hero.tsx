import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const words = [
  { text: 'Websites', orange: false },
  { text: 'that', orange: false },
  { text: 'bring', orange: false },
  { text: 'you', orange: false },
  { text: 'customers.', orange: true },
];

function useCounter(target: number, suffix = '') {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          const start = performance.now();
          const duration = 1800;
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 4);
            el.textContent = Math.round(eased * target) + suffix;
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);

  return ref;
}

export default function Hero() {
  const yearsRef = useCounter(5, '+');
  const lighthouseRef = useCounter(100);

  return (
    <section className={styles.hero} id="hero">
      {/* Background blobs */}
      <div className={styles.blobTR} aria-hidden />
      <div className={styles.blobBL} aria-hidden />

      {/* Watermark */}
      <div className={styles.watermark} aria-hidden>WEB</div>

      {/* Top badges */}
      <div className={styles.availability}>
        <span className="pulse-dot" />
        Web designer in Surrey, BC · Taking new projects
      </div>

      <div className={styles.scrollIndicator} aria-hidden>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>

      {/* Headline */}
      <h1 className={styles.headlineWrap}>
        <span className={styles.srOnly}>Web design for small businesses in Surrey, BC — </span>
        {words.map((w, i) => (
          <span
            key={i}
            className={styles.wordOuter}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <span
              className={`${styles.word} ${w.orange ? styles.wordOrange : ''}`}
            >
              {w.text}
            </span>
          </span>
        ))}
      </h1>

      {/* Bottom strip */}
      <div className={styles.strip}>
        <p className={styles.desc}>
          I design and build fast, mobile-friendly websites for small
          businesses in Surrey and the Lower Mainland — so more people find
          you, trust you, and get in touch.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum} ref={yearsRef}>5+</span>
            <span className={styles.statLabel}>Years coding</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum} ref={lighthouseRef}>100</span>
            <span className={styles.statLabel}>Google speed score</span>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <button
            className={styles.ctaBtn}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={styles.ctaBtnBg} />
            <span className={styles.ctaBtnText}>Get a free quote ↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
