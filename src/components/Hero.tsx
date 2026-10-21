export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="badge">
          <span className="dot" aria-hidden />
          Web designer in Surrey, BC · Taking new projects
        </p>

        <h1 className="h1">
          <span className="sr-only">Web design for small businesses in Surrey, BC: </span>
          Websites that bring you <em>customers.</em>
        </h1>

        <p className="lead">
          I design and build fast, mobile-friendly websites for small businesses
          in Surrey and the Lower Mainland, so more people find you, trust you,
          and get in touch.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get a free quote
          </a>
          <a href="#work" className="btn btn-outline-light">
            See my work
          </a>
        </div>

        <dl className="stats">
          <div className="stat">
            <dt className="sr-only">Experience</dt>
            <dd>
              <span className="stat-num">5+</span>
              <span className="stat-label">Years building for the web</span>
            </dd>
          </div>
          <div className="stat">
            <dt className="sr-only">Speed</dt>
            <dd>
              <span className="stat-num">100</span>
              <span className="stat-label">Google speed score</span>
            </dd>
          </div>
          <div className="stat">
            <dt className="sr-only">Price</dt>
            <dd>
              <span className="stat-num">$899</span>
              <span className="stat-label">Websites from, in CAD</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
