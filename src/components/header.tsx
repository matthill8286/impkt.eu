import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
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

      <div className="impkt-preloader">
        <div className="impkt-preloader-animation">
          <div className="impkt-pos-abs impkt-animation-1">
            <p className="impkt-h3 impkt-muted impkt-thin">Pioneering</p>
            <p className="impkt-h3 impkt-muted">Creative</p>
            <p className="impkt-h3 impkt-muted impkt-thin">Excellence</p>
          </div>
          <div className="impkt-pos-abs impkt-animation-2">
            <div className="impkt-reveal-frame">
              <p className="impkt-reveal-box"></p>
              <p className="impkt-h3 impkt-muted impkt-thin">impkt.eu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="impkt-progress-track">
        <div className="impkt-progress"></div>
      </div>

      <div className="impkt-menu-frame">
        <div className="impkt-frame-top">
          <Link to="/" className="impkt-logo">
            Impkt.
          </Link>
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
                    <li className="impkt-has-children">
                      <Link to="/">Homepage</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li className="impkt-active">
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
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
          <Link to="/" className="impkt-logo">
            Impkt.
          </Link>
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
    </div>
  );
}

export default Header;
