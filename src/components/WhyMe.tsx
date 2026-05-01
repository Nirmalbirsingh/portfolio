import styles from './WhyMe.module.css';

const items = [
  {
    num: '01',
    title: 'No templates, ever.',
    desc: 'Every line of code is written for your business. No drag-and-drop, no page builders, no cookie-cutter themes.',
  },
  {
    num: '02',
    title: 'Fast delivery.',
    desc: 'Most 5-page business sites don\'t need 3 months. I move fast without cutting corners.',
  },
  {
    num: '03',
    title: 'I stick around.',
    desc: 'After launch, I stay available for questions and fixes. You won\'t be left with a site and no support.',
  },
];

export default function WhyMe() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.num} className={styles.col}>
            <span className={styles.num} aria-hidden>{item.num}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
