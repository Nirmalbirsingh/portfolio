import styles from './Nav.module.css';

const links = ['Services', 'Projects', 'About', 'Contact'];

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Nirmal<span className={styles.logoAccent}>.</span>
        </a>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)} className={styles.link}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={() => scrollTo('contact')}>
          Let's talk
        </button>
      </div>
    </nav>
  );
}
