const steps = [
  {
    label: 'The problem',
    text: 'A family-run produce business had no real home online. Customers couldn’t browse products or easily find the shop.',
  },
  {
    label: 'What I built',
    text: 'A fast, mobile-first storefront with product filtering, Google Maps, and local SEO built in from day one.',
  },
  {
    label: 'The result',
    text: 'Live and production-ready at doublegreen.ca, easy to browse on a phone and set up to show up in local searches.',
  },
];

const concepts = [
  {
    name: 'Indian sweets & chai shop',
    desc: 'A warm, appetite-first site for a Surrey mithai and chai shop, with menu, location, and hours a tap away.',
    href: 'https://barfi-psi.vercel.app/',
  },
  {
    name: 'Indian meal-prep service',
    desc: 'A clean, trust-building site for a healthy tiffin and meal-prep business: plans, delivery days, and ordering.',
    href: 'https://macrodabba.vercel.app/',
  },
  {
    name: 'Slate & tile roofer',
    desc: 'A premium site for a family-owned roofing company, with services, past work, and a clear path to a free estimate.',
    href: 'https://allens-roofing.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Work</p>
            <h2 className="h2">Selected work</h2>
          </div>
        </div>

        <article className="case reveal">
          <div className="case-top">
            <div>
              <p className="case-kind">Client project · Produce business</p>
              <h3 className="case-name">Double Green</h3>
            </div>
            <span className="pill pill-live">
              <span className="dot" aria-hidden />
              Live
            </span>
          </div>
          <div className="case-steps">
            {steps.map((s) => (
              <div key={s.label}>
                <p className="case-label">{s.label}</p>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <a href="https://doublegreen.ca/" target="_blank" rel="noreferrer" className="btn btn-primary">
            Visit doublegreen.ca <span className="arrow" aria-hidden>↗&#xFE0E;</span>
          </a>
        </article>

        <div className="list-head reveal">
          <h3 className="h3">Concept designs</h3>
          <p>Designed to show local businesses what’s possible. Not paid client work.</p>
        </div>
        <div className="rows reveal">
          {concepts.map((c) => (
            <a key={c.name} href={c.href} target="_blank" rel="noreferrer" className="row">
              <div>
                <p className="row-title">{c.name}</p>
                <p>{c.desc}</p>
              </div>
              <div className="row-meta">
                <span className="pill">Concept</span>
                <span className="arrow" aria-hidden>↗&#xFE0E;</span>
              </div>
            </a>
          ))}
          <div className="row">
            <div>
              <p className="row-title">HydroFlow</p>
              <p>A native iPhone and Apple Watch app that tracks daily water intake with HealthKit.</p>
            </div>
            <div className="row-meta">
              <span className="pill">In progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
