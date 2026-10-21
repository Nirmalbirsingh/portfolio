const steps = [
  { title: 'Chat', desc: 'Tell me about your business and what you need. No pressure, no jargon.' },
  { title: 'Design', desc: 'You see the design before anything is built, and we tweak it until it feels right.' },
  { title: 'Build', desc: 'I build it fast, mobile-first, and ready for Google from day one.' },
  { title: 'Launch', desc: 'We go live together. I stick around after launch for questions and fixes.' },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Process</p>
            <h2 className="h2">Simple, from first chat to launch</h2>
          </div>
        </div>
        <ol className="steps reveal">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h3">{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
