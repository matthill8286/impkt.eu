import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/breadcrumbs';
import Banner from '@/components/banner';

const Team: React.FC = (): React.ReactElement => {
  return (
    <Fragment>
      <div className="impkt-inner-banner">
        <div className="impkt-banner-content impkt-up">
          <div className="impkt-animation-frame">
            <div
              className="impkt-animation impkt-position-4 impkt-dark impkt-scale"
              data-value-1="6"
              data-value-2="1.4"
            ></div>
          </div>
          <div className="container">
            <Breadcrumbs
              crumbs={[
                { to: '/', label: 'Homepage' },
                { to: '/team', label: 'Team' },
              ]}
            />
            <h1 className="impkt-mb-60">
              Meet <span className="impkt-thin">Our</span>
              <br /> Creative <span className="impkt-thin">Team</span>
            </h1>
            <a
              href="#team"
              className="impkt-link impkt-dark impkt-arrow-place impkt-down-arrow"
            >
              <span>Our team</span>
            </a>
          </div>
        </div>
      </div>

      <section id="team">
        <div className="container impkt-p-120-90">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="impkt-team-card impkt-up impkt-mb-30">
                <img src="/img/faces/cto.jpg" alt="Chief Technology Officer" />
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
                        <a href="#." target="_blank" className="social-icon">
                          {' '}
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#." target="_blank" className="social-icon">
                          {' '}
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#." target="_blank" className="social-icon">
                          {' '}
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
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
                        <a href="#." target="_blank" className="social-icon">
                          {' '}
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#." target="_blank" className="social-icon">
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
      </section>
      <Banner description="Looking to make your mark? We&#39;ll help you turn <br /> your project into a success story." />
    </Fragment>
  );
};

export default Team;
