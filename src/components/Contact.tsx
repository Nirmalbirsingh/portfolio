import styles from './Contact.module.css';

const links = [
  { type: 'Email', value: 'nirmalbirsingh60@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nirmalbirsingh60@gmail.com' },
  { type: 'iMessage', value: '+1 778 598 2035', href: 'sms:+17785982035' },
  { type: 'GitHub', value: 'github.com/Nirmalbirsingh', href: 'https://github.com/Nirmalbirsingh' },
  { type: 'LinkedIn', value: 'linkedin.com/in/nirmal-bir-singh', href: 'https://linkedin.com/in/nirmal-bir-singh' },
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
            Based wherever good work is needed. I specialise in building
            fast, focused websites and iOS apps for small businesses and
            startups. If you have a clear goal, I can help you get there.
          </p>

          <div className={styles.linksList}>
            {links.map((l) => (
              <a
                key={l.type}
                href={l.href}
                className={styles.contactLink}
                target={l.href.startsWith('sms') ? undefined : '_blank'}
                rel="noreferrer"
              >
                <div className={styles.linkInner}>
                  <span className={styles.linkType}>{l.type}</span>
                  <span className={styles.linkValue}>{l.value}</span>
                </div>
                <span className={styles.arrow}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
