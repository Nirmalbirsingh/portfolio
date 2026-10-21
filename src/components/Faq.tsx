import { faqs } from '../data/faq';

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container faq">
        <div className="reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Common questions</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="plus" aria-hidden />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
