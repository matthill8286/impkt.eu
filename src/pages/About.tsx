import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = (): React.ReactElement => {
  return (
    <div className="impkt-wrapper" id="top">
      <div className="impkt-ball">
        <span className="impkt-icon-1">
          <svg viewBox="0 0 128 128">
            <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
          </svg>
        </span>
        <div className="impkt-more-text">More</div>
        <div className="impkt-choose-text">Choose</div>
      </div>

      {/*<div className="impkt-preloader">*/}
      {/*  <div className="impkt-preloader-animation">*/}
      {/*    <div className="impkt-pos-abs impkt-animation-1">*/}
      {/*      <p className="impkt-h3 impkt-muted impkt-thin">Pioneering</p>*/}
      {/*      <p className="impkt-h3 impkt-muted">Creative</p>*/}
      {/*      <p className="impkt-h3 impkt-muted impkt-thin">Excellence</p>*/}
      {/*    </div>*/}
      {/*    <div className="impkt-pos-abs impkt-animation-2">*/}
      {/*      <div className="impkt-reveal-frame">*/}
      {/*        <p className="impkt-reveal-box"></p>*/}
      {/*        <p className="impkt-h3 impkt-muted impkt-thin">impkt.eu</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="impkt-progress-track">
        <div className="impkt-progress"></div>
      </div>

      <div className="impkt-menu-frame">
        <div className="impkt-frame-top">
          <a href="/" className="impkt-logo">
            Impkt.
          </a>
          <div className="impkt-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="impkt-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="impkt-main-menu" id="swupMenu">
                  <ul>
                    <li className="impkt-has-children impkt-active">
                      <a href="/">Homepage</a>
                    </li>
                    <li>
                      <a href="/projects">Projects</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/team">Team</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="impkt-menu-right-frame">
                  <div className="impkt-animation-in">
                    <div className="impkt-animation-frame">
                      <div
                        className="impkt-animation impkt-position-1 impkt-scale"
                        data-value-1="2"
                        data-value-2="2"
                      ></div>
                    </div>
                  </div>
                  <div className="impkt-menu-right">
                    <div className="row">
                      <div className="col-lg-8 impkt-mb-60">
                        <h6 className="impkt-muted impkt-mb-30">Projects</h6>

                        <ul className="impkt-menu-list">
                          <li>
                            <a
                              href="property-one.html"
                              className="impkt-light-soft"
                            >
                              Property One
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="impkt-divider impkt-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 impkt-mb-60">
                        <h6 className="impkt-muted impkt-mb-30">Cyprus</h6>

                        <p className="impkt-light-soft impkt-up">
                          76 Constantini Constantinou Paphos, Konia{' '}
                          <span className="impkt-no-wrap">+357 95119267</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impkt-curtain"></div>

      <div className="impkt-frame">
        <div className="impkt-frame-top">
          <a href="/" className="impkt-logo">
            Impkt.
          </a>
          <div className="impkt-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="impkt-frame-bottom">
          <div className="impkt-current-page"></div>
          <div className="impkt-back-to-top">
            <a href="#top" className="impkt-link impkt-dark impkt-arrow-place">
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </div>

      <div className="impkt-content">
        <div id="swupMain" className="impkt-main-transition">
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
                        Welcome to our world of endless imagination and
                        boundless creativity. Together, let us embark on a
                        remarkable journey where dreams become tangible
                        realities.
                      </p>
                    </div>
                  </div>

                  <a
                    href="/services"
                    className="impkt-button impkt-arrow-place impkt-btn-space"
                  >
                    <span>What we do</span>
                  </a>

                  <a
                    href="/projects"
                    className="impkt-link impkt-muted impkt-arrow-place"
                  >
                    <span>View works</span>
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
                      className="impkt-button impkt-arrow-place impkt-icon-button impkt-arrow-down"
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
                      individuals ignited by our unwavering passion for
                      transforming ideas into reality. With a harmonious blend
                      of diverse backgrounds and a vast array of skill sets, we
                      join forces to create compelling solutions for our
                      esteemed clients.
                    </p>

                    <p className="impkt-up impkt-mb-60">
                      Collaboration is at the heart of what we do. Our team
                      thrives on the synergy that arises when unique
                      perspectives converge, fostering an environment of
                      boundless creativity. By harnessing our collective
                      expertise, we produce extraordinary results that
                      consistently surpass expectations.
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
                        src="/img/photo/office-space.jpg"
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
                      <img src="/img/photo/thinking.jpg" alt="team" />
                    </span>
                    <h2 className="impkt-h1 impkt-muted impkt-center">
                      Unique <span className="impkt-thin">Ideas</span>
                    </h2>
                  </div>
                  <div className="impkt-complex-text justify-content-center impkt-up">
                    <h2 className="impkt-h1 impkt-muted impkt-center">
                      For Your <span className="impkt-thin">Business.</span>
                    </h2>
                    <a
                      href="/services"
                      className="impkt-services-button impkt-button impkt-arrow-place"
                    >
                      <span>What we do</span>
                    </a>
                  </div>
                </div>

                <div className="row impkt-services-grid m-0">
                  <div className="col-md-6 col-lg-3 impkt-services-grid-item p-0">
                    <a
                      href="/service"
                      className="impkt-service-card-sm impkt-up"
                    >
                      <h5 className="impkt-muted impkt-mb-30">
                        Branding and <br />
                        Identity Design
                      </h5>
                      <p className="impkt-light-soft impkt-mb-30">
                        Our creative agency is a team of professionals focused
                        on helping your brand grow.
                      </p>
                      <div className="impkt-button impkt-icon-button-sm impkt-arrow-place"></div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-3 impkt-services-grid-item p-0">
                    <a
                      href="/service"
                      className="impkt-service-card-sm impkt-up"
                    >
                      <h5 className="impkt-muted impkt-mb-30">
                        Website Design <br />
                        and Development
                      </h5>
                      <p className="impkt-light-soft impkt-mb-30">
                        Our creative agency is a team of professionals focused
                        on helping your brand grow.
                      </p>
                      <div className="impkt-button impkt-icon-button-sm impkt-arrow-place"></div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-3 impkt-services-grid-item p-0">
                    <a
                      href="/service"
                      className="impkt-service-card-sm impkt-up"
                    >
                      <h5 className="impkt-muted impkt-mb-30">
                        Advertising and <br />
                        Marketing Campaigns
                      </h5>
                      <p className="impkt-light-soft impkt-mb-30">
                        Our creative agency is a team of professionals focused
                        on helping your brand grow.
                      </p>
                      <div className="impkt-button impkt-icon-button-sm impkt-arrow-place"></div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-3 impkt-services-grid-item p-0">
                    <a
                      href="/service"
                      className="impkt-service-card-sm impkt-up"
                    >
                      <h5 className="impkt-muted impkt-mb-30">
                        Creative Consulting <br />
                        and Development
                      </h5>
                      <p className="impkt-light-soft impkt-mb-30">
                        Our creative agency is a team of professionals focused
                        on helping your brand grow.
                      </p>
                      <div className="impkt-button impkt-icon-button-sm impkt-arrow-place"></div>
                    </a>
                  </div>
                </div>
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
                      We are talented individuals who are passionate about
                      bringing ideas to life. With a diverse range of
                      backgrounds and skill sets, we collaborate to produce
                      effective solutions for our clients.
                    </p>

                    <p className="impkt-up impkt-mb-60">
                      Together, our creative team is committed to delivering
                      impktful work that exceeds expectations.
                    </p>

                    <div className="impkt-up">
                      <a
                        href="/team"
                        className="impkt-button impkt-arrow-place impkt-mb-60"
                      >
                        <span>Read more</span>
                      </a>
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
                          <span className="impkt-accent">*</span> The founders
                          of Impkt.
                        </p>

                        <div className="impkt-team-card impkt-up impkt-mb-30">
                          <img
                            src="/img/faces/cto.jpg"
                            alt="Chief Technology Officer"
                          />
                          <div className="impkt-description">
                            <div className="impkt-secrc-text">
                              <h5 className="impkt-muted impkt-mb-5">
                                <a href="/team">Matthew Hill</a>
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
                          <img
                            src="/img/faces/designer.jpg"
                            alt="Head of Design"
                          />
                          <div className="impkt-description">
                            <div className="impkt-secrc-text">
                              <h5 className="impkt-muted impkt-mb-5">
                                <a href="/team">Yaroslava Dzihim</a>
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

          <section className="impkt-soft-bg">
            <div className="container impkt-p-120-120">
              <div className="row">
                <div className="col-lg-10">
                  <span className="impkt-subtitle impkt-subtitle-right impkt-subtitle-dark impkt-up">
                    Customer reviews are a valuable source <br />
                    of information for both businesses and consumers.
                  </span>
                </div>
              </div>

              <h2 className="impkt-center impkt-up impkt-mb-60">
                Customer <span className="impkt-thin">Voices:</span> <br />
                Hear What <span className="impkt-thin">They Say!</span>
              </h2>

              <div className="impkt-revi-pagination impkt-up impkt-mb-60"></div>

              <div className="row impkt-relative justify-content-center">
                <div className="col-lg-8">
                  <div className="impkt-slider-nav impkt-soft impkt-reviews-nav impkt-up">
                    <div className="impkt-slider-arrow impkt-prev impkt-revi-prev impkt-arrow-place"></div>
                    <div className="impkt-slider-arrow impkt-revi-next impkt-arrow-place"></div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="impkt-quote-icon impkt-up"
                  >
                    <path
                      d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z"
                      fill="#000000"
                    />
                  </svg>

                  <div className="swiper-container impkt-reviews-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="impkt-review-frame impkt-center"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-opacity="0"
                        >
                          <h5 className="impkt-up impkt-mb-10">Sarah E.</h5>
                          <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                            HSBC Creative
                          </p>
                          <p className="impkt-text-xl impkt-up">
                            This creative agency stands out with their
                            exceptional talent and expertise. Their ability to
                            think outside the box and bring unique ideas to life
                            is truly impressive. With meticulous attention to
                            detail, they consistently deliver visually stunning
                            and impktful work.
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div
                          className="impkt-review-frame impkt-center"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-opacity="0"
                        >
                          <h5 className="impkt-up impkt-mb-10">Emma T.</h5>
                          <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                            LinkedIn
                          </p>
                          <p className="impkt-text-xl impkt-up">
                            I had the pleasure of working with this creative
                            agency, and I must say, they truly impressed me.
                            They consistently think outside the box, resulting
                            in impressive and impktful work. I highly recommend
                            this agency for their consistent delivery of
                            exceptional creative solutions.
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div
                          className="impkt-review-frame impkt-center"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-opacity="0"
                        >
                          <h5 className="impkt-up impkt-mb-10">Rebecca P.</h5>
                          <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                            Novato
                          </p>
                          <p className="impkt-text-xl impkt-up">
                            This creative agency stands out with their
                            exceptional talent and expertise. Their ability to
                            think outside the box and bring unique ideas to life
                            is truly impressive. With meticulous attention to
                            detail, they consistently deliver visually stunning
                            and impktful work.
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div
                          className="impkt-review-frame impkt-center"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-opacity="0"
                        >
                          <h5 className="impkt-up impkt-mb-10">Melissa E.</h5>
                          <p className="impkt-mb-5 impkt-upper impkt-up impkt-mb-30">
                            Orange
                          </p>
                          <p className="impkt-text-xl impkt-up">
                            I had the pleasure of working with this creative
                            agency, and I must say, they truly impressed me.
                            They consistently think outside the box, resulting
                            in impressive and impktful work. I highly recommend
                            this agency for their consistent delivery of
                            exceptional creative solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                      <img src="/img/partners/orange.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a
                      href="#."
                      className="impkt-partner-frame"
                      style={{ width: '100px' }}
                    >
                      <img src="/img/partners/hsbc.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a
                      href="#."
                      className="impkt-partner-frame"
                      style={{ width: '60px' }}
                    >
                      <img src="/img/partners/ford.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a
                      href="#."
                      className="impkt-partner-frame"
                      style={{ width: '100px' }}
                    >
                      <img src="/img/partners/goldmansachs.svg" alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="container impkt-p-120-60">
              <div className="row align-items-center impkt-mb-30">
                <div className="col-lg-6 impkt-mb-30">
                  <h3 className="impkt-up">Popular Publications:</h3>
                </div>
                <div className="col-lg-6 impkt-mb-30">
                  <div className="impkt-adaptive-right impkt-up">
                    <a
                      href="blog.html"
                      className="impkt-link impkt-dark impkt-arrow-place"
                    >
                      <span>View all</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <a
                    href="publication.html"
                    className="impkt-blog-card impkt-mb-60"
                  >
                    <div className="impkt-cover-frame impkt-up">
                      <img src="/img/blog/1.jpg" alt="cover" />
                    </div>
                    <div className="impkt-post-descr">
                      <div className="impkt-labels impkt-up impkt-mb-30">
                        <div className="impkt-label impkt-upper impkt-accent">
                          DESIGN
                        </div>
                        <div className="impkt-label impkt-upper">
                          May 24 2024
                        </div>
                      </div>
                      <h4 className="impkt-up impkt-mb-30">
                        How to Become a Graphic Designer in 10 Simple Steps
                      </h4>
                      <p className="impkt-post-text impkt-up impkt-mb-30">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eius sequi commodi dignissimos optio, beatae, eos
                        necessitatibus nisImpkt. Nam cupiditate consectetur
                        nostrum qui! Repellat natus nulla, nisi aliquid,
                        asperiores impedit tempora sequi est reprehenderit
                        cumque explicabo, dicta. Rem nihil ullam totam ea
                        voluptas quibusdam repudiandae id ut at iure! Totam, a!
                      </p>
                      <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
                        <span>Read more</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6">
                  <a
                    href="publication.html"
                    className="impkt-blog-card impkt-mb-60"
                  >
                    <div className="impkt-cover-frame impkt-up">
                      <img src="/img/blog/2.jpg" alt="cover" />
                    </div>
                    <div className="impkt-post-descr">
                      <div className="impkt-labels impkt-up impkt-mb-30">
                        <div className="impkt-label impkt-upper impkt-accent">
                          DESIGN
                        </div>
                        <div className="impkt-label impkt-upper">
                          July 24 2024
                        </div>
                      </div>
                      <h4 className="impkt-up impkt-mb-30">
                        16 Best Graphic Design Online and Offline Courses
                      </h4>
                      <p className="impkt-post-text impkt-up impkt-mb-30">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eius sequi commodi dignissimos optio, beatae, eos
                        necessitatibus nisImpkt. Nam cupiditate consectetur
                        nostrum qui! Repellat natus nulla, nisi aliquid,
                        asperiores impedit tempora sequi est reprehenderit
                        cumque explicabo, dicta. Rem nihil ullam totam ea
                        voluptas quibusdam repudiandae id ut at iure! Totam, a!
                      </p>
                      <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
                        <span>Read more</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="impkt-dark-bg">
            <div className="mi-invert-fix">
              <div className="container impkt-p-120-60">
                <div className="row justify-content-between">
                  <div className="col-md-4 col-lg-4 impkt-mb-60">
                    <div className="impkt-muted impkt-logo impkt-up impkt-mb-30">
                      Impkt.
                    </div>

                    <p className="impkt-light-soft impkt-up impkt-mb-30">
                      Subscribe our newsletter:
                    </p>

                    <form className="impkt-subscribe-form impkt-up">
                      <label htmlFor="subscribe">
                        <input
                          id="subscribe"
                          type="text"
                          placeholder="Enter our email"
                        />
                      </label>
                      <button
                        type="submit"
                        className="impkt-button impkt-icon-button-sm impkt-arrow-place"
                      ></button>
                    </form>
                  </div>
                  <div className="col-md-7 col-lg-6">
                    <div className="row justify-content-end">
                      <div className="col-md-6 col-lg-7">
                        <nav className="impkt-footer-menu impkt-mb-60">
                          <ul>
                            <li className="impkt-up impkt-active">
                              <a href="/">Home</a>
                            </li>
                            <li className="impkt-up">
                              <a href="/projects">Projects</a>
                            </li>
                            <li className="impkt-up">
                              <a href="/services">Services</a>
                            </li>
                            <li className="impkt-up">
                              <a href="/contact">Contact</a>
                            </li>
                            <li className="impkt-up">
                              <Link to="/posts">Blog</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between flex-sm-row-reverse">
                  <div className="col-md-7 col-lg-6">
                    <div className="row justify-content-between">
                      <div className="col-md-6 col-lg-5 impkt-mb-60">
                        <h6 className="impkt-muted impkt-up impkt-mb-30">
                          Cyprus
                        </h6>

                        <p className="impkt-light-soft impkt-up">
                          76 Constantini Constantinou Paphos, Konia{' '}
                          <span className="impkt-no-wrap">+357 95119267</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-6 impkt-mb-60">
                    <div className="impkt-vert-between">
                      <div className="impkt-mb-30">
                        <ul className="impkt-social-icons impkt-up">
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {' '}
                              <i className="far fa-circle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {' '}
                              <i className="far fa-circle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {' '}
                              <i className="far fa-circle"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#."
                              target="_blank"
                              className="social-icon"
                            >
                              {' '}
                              <i className="far fa-circle"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="impkt-light-soft impkt-up">
                        © Copyright 2024 - Impkt.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div className="impkt-hidden-elements">
            <div className="impkt-dodecahedron">
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="impkt-pentagon">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="impkt-arrow"
            >
              <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
            </svg>

            <svg
              width="250"
              viewBox="0 0 300 1404"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="impkt-lines"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                className="impkt-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                className="impkt-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
                className="impkt-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M300 1175H0V1174H300V1175Z"
                className="impkt-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
                className="impkt-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
                className="impkt-move"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
