import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { projectsQuery } from '@/queries/projects';

const Projects: React.FC = (): React.ReactElement => {
  const { loading, data, error } = useQuery(projectsQuery);

  console.log({ loading, data, error });

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
            <ul className="impkt-breadcrumbs impkt-mb-60">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
            <h1 className="impkt-mb-60">
              Designing a <br /> Better{' '}
              <span className="impkt-thin">World Today</span>
            </h1>
            <a
              href="#projects"
              className="impkt-link impkt-dark impkt-arrow-place impkt-down-arrow"
            >
              <span>Our projects</span>
            </a>
          </div>
        </div>
      </div>
      <section id="projects">
        <div className="container impkt-Projects impkt-p-120-60">
          <div className="impkt-lines-place"></div>
          <div className="impkt-lines-place impkt-lines-long"></div>

          <div className="row justify-content-between align-items-end">
            {data?.projects.map((project) => (
              <div className="col-lg-12">
                <Link
                  to={`/project/${project.id}`}
                  className="impkt-Projects-item impkt-more impkt-mb-60"
                >
                  <div className="impkt-cover-frame impkt-hori impkt-up">
                    <div className="impkt-cover">
                      <img src={project.cover.url} alt="cover" />
                    </div>
                  </div>
                  <div className="impkt-descr">
                    <div className="impkt-labels impkt-up impkt-mb-15">
                      <div className="impkt-label impkt-upper impkt-accent">
                        {project.category}
                      </div>
                      <div className="impkt-label impkt-upper">
                        {project.date}
                      </div>
                    </div>
                    <h4 className="impkt-up">{project.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="impkt-soft-bg">
        <div className="container impkt-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="impkt-subtitle impkt-subtitle-right impkt-subtitle-dark impkt-up">
                Looking to make your mark? We will help you turn <br /> your
                project into a success story.
              </span>
            </div>
          </div>
          <div className="impkt-center">
            <h2 className="impkt-up impkt-mb-60">
              Ready to bring your <span className="impkt-thin">ideas to</span>{' '}
              life? <br /> We are
              <span className="impkt-thin">here to help</span>
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

export default Projects;
