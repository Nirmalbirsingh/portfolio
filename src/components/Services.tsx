const services = [
  {
    title: 'Business websites',
    desc: 'A website that looks great on phones, loads fast, and makes it easy for customers to call, visit, or order.',
  },
  {
    title: 'Get found on Google',
    desc: 'Local SEO so people searching “near me” in Surrey find you: Google-friendly pages, Maps, and help with your Business Profile.',
  },
  {
    title: 'Website redesigns',
    desc: 'Old, slow, or hard to use on a phone? I rebuild it with a modern look and keep everything that already works.',
  },
  {
    title: 'iPhone & Watch apps',
    desc: 'Native iPhone and Apple Watch apps with a polished feel, for businesses that need more than a website.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="h2">What I can do for your business</h2>
          </div>
        </div>
        <div className="grid-2 reveal">
          {services.map((s, i) => (
            <div key={s.title} className="service">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
