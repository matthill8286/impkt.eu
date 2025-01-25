import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ServiceComponent } from '@/components/service';
import { serviceEntriesQuery } from '@/queries/service-entry';
import { ServiceEntry } from '@/__generated__/graphql';

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
                  className="impkt-link impkt-accent impkt-arrow-place impkt-down-arrow"
                >
                  <span>Our services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section id="services">
          <div className="mi-invert-fix">
            <div className="container impkt-p-120-60">
              <div className="row">
                <div className="col-lg-5">
                  <div className="impkt-lines-place impkt-light"></div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    {data?.serviceEntries.map((service: ServiceEntry) => (
                      <ServiceComponent
                        id={service.id}
                        key={service.id}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
              <Link to="/contact" className="impkt-button impkt-arrow-place">
                <span>Contact us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
