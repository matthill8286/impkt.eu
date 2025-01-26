import React, { ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ProjectDocument } from '@/__generated__/graphql';
import Breadcrumbs from '@/components/breadcrumbs';
import CustomRichText from '@/components/custom-rich-text';

const ProjectV2: React.FC = (): ReactElement => {
  const params = useParams<{ id: string }>();
  const { loading, data, error } = useQuery(ProjectDocument, {
    variables: {
      id: params.id!,
    },
    skip: !params.id,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
                  { label: data?.project?.title ?? 'Project', to: '/' },
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
        <section id="projects">
          <div className="container impkt-p-120-120">
            <div className="swiper-container impkt-1-slider impkt-up">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="impkt-image-frame impkt-horizontal impkt-drag">
                    <img
                      src={data?.project?.coverImage?.url}
                      alt={data?.project?.coverImage?.altText ?? 'image'}
                    />
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      href={data?.project?.coverImage?.url}
                      className="impkt-zoom-btn"
                    >
                      <img src="/img/icons/zoom.svg" alt="zoom" />
                    </a>
                  </div>
                </div>
                {data?.project?.images.map((image) => (
                  <div className="swiper-slide" key={image.handle}>
                    <div className="impkt-image-frame impkt-horizontal impkt-drag">
                      <img src={image.url} alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup
                        href={image.url}
                        className="impkt-zoom-btn"
                      >
                        <img src="/img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="impkt-info impkt-up">
              <div>
                Client: &nbsp;
                <span className="impkt-dark">{data?.project?.title}</span>
              </div>
              <div>
                Date: &nbsp;
                <span className="impkt-dark">{data?.project?.date}</span>
              </div>
              <div>
                Author: &nbsp;
                <span className="impkt-dark">
                  {data?.project?.author?.name}
                </span>
              </div>
            </div>
            <div className="row justify-content-between impkt-p-120-90">
              <div className="col-lg-5">
                <h3 className="impkt-up impkt-mb-60">{data?.project?.title}</h3>
              </div>
              <div className="col-lg-6">
                <CustomRichText content={data?.project?.content?.json} />
              </div>
            </div>
            <div className="impkt-works-nav impkt-up">
              <a
                href="project-2.html"
                className="impkt-link impkt-dark impkt-arrow-place impkt-icon-left"
              >
                <span>Prev project</span>
              </a>
              <Link to="/projects" className="impkt-link impkt-dark">
                <span>All projects</span>
              </Link>
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

export default ProjectV2;
