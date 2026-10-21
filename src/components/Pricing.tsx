const included = [
  { title: 'Fast loading', desc: 'Built to score high on Google’s speed test, so visitors don’t leave waiting.' },
  { title: 'Mobile-first', desc: 'Looks and works great on every phone, where most of your customers are.' },
  { title: 'Local SEO setup', desc: 'Clear page titles, your business info, and a sitemap so Google can find you.' },
  { title: 'Maps & click-to-call', desc: 'Customers can find you or call you with one tap.' },
  { title: 'Built from scratch', desc: 'Designed for your business. No cookie-cutter templates.' },
  { title: 'Support after launch', desc: 'I stay available for questions and fixes once you’re live.' },
];

function Check() {
  return (
    <svg className="check" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">Clear pricing, no surprises</h2>
          </div>
        </div>
        <div className="price-card reveal">
          <div className="price-main">
            <p className="eyebrow" style={{ margin: 0 }}>Business website</p>
            <p className="price">
              <span>from</span>
              <strong>$899</strong>
              <span>CAD</span>
            </p>
            <p className="muted">
              The final price depends on how many pages and features you need.
              You get a clear quote before any work starts.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get your free quote
            </a>
          </div>
          <div className="includes">
            <p className="eyebrow">What you get</p>
            <ul>
              {included.map((i) => (
                <li key={i.title}>
                  <Check />
                  <div>
                    <strong>{i.title}</strong>
                    <span>{i.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
