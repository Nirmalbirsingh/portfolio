import styles from './Contact.module.css';

const links = [
  { type: 'Call or text', value: '(778) 598-2035', href: 'tel:+17785982035' },
  { type: 'Email', value: 'nirmalbirsingh60@gmail.com', href: 'mailto:nirmalbirsingh60@gmail.com?subject=Website%20quote' },
  { type: 'LinkedIn', value: 'linkedin.com/in/nirmal-bir-singh', href: 'https://linkedin.com/in/nirmal-bir-singh' },
  { type: 'GitHub', value: 'github.com/Nirmalbirsingh', href: 'https://github.com/Nirmalbirsingh' },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.headline}>
          Got a project?{' '}
          <span className={styles.accent}>
            Let's build it.
            <span className={styles.underline} />
          </span>
        </h2>

        <div className={styles.lower}>
          <p className={styles.desc}>
            Based in Surrey, BC. I build fast, focused websites for small
            businesses across the Lower Mainland — and work remotely with
            clients anywhere. Tell me about your business and I'll get back
            to you with a clear quote.
          </p>

          <div className={styles.linksList}>
            {links.map((l) => (
              <a
                key={l.type}
                href={l.href}
                className={styles.contactLink}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className={styles.linkInner}>
                  <span className={styles.linkType}>{l.type}</span>
                  <span className={styles.linkValue}>{l.value}</span>
                </div>
                <span className={styles.arrow} aria-hidden="true">&#x2197;&#xFE0E;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
