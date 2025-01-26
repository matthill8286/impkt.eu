import React, { Fragment, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { projectsQuery } from '@/queries/projects';
import { Project } from '@/__generated__/graphql';
import ProjectSwiperImages from '@/components/swiper-images/project-image-swiper';
import Breadcrumbs from '@/components/breadcrumbs';

const ProjectsV2: React.FC = (): ReactElement => {
  const { loading, data, error } = useQuery(projectsQuery);

  console.log({ loading, data, error });

  return (
    <div className="impkt-content">
      <div id="swupMain" className="impkt-main-transition">
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
                  { label: 'Homepage', to: '/' },
                  { label: 'Projects', to: '/projects' },
                ]}
              />
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
        <section id="project">
          <div className="container impkt-p-120-120">
            <div className="swiper-container impkt-1-slider impkt-up">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="impkt-image-frame impkt-horizontal impkt-drag">
                    <img src="img/works/3/1.jpg" alt="image" />
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      href="img/works/3/1.jpg"
                      className="impkt-zoom-btn"
                    >
                      <img src="img/icons/zoom.svg" alt="zoom" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="impkt-image-frame impkt-horizontal impkt-drag">
                    <img src="img/works/3/2.jpg" alt="image" />
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      href="img/works/3/2.jpg"
                      className="impkt-zoom-btn"
                    >
                      <img src="img/icons/zoom.svg" alt="zoom" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="impkt-image-frame impkt-horizontal impkt-drag">
                    <img src="img/works/3/3.jpg" alt="image" />
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      href="img/works/3/3.jpg"
                      className="impkt-zoom-btn"
                    >
                      <img src="img/icons/zoom.svg" alt="zoom" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="impkt-image-frame impkt-horizontal impkt-drag">
                    <img src="img/works/3/4.jpg" alt="image" />
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      href="img/works/3/4.jpg"
                      className="impkt-zoom-btn"
                    >
                      <img src="img/icons/zoom.svg" alt="zoom" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="impkt-info impkt-up">
              <div>
                Client: &nbsp;<span className="impkt-dark">Envato Market</span>
              </div>
              <div>
                Date: &nbsp;<span className="impkt-dark">August 2024</span>
              </div>
              <div>
                Author: &nbsp;<span className="impkt-dark">Paul Trueman</span>
              </div>
            </div>
            <div className="row justify-content-between impkt-p-120-90">
              <div className="col-lg-5">
                <h3 className="impkt-up impkt-mb-60">
                  Simplicity, elegance, innovation!
                </h3>
              </div>
              <div className="col-lg-6">
                <p className="impkt-up impkt-mb-30">
                  A home surveillance camera that pays great attention to
                  security and user privacy, featuring two modes to provide
                  security while protecting personal privacy.The camera has an
                  open and closed mode, we define the product to have clear two
                  sides, expressing two working states and emotions.
                </p>

                <p className="impkt-up impkt-mb-30">
                  Presents a simple and quiet state when not in use, delivering
                  a gentle and security.At the same time, the camera can adapt
                  to a variety of environments, providing elegant ways of wall
                  hanging and standing installation.
                </p>
              </div>
            </div>
            <div className="impkt-works-nav impkt-up">
              <a
                href="project-2.html"
                className="impkt-link impkt-dark impkt-arrow-place impkt-icon-left"
              >
                <span>Prev project</span>
              </a>
              <a href="works.html" className="impkt-link impkt-dark">
                <span>All projects</span>
              </a>
              <a
                href="project-4.html"
                className="impkt-link impkt-dark impkt-arrow-place"
              >
                <span>Next project</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsV2;
