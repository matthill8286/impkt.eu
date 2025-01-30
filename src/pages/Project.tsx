import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ProjectDocument } from '@/__generated__/graphql';
import CustomRichText from '@/components/custom-rich-text';
import MediaRenderer from '@/components/media-renderer';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';

const Project: React.FC = (): React.ReactElement => {
  const params = useParams<{ id: string }>();

  const { loading, data, error } = useQuery(ProjectDocument, {
    variables: {
      id: params.id!,
    },
    skip: !params.id,
  });

  return (
    <div id="swupMain" className="container">
      <div className="impkt-menu-content">
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
              <h1 className="impkt-mb-60">{data?.project?.title}</h1>
              <a
                href="#project"
                className="impkt-link impkt-dark  impkt-down-arrow"
              >
                <span>Read more</span>
              </a>
            </div>
          </div>
        </div>
        <section>
          {loading && <p>Loading...</p>}
          {error && <p>Error :(</p>}
          <div className="container impkt-p-120-120" id="project">
            <div className="row justify-content-between impkt-mb-120">
              <div className="col-lg-4">
                <div className="impkt-p-0-120">
                  <ul className="impkt-service-list impkt-dark impkt-mb-60">
                    <li className="impkt-up">
                      Client: &nbsp;
                      <span className="impkt-dark">{data?.project?.title}</span>
                    </li>
                    <li className="impkt-up">
                      Date: &nbsp;
                      <span className="impkt-dark">{data?.project?.date}</span>
                    </li>
                    <li className="impkt-up">
                      Author: &nbsp;
                      <span className="impkt-dark">
                        {data?.project?.author?.name}
                      </span>
                    </li>
                  </ul>
                  <CustomRichText content={data?.project?.content?.json} />
                </div>
              </div>
              <div className="col-lg-7">
                {data?.project?.images.map((image) => (
                  <div className="impkt-image-frame impkt-horizontal impkt-up impkt-mb-30">
                    <MediaRenderer
                      url={image?.url}
                      mimeType={image.mimeType}
                      altText={image?.altText ?? 'project'}
                    />
                    <a
                      data-fancybox="gallery"
                      data-no-swup
                      href={image.url}
                      className="impkt-zoom-btn"
                    >
                      <img src={image.url} alt={image.altText ?? 'zoom'} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
