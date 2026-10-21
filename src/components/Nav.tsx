import styles from './Nav.module.css';

const links = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'projects' },
  { label: 'Process', id: 'process' },
  { label: 'FAQ', id: 'faq' },
];

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Nirmal — home">
          Nirmal<span className={styles.logoAccent}>.</span>
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Get a quote
        </a>
      </div>
    </nav>
  );
}
