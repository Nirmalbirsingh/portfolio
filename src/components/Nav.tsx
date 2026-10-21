const links = [
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav-inner">
        <a href="/" className="logo" aria-label="Nirmal, home">
          Nirmal<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary btn-sm">
          Get a quote
        </a>
      </div>
    </nav>
  );
}
