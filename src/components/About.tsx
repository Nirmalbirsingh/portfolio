const facts = [
  ['Based in', 'Surrey, BC'],
  ['Experience', '5+ years'],
  ['Works with', 'Restaurants, shops, trades, food businesses'],
  ['You deal with', 'Me, from first chat to launch'],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 className="h2">Hi, I’m Nirmal.</h2>
        </div>
        <div className="about-body reveal">
          <p>
            I’m a Surrey-based web developer who cares about results, not just
            code. I’ve spent the last 5+ years building for the web and Apple
            platforms, and I care about how things look just as much as how
            they perform.
          </p>
          <p>
            I work directly with small business owners to build websites that
            make it easy for customers to find you, trust you, and reach you.
          </p>
          <ul className="facts">
            {facts.map(([k, v]) => (
              <li key={k}>
                <span>{k}</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
