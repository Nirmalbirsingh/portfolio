import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.left}>© 2026 — Nirmal Bir Singh. All rights reserved.</p>
        <p className={styles.right}>
          Designed &amp; built by <span className={styles.accent}>Nirmal</span>. From scratch.
        </p>
      </div>
    </footer>
  );
}
