import PublicationsRenderer from '@/components/publications/publications-renderer';
import Reviews from '@/components/reviews';
import { Link } from 'react-router-dom';
import CompactServiceGrid from '@/components/compact-service/compact-service-grid';
import { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => {
  return (
    <div className="impkt-content">
      <section className="impkt-banner impkt-dark-bg">
        <div className="mi-invert-fix">
          <div className="impkt-animation-frame">
            <div
              className="impkt-animation impkt-position-1 impkt-scale"
              data-value-1="7"
              data-value-2="1.6"
            ></div>
            <div
              className="impkt-animation impkt-position-2 impkt-scale"
              data-value-1="4"
              data-value-2="1"
            ></div>
            <div
              className="impkt-animation impkt-position-3 impkt-scale"
              data-value-1="1.2"
              data-value-2=".1"
            ></div>
          </div>

          <div className="impkt-gradient"></div>

          <div className="container">
            <div className="impkt-banner-content impkt-up">
              <h1 className="impkt-muted impkt-mb-60">
                Designing <span className="impkt-thin">a Better</span>
                <br /> World <span className="impkt-thin">Today</span>
              </h1>
              <div className="row">
                <div className="col-md-7 col-lg-5">
                  <p className="impkt-light-soft impkt-mb-60">
                    Welcome to our world of endless imagination and boundless
                    creativity. Together, let us embark on a remarkable journey
                    where dreams become tangible realities.
                  </p>
                </div>
              </div>

              <a href="/services" className="impkt-button impkt-btn-space">
                <span>What we do</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>

              <a href="/projects" className="impkt-link impkt-muted ">
                <span>View works</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>

              <div className="impkt-circle-text">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                  className="impkt-ct-svg impkt-rotate"
                  data-value="360"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text style={{ letterSpacing: '6.5px' }}>
                      <textPath xlinkHref="#circlePath">
                        Scroll down - Scroll down -{' '}
                      </textPath>
                    </text>
                  </g>
                </svg>
                <a
                  href="#about"
                  className="impkt-button  impkt-icon-button impkt-arrow-down"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container impkt-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="impkt-mb-90">
                <h2 className="impkt-up impkt-mb-60">
                  Discover <br />
                  Our <span className="impkt-thin">Studio</span>
                </h2>
                <p className="impkt-up impkt-mb-30">
                  At our design studio, we are a collective of talented
                  individuals ignited by our unwavering passion for transforming
                  ideas into reality. With a harmonious blend of diverse
                  backgrounds and a vast array of skill sets, we join forces to
                  create compelling solutions for our esteemed clients.
                </p>

                <p className="impkt-up impkt-mb-60">
                  Collaboration is at the heart of what we do. Our team thrives
                  on the synergy that arises when unique perspectives converge,
                  fostering an environment of boundless creativity. By
                  harnessing our collective expertise, we produce extraordinary
                  results that consistently surpass expectations.
                </p>

                <div className="impkt-about-quote">
                  <div className="impkt-avatar impkt-up">
                    <img src="/img/faces/cto.jpg" alt="Founder" />
                  </div>
                  <h6 className="impkt-quote impkt-up">
                    Passionately Creating{' '}
                    <span className="impkt-thin">Design Wonders:</span>{' '}
                    Unleashing{' '}
                    <span className="impkt-thin">Boundless Creativity</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="impkt-about-photo impkt-mb-90">
                <div className="impkt-lines-place"></div>
                <div
                  className="impkt-up impkt-img-frame"
                  style={{ paddingBottom: '160%' }}
                >
                  <img
                    src="/img/office-space.jpeg"
                    alt="img"
                    className="impkt-scale"
                    data-value-1="1"
                    data-value-2="1.2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impkt-dark-bg">
        <div className="mi-invert-fix">
          <div className="impkt-animation-frame">
            <div
              className="impkt-animation impkt-position-1 impkt-scale"
              data-value-1="2.4"
              data-value-2="1.4"
              style={{ top: '300px', right: '-100px' }}
            ></div>
            <div
              className="impkt-animation impkt-position-2 impkt-scale"
              data-value-1="2"
              data-value-2="1"
              style={{ left: '150px' }}
            ></div>
          </div>
          <div className="container impkt-p-120-0">
            <div className="impkt-mb-120">
              <div className="row">
                <div className="col-lg-10">
                  <span className="impkt-subtitle impkt-light-soft impkt-subtitle-right impkt-up">
                    Professionals focused on helping your brand
                    <br /> grow and move forward.
                  </span>
                </div>
              </div>

              <div className="impkt-complex-text justify-content-center impkt-up impkt-mb-15">
                <span className="impkt-text-image">
                  <img src="/img/office-space.jpeg" alt="team" />
                </span>
                <h2 className="impkt-h1 impkt-muted impkt-center">
                  Unique <span className="impkt-thin">Ideas</span>
                </h2>
              </div>
              <div className="impkt-complex-text justify-content-center impkt-up">
                <h2 className="impkt-h1 impkt-muted impkt-center">
                  For Your <span className="impkt-thin">Business.</span>
                </h2>
                <Link
                  to="/services"
                  className="impkt-services-button impkt-button impkt-arrow-place"
                >
                  <span>What we do</span>
                </Link>
              </div>
            </div>
            <CompactServiceGrid />
          </div>
        </div>
      </section>

      <section>
        <div className="container impkt-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-xl-4">
              <div className="impkt-mb-90">
                <h2 className="impkt-up impkt-mb-60">
                  Meet <br />
                  Our Team
                </h2>
                <p className="impkt-up impkt-mb-30">
                  We are talented individuals who are passionate about bringing
                  ideas to life. With a diverse range of backgrounds and skill
                  sets, we collaborate to produce effective solutions for our
                  clients.
                </p>

                <p className="impkt-up impkt-mb-60">
                  Together, our creative team is committed to delivering
                  impktful work that exceeds expectations.
                </p>

                <div className="impkt-up">
                  <Link to="/team" className="impkt-button  impkt-mb-60">
                    <span>Read more</span>
                  </Link>
                </div>

                <h4 className="impkt-up">
                  <span className="impkt-thin">We</span> delivering <br />
                  <span className="impkt-thin">exceptional</span> results.
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="impkt-team-list">
                <div className="impkt-lines-place"></div>

                <div className="row impkt-mb-60">
                  <div className="col-sm-6">
                    <p
                      className="impkt-mobile-hidden impkt-text-sm impkt-mb-30"
                      style={{ height: '30px' }}
                    >
                      <span className="impkt-accent">*</span> The founders of
                      Impkt.
                    </p>

                    <div className="impkt-team-card impkt-up impkt-mb-30">
                      <img
                        src="/img/faces/cto.jpg"
                        alt="Chief Technology Officer"
                      />
                      <div className="impkt-description">
                        <div className="impkt-secrc-text">
                          <h5 className="impkt-muted impkt-mb-5">
                            <Link to="/team">Matthew Hill</Link>
                          </h5>
                          <p className="impkt-link impkt-light-soft impkt-mb-10">
                            CTO
                          </p>
                          <ul className="impkt-social-icons impkt-center">
                            <li>
                              <a
                                href="#."
                                target="_blank"
                                className="social-icon"
                              >
                                {' '}
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#."
                                target="_blank"
                                className="social-icon"
                              >
                                {' '}
                                <i className="fab fa-github"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="impkt-team-card impkt-up impkt-mb-30">
                      <img src="/img/faces/designer.jpg" alt="Head of Design" />
                      <div className="impkt-description">
                        <div className="impkt-secrc-text">
                          <h5 className="impkt-muted impkt-mb-5">
                            <Link to="/team">Yaroslava Dzihim</Link>
                          </h5>
                          <p className="impkt-link impkt-light-soft impkt-mb-10">
                            Head of Design
                          </p>
                          <ul className="impkt-social-icons impkt-center">
                            <li>
                              <a
                                href="#."
                                target="_blank"
                                className="social-icon"
                              >
                                {' '}
                                <i className="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#."
                                target="_blank"
                                className="social-icon"
                              >
                                {' '}
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      <div className="impkt-soft-bg">
        <div className="container impkt-p-0-120">
          <div className="swiper-container impkt-infinite-show impkt-up">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a
                  href="#."
                  className="impkt-partner-frame"
                  style={{ width: '60px' }}
                >
                  <img src="/img/icons/orange.svg" alt="logo" />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#."
                  className="impkt-partner-frame"
                  style={{ width: '100px' }}
                >
                  <img src="/img/icons/hsbc.svg" alt="logo" />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#."
                  className="impkt-partner-frame"
                  style={{ width: '60px' }}
                >
                  <img src="/img/icons/ford.svg" alt="logo" />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  href="#."
                  className="impkt-partner-frame"
                  style={{ width: '100px' }}
                >
                  <img src="/img/icons/goldmansachs.svg" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <PublicationsRenderer />
      </section>
    </div>
  );
};

export default Home;
