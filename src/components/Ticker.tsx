import styles from './Ticker.module.css';

const items = [
  'Restaurants', 'Bakeries', 'Cafés', 'Produce shops', 'Meal prep',
  'Roofers & trades', 'Mobile-first', 'Local SEO', 'Google Maps ready', 'Fast loading',
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.ticker} aria-label="Built for local businesses">
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
