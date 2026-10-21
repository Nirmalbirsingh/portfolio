import styles from './Pricing.module.css';

const included = [
  { title: 'Fast loading', desc: 'Built to score high on Google’s speed test, so visitors don’t leave waiting.' },
  { title: 'Mobile-first', desc: 'Looks and works great on every phone, where most of your customers are.' },
  { title: 'Local SEO setup', desc: 'Clear page titles, your business info, and a sitemap so Google can find you.' },
  { title: 'Maps & click-to-call', desc: 'Customers can find you or call you with one tap.' },
  { title: 'Built from scratch', desc: 'Designed for your business. No cookie-cutter templates.' },
  { title: 'Support after launch', desc: 'I stay available for questions and fixes once you’re live.' },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <p className="section-label reveal">Pricing</p>
        <h2 className="section-title reveal">Simple pricing</h2>

        <div className={`${styles.card} reveal`}>
          <div className={styles.priceCol}>
            <p className={styles.plan}>Business website</p>
            <p className={styles.price}>
              <span className={styles.from}>from</span>
              $899
              <span className={styles.cur}>CAD</span>
            </p>
            <p className={styles.note}>
              The final price depends on how many pages and features you need.
              You get a clear quote before any work starts — no surprise bills.
            </p>
            <a href="#contact" className={styles.cta}>Get your free quote ↗&#xFE0E;</a>
          </div>

          <div className={styles.listCol}>
            <p className={styles.listHead}>What you get</p>
            <ul className={styles.list}>
              {included.map((i) => (
                <li key={i.title} className={styles.item}>
                  <span className={styles.check} aria-hidden>✓</span>
                  <div>
                    <p className={styles.itemTitle}>{i.title}</p>
                    <p className={styles.itemDesc}>{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
