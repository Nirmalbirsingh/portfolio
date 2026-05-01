import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const words = [
  { text: 'I', orange: false },
  { text: 'build', orange: false },
  { text: 'websites', orange: false },
  { text: '&', orange: true },
  { text: 'apps', orange: true },
  { text: 'that', orange: false },
  { text: 'do', orange: false },
  { text: 'the', orange: false },
  { text: 'job.', orange: true },
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
      <div className={styles.watermark} aria-hidden>DEV</div>

      {/* Top badges */}
      <div className={styles.availability}>
        <span className="pulse-dot" />
        Available for new projects — 2026
      </div>

      <div className={styles.scrollIndicator} aria-hidden>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>

      {/* Headline */}
      <div className={styles.headlineWrap}>
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
      </div>

      {/* Bottom strip */}
      <div className={styles.strip}>
        <p className={styles.desc}>
          I design and build fast, conversion-focused websites and apps for
          businesses that want results — not excuses.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum} ref={yearsRef}>0+</span>
            <span className={styles.statLabel}>Years coding</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum} ref={lighthouseRef}>0</span>
            <span className={styles.statLabel}>Lighthouse score</span>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <button
            className={styles.ctaBtn}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={styles.ctaBtnBg} />
            <span className={styles.ctaBtnText}>Start a project ↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
