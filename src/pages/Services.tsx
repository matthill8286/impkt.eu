import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { serviceEntriesQuery } from '@/queries/service-entries';
import { ServiceEntry } from '@/__generated__/graphql';
import ServiceRenderer from '@/components/service/service-renderer';

const Services: React.FC = (): React.ReactElement => {
  const { loading, error, data } = useQuery(serviceEntriesQuery);

  if (loading && data?.services) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log({ data });

  return (
    <Fragment>
      <div className="impkt-dark-bg">
        <div className="impkt-inner-banner">
          <div className="mi-invert-fix">
            <div className="impkt-banner-content impkt-up">
              <div className="impkt-animation-frame">
                <div
                  className="impkt-animation impkt-position-4 impkt-scale"
                  data-value-1="6"
                  data-value-2="1.4"
                ></div>
              </div>
              <div className="container">
                <ul className="impkt-breadcrumbs impkt-light impkt-mb-60">
                  <li>
                    <Link to="/">Homepage</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                </ul>
                <h1 className="impkt-muted impkt-mb-60">
                  This is <span className="impkt-thin">what</span>
                  <br /> we do <span className="impkt-thin">best</span>
                </h1>
                <a
                  href="#services"
                  className="impkt-link impkt-accent  impkt-down-arrow"
                >
                  <span>Our services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ServiceRenderer />
      </div>
      <section className="impkt-soft-bg">
        <div className="container impkt-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="impkt-subtitle impkt-subtitle-right impkt-subtitle-dark impkt-up">
                Looking to make your mark? We&#39;ll help you turn <br /> your
                project into a success story.
              </span>
            </div>
          </div>
          <div className="impkt-center">
            <h2 className="impkt-up impkt-mb-60">
              Let’s make an <span className="impkt-thin">impkt</span>
              <br /> together. Ready{' '}
              <span className="impkt-thin">when you are</span>
            </h2>
            <div className="impkt-up">
              <Link to="/contact" className="impkt-button">
                <span>Contact us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
