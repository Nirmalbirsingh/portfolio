const links = [
  { type: 'Call or text', value: '(778) 598-2035', href: 'tel:+17785982035' },
  { type: 'Email', value: 'nirmalbirsingh60@gmail.com', href: 'mailto:nirmalbirsingh60@gmail.com?subject=Website%20quote' },
  { type: 'LinkedIn', value: 'linkedin.com/in/nirmal-bir-singh', href: 'https://linkedin.com/in/nirmal-bir-singh' },
  { type: 'GitHub', value: 'github.com/Nirmalbirsingh', href: 'https://github.com/Nirmalbirsingh' },
];

export default function Contact() {
  return (
    <section id="contact" className="section dark">
      <div className="container contact">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="h2">Got a project? <em>Let’s talk.</em></h2>
          <p className="lead">
            Based in Surrey, BC. I work with small businesses across the Lower
            Mainland, and remotely with clients anywhere. Tell me about your
            business and I’ll get back to you with a clear quote.
          </p>
        </div>
        <div className="contact-list reveal">
          {links.map((l) => (
            <a
              key={l.type}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span>
                <small>{l.type}</small>
                <strong>{l.value}</strong>
              </span>
              <span className="arrow" aria-hidden>↗&#xFE0E;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
