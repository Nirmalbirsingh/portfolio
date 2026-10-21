import styles from './About.module.css';

const checklist = [
  'Mobile-first — looks right on every phone',
  'Fast — pages load in a blink',
  'Found on Google — local SEO built in',
  'Accessible — easy for everyone to use',
  'Clear communication — prompt replies, no jargon',
  'Built from scratch — no cookie-cutter templates',
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.headline}>
            <span className={styles.hey}>Hey.</span> I'm Nirmal —
            a Surrey-based web developer who cares about results, not just code.
          </h2>
          <p className={styles.body}>
            I've spent the last <strong>5+ years</strong> building things for the web and
            Apple platforms. My work sits at the intersection of{' '}
            <strong>design and engineering</strong> — I care about how things look just as
            much as how they perform.
          </p>
          <p className={styles.body} style={{ marginTop: '1rem' }}>
            I work directly with small business owners — restaurants, shops,
            trades, and food businesses — to build websites that make it easy
            for customers to <strong>find you, trust you, and reach you</strong>.
            You deal with me from the first chat to launch day and beyond.
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
