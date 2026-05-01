import styles from './About.module.css';

const checklist = [
  'React & TypeScript — production-ready code',
  'Swift & SwiftUI — native Apple platform apps',
  'Performance-first — Core Web Vitals green',
  'Accessibility — WCAG AA compliant',
  'SEO — structure, metadata, local signals',
  'Communication — clear, prompt, no jargon',
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.headline}>
            <span className={styles.hey}>Hey.</span> I'm Nirmal —
            a developer who cares about results, not just code.
          </h2>
          <p className={styles.body}>
            I've spent the last <strong>5+ years</strong> building things for the web and
            Apple platforms. My work sits at the intersection of{' '}
            <strong>design and engineering</strong> — I care about how things look just as
            much as how they perform.
          </p>
          <p className={styles.body} style={{ marginTop: '1rem' }}>
            When I'm not building websites, I'm working on{' '}
            <strong>native iOS and watchOS apps</strong>, exploring new web
            technologies, or writing about performance and accessibility.
          </p>
        </div>

        <div className={styles.right}>
          {checklist.map((item, i) => (
            <div key={i} className={styles.checkRow}>
              <span className={styles.checkBox}>✓</span>
              <span className={styles.checkText}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
