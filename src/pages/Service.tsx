import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Accordion from '@/components/accordion/accordion';
import { ServiceEntryDocument } from '@/__generated__/graphql';
import CustomRichText from '@/components/custom-rich-text';

const Service: React.FC = (): React.ReactElement => {
  const params = useParams();

  const { data, error, loading } = useQuery(ServiceEntryDocument, {
    variables: { id: params.id! },
  });

  if (loading || !data) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  console.log({ data });

  return (
    <Fragment>
      <div className="impkt-inner-banner">
        <div className="impkt-animation-frame">
          <div
            className="impkt-animation impkt-position-4 impkt-dark impkt-scale"
            data-value-1="6"
            data-value-2="1.4"
          ></div>
        </div>
        <div className="impkt-banner-content impkt-up">
          <div className="container">
            <ul className="impkt-breadcrumbs impkt-mb-60">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to={`/services/${data.serviceEntry?.id}`}>
                  {data.serviceEntry?.title}
                </Link>
              </li>
            </ul>
            <h1 className="impkt-mb-60">
              Branding <br /> and <span className="impkt-thin">Identity</span>{' '}
              Design{' '}
            </h1>
            <a
              href="#service"
              className="impkt-link impkt-dark  impkt-down-arrow"
            >
              <span>About service</span>
            </a>
          </div>
        </div>
      </div>

      <section id="service">
        <div className="container impkt-p-120-90">
          <div className="row justify-content-between">
            <div className="col-lg-4 impkt-relative impkt-mb-90">
              <h4 className="impkt-up impkt-mb-30">
                Your <span className="impkt-thin">Approach</span> <br />
                and <span className="impkt-thin">Work Specifics</span>
              </h4>
              <p className="impkt-up impkt-mb-30">
                At our agency, we have a unique approach to web design and
                development. We believe in creating websites that not only look
                great but also perform well in terms of user experience,
                functionality, and search engine optimization.
              </p>
              <div className="impkt-up">
                <Link to="/projects" className="impkt-link impkt-dark ">
                  <span>View works</span>
                </Link>
              </div>
            </div>
            {/* Main section of the service items accordion */}
            <div className="col-lg-6">
              {data.serviceEntry?.service.map((service) => {
                console.log({ service });
                return (
                  <Accordion key={service.title} title={service.title}>
                    <CustomRichText content={service.description?.raw} />
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="impkt-dark-bg">
        <div className="mi-invert-fix">
          <div className="container impkt-p-120-120">
            <div className="impkt-center">
              <h2 className="impkt-muted impkt-up impkt-mb-30">
                Reasonable <span className="impkt-thin">prices</span>
                <br />
                for innovative <span className="impkt-thin">solutions</span>
              </h2>
              <p className="impkt-light-soft impkt-up impkt-mb-120">
                At our agency, we have a unique approach to web design and
                development. <br />
                We believe in creating in terms of user experience,
                functionality.
              </p>
            </div>

            <a
              href="contact.html"
              className="impkt-price-card impkt-choose impkt-accent-cursor impkt-up"
            >
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="impkt-price-number impkt-mb-30">
                    <span className="impkt-muted impkt-thin">€</span>
                    <span className="impkt-accent">19</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5 className="impkt-muted impkt-mb-30">
                    Tailored Designs for
                    <br /> Every Budget
                  </h5>
                </div>
                <div className="col-lg-4">
                  <p className="impkt-light-soft impkt-mb-30">
                    Tomlo commodi, mollitia atque betae esse itaque a,
                    voluptatibus, suscipit beatae officiis omnis.
                  </p>
                </div>
                <div className="col-lg-2">
                  <div className="impkt-adaptive-right impkt-mb-30">
                    <div className="impkt-button impkt-icon-button-sm "></div>
                  </div>
                </div>
              </div>
            </a>
            <Link
              to="/contact"
              className="impkt-price-card impkt-choose impkt-accent-cursor impkt-up"
            >
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="impkt-price-number impkt-mb-30">
                    <span className="impkt-muted impkt-thin">€</span>
                    <span className="impkt-accent">29</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5 className="impkt-muted impkt-mb-30">
                    Inspiring and Customized <br /> Design Solutions
                  </h5>
                </div>
                <div className="col-lg-4">
                  <p className="impkt-light-soft impkt-mb-30">
                    Tomlo commodi, mollitia atque betae esse itaque a,
                    voluptatibus, suscipit beatae officiis omnis.
                  </p>
                </div>
                <div className="col-lg-2">
                  <div className="impkt-adaptive-right impkt-mb-30">
                    <div className="impkt-button impkt-icon-button-sm "></div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/contact"
              className="impkt-price-card impkt-choose impkt-accent-cursor impkt-up"
            >
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="impkt-price-number impkt-mb-30">
                    <span className="impkt-muted impkt-thin">€</span>
                    <span className="impkt-accent">49</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5 className="impkt-muted impkt-mb-30">
                    Unleashing the Beauty of Space <br /> with Unique Designs
                  </h5>
                </div>
                <div className="col-lg-4">
                  <p className="impkt-light-soft impkt-mb-30">
                    Tomlo commodi, mollitia atque betae esse itaque a,
                    voluptatibus, suscipit beatae officiis omnis.
                  </p>
                </div>
                <div className="col-lg-2">
                  <div className="impkt-adaptive-right impkt-mb-30">
                    <div className="impkt-button impkt-icon-button-sm "></div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/contact"
              className="impkt-price-card impkt-choose impkt-accent-cursor impkt-up impkt-mb-60"
            >
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="impkt-price-number impkt-mb-30">
                    <span className="impkt-muted impkt-thin">€</span>
                    <span className="impkt-accent">199</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5 className="impkt-muted impkt-mb-30">
                    Exquisite Design Concepts <br /> for Discerning Clients
                  </h5>
                </div>
                <div className="col-lg-4">
                  <p className="impkt-light-soft impkt-mb-30">
                    Tomlo commodi, mollitia atque betae esse itaque a,
                    voluptatibus, suscipit beatae officiis omnis.
                  </p>
                </div>
                <div className="col-lg-2">
                  <div className="impkt-adaptive-right impkt-mb-30">
                    <div className="impkt-button impkt-icon-button-sm "></div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="impkt-center">
              <Link to="/contact" className="impkt-button  ">
                <span>individual solution</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container impkt-p-120-90">
          <div className="row align-items-center impkt-mb-30">
            <div className="col-lg-6 impkt-mb-30">
              <h3 className="impkt-up">Other services</h3>
            </div>
            <div className="col-lg-6 impkt-mb-30">
              <div className="impkt-adaptive-right impkt-up">
                <Link to="/services" className="impkt-link impkt-dark ">
                  <span>View all</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <a
                href="branding.html"
                className="impkt-service-card-lg impkt-other-card impkt-more impkt-mb-30"
              >
                <h4 className="impkt-up impkt-mb-30">
                  Branding and <br />
                  Identity Design
                </h4>
                <p className="impkt-descr impkt-up impkt-mb-30">
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </p>
                <ul className="impkt-service-list impkt-dark impkt-mb-30">
                  <li className="impkt-up">UX Audits</li>
                  <li className="impkt-up">Design thinking</li>
                  <li className="impkt-up">Methodologies</li>
                  <li className="impkt-up">Wireframing</li>
                </ul>
                <div className="impkt-link impkt-dark  impkt-up">
                  <span>Read more</span>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="advertising.html"
                className="impkt-service-card-lg impkt-other-card impkt-more impkt-mb-30"
              >
                <h4 className="impkt-up impkt-mb-30">
                  Advertising <br />
                  and Marketing
                </h4>
                <p className="impkt-descr impkt-up impkt-mb-30">
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </p>
                <ul className="impkt-service-list impkt-dark impkt-mb-30">
                  <li className="impkt-up">UX Audits</li>
                  <li className="impkt-up">Design thinking</li>
                  <li className="impkt-up">Methodologies</li>
                  <li className="impkt-up">Wireframing</li>
                </ul>
                <div className="impkt-link impkt-dark  impkt-up">
                  <span>Read more</span>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="consulting.html"
                className="impkt-service-card-lg impkt-other-card impkt-more impkt-mb-30"
              >
                <h4 className="impkt-up impkt-mb-30">
                  Creative <br />
                  Consulting
                </h4>
                <p className="impkt-descr impkt-up impkt-mb-30">
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </p>
                <ul className="impkt-service-list impkt-dark impkt-mb-30">
                  <li className="impkt-up">UX Audits</li>
                  <li className="impkt-up">Design thinking</li>
                  <li className="impkt-up">Methodologies</li>
                  <li className="impkt-up">Wireframing</li>
                </ul>
                <div className="impkt-link impkt-dark  impkt-up">
                  <span>Read more</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Service;
