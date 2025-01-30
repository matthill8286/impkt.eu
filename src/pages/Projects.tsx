import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { projectsQuery } from '@/queries/projects';
import { Project } from '@/__generated__/graphql';
import MediaRenderer from '@/components/media-renderer';

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
              className="impkt-link impkt-dark  impkt-down-arrow"
            >
              <span>Our projects</span>
            </a>
          </div>
        </div>
      </div>
      <section id="projects">
        <div className="container impkt-works impkt-p-120-60">
          <div className="impkt-lines-place"></div>
          <div className="impkt-lines-place impkt-lines-long"></div>
          <div className="row justify-content-between align-items-end">
            {data?.projects.map((project: Project) => {
              console.log({ project });
              return (
                <div className="col-lg-12" key={project.id}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="impkt-works-item impkt-more impkt-mb-60"
                  >
                    <div className="impkt-cover-frame impkt-hori impkt-up">
                      <div className="impkt-cover">
                        <MediaRenderer
                          mimeType={project.coverImage?.mimeType}
                          url={project.coverImage?.url}
                        />
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
                        <div className="impkt-label impkt-upper">
                          {project.author?.name}
                        </div>
                      </div>
                      <h4 className="impkt-up">{project.title}</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Bottom Banner */}
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

export default Projects;
