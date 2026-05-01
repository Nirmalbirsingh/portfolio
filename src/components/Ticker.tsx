import styles from './Ticker.module.css';

const items = [
  'React', 'TypeScript', 'Swift', 'SwiftUI', 'watchOS',
  'Vite', 'iOS Dev', 'CSS', 'Node.js', 'Figma',
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep} aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
