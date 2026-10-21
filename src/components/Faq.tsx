import { faqs } from '../data/faq';
import styles from './Faq.module.css';

export default function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className="section-label reveal">Questions</p>
          <h2 className="section-title reveal">FAQ</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((f) => (
            <details key={f.q} className={`${styles.item} reveal`}>
              <summary className={styles.q}>
                <span>{f.q}</span>
                <span className={styles.icon} aria-hidden>+</span>
              </summary>
              <p className={styles.a}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
