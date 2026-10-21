import styles from './Process.module.css';

const steps = [
  { title: 'Chat', desc: 'Tell me about your business and what you need. No pressure, no jargon.' },
  { title: 'Design', desc: 'You see the design before anything is built, and we tweak it until it feels right.' },
  { title: 'Build', desc: 'I build it fast, mobile-first, and ready for Google from day one.' },
  { title: 'Launch', desc: 'We go live together. I stick around after launch for questions and fixes.' },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <p className="section-label reveal">How it works</p>
        <h2 className="section-title reveal">Simple process</h2>
        <ol className={styles.grid}>
          {steps.map((s, i) => (
            <li key={s.title} className={`${styles.step} reveal`}>
              <span className={styles.num} aria-hidden>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
