import styles from './Stack.module.css';

const row1 = ['React', 'TypeScript', 'Vite', 'Swift', 'SwiftUI', 'Node.js', 'CSS/SCSS', 'Git'];
const row2 = ['Figma', 'watchOS', 'HealthKit', 'Xcode', 'GitHub', 'Vercel', 'REST APIs', 'Accessibility'];

const dotColors: Record<string, string> = {
  React: '#61dafb',
  TypeScript: '#3178c6',
  Vite: '#646cff',
  Swift: '#f05138',
  SwiftUI: '#f05138',
  'Node.js': '#68a063',
  'CSS/SCSS': '#c76395',
  Git: '#f1502f',
  Figma: '#a259ff',
  watchOS: '#f05138',
  HealthKit: '#ff2d55',
  Xcode: '#147efb',
  GitHub: '#333',
  Vercel: '#000',
  'REST APIs': '#ff5c00',
  Accessibility: '#00a85a',
};

function Pill({ label }: { label: string }) {
  return (
    <span className={styles.pill}>
      <span
        className={styles.dot}
        style={{ background: dotColors[label] ?? '#8a8278' }}
      />
      {label}
    </span>
  );
}

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const quadrupled = [...items, ...items, ...items, ...items];
  return (
    <div className={styles.rowWrap}>
      <div className={`${styles.row} ${reverse ? styles.rowReverse : ''}`}>
        {quadrupled.map((item, i) => (
          <Pill key={i} label={item} />
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section className={styles.section}>
      <Row items={row1} />
      <Row items={row2} reverse />
    </section>
  );
}
