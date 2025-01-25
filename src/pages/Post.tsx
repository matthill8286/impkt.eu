import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { postByIdQuery } from '@/queries/post';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Post: React.FC = (): React.ReactElement | string => {
  const params = useParams();

  const { loading, error, data } = useQuery(postByIdQuery, {
    variables: { id: params.id! },
  });

  console.log(params);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Fragment>
      <div className="impkt-inner-banner">
        <div className="impkt-banner-content impkt-center impkt-up">
          <div className="container">
            <ul className="impkt-breadcrumbs impkt-center impkt-mb-60">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/posts">Blog</Link>
              </li>
              <li>
                <Link to="/posts">Publication</Link>
              </li>
            </ul>
            <h2>
              How to Become a <span className="impkt-thin">Graphic</span>
              <br /> Designer in{' '}
              <span className="impkt-thin">10 Simple Steps</span>
            </h2>
          </div>
        </div>
      </div>
      <section id="blog">
        <div className="container impkt-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="impkt-image-frame impkt-horizontal impkt-up">
                <img
                  src={data?.post?.coverImage?.url}
                  alt="Publication cover"
                  className="impkt-scale"
                  data-value-1=".90"
                  data-value-2="1.15"
                />
              </div>
              <div className="impkt-info impkt-up impkt-mb-90">
                <div>
                  Category: &nbsp;<span className="impkt-dark">Technology</span>
                </div>
                <div>
                  Date: &nbsp;
                  <span className="impkt-dark">{data?.post?.date}</span>
                </div>
                <div>
                  Author: &nbsp;
                  <span className="impkt-dark">{data?.post?.author?.name}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <RichText
                content={data?.post?.content.json}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="impkt-mb-60">{children}</h1>
                  ),
                  bold: ({ children }) => <strong>{children}</strong>,
                }}
              />

              <div className="row">
                <div className="col-lg-6">
                  <div className="impkt-image-frame impkt-horizontal impkt-up impkt-mb-30">
                    <img src="/img/blog/4.jpg" alt="Publication cover" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="impkt-image-frame impkt-horizontal impkt-up impkt-mb-60">
                    <img src="/img/blog/7.jpg" alt="Publication cover" />
                  </div>
                </div>
              </div>

              <p className="impkt-up impkt-mb-60">
                Remember that creativity is at the core of graphic design.
                Embrace your creativity, experiment with different ideas, and
                think outside the box to create unique and impktful designs.
                Don&#39;t be afraid to take risks and push the boundaries of
                traditional design. Steve Jobs once said:
              </p>

              <blockquote className="impkt-up impkt-mb-60">
                &#34;Design is not just what it looks like and feels like.
                Design is how it works.&#34; So go ahead, unleash your
                creativity, and embark on your path to becoming a graphic
                designer!
              </blockquote>

              <p className="impkt-up impkt-mb-30">
                In addition to the aforementioned steps, other important aspects
                of becoming a graphic designer include networking with industry
                professionals, staying updated on design trends and
                technologies, and continuously learning and improving your
                skills.
              </p>

              <p className="impkt-up impkt-mb-30">
                Becoming a graphic designer is an exciting journey that requires
                dedication, hard work, and a genuine passion for design. By
                following these 10 simple steps, you&#39;ll be well on your way
                to establishing yourself as a skilled graphic designer and
                opening doors to a rewarding and fulfilling career.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="impkt-soft-bg">
        <div className="container impkt-p-120-60">
          <div className="row align-items-center impkt-mb-30">
            <div className="col-lg-6 impkt-mb-30">
              <h3 className="impkt-up">Similar Publications:</h3>
            </div>
            <div className="col-lg-6 impkt-mb-30">
              <div className="impkt-adaptive-right impkt-up">
                <a
                  href="blog-inner.html"
                  className="impkt-link impkt-dark impkt-arrow-place"
                >
                  <span>View all</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <a
                href="publication.html"
                className="impkt-blog-card impkt-mb-60"
              >
                <div className="impkt-cover-frame impkt-up">
                  <img src="/img/blog/8.jpg" alt="cover" />
                </div>
                <div className="impkt-post-descr">
                  <div className="impkt-labels impkt-up impkt-mb-30">
                    <div className="impkt-label impkt-upper impkt-accent">
                      TECHNOLOGY
                    </div>
                    <div className="impkt-label impkt-upper">may 24 2023</div>
                  </div>
                  <h4 className="impkt-up impkt-mb-30">
                    How to Become a Graphic Designer in 10 Simple Steps
                  </h4>
                  <p className="impkt-post-text impkt-up impkt-mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius sequi commodi dignissimos optio, beatae, eos
                    necessitatibus nisImpkt. Nam cupiditate consectetur nostrum
                    qui! Repellat natus nulla, nisi aliquid, asperiores impedit
                    tempora sequi est reprehenderit cumque explicabo, dicta. Rem
                    nihil ullam totam ea voluptas quibusdam repudiandae id ut at
                    iure! Totam, a!
                  </p>
                  <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
                    <span>Read more</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="publication.html"
                className="impkt-blog-card impkt-mb-60"
              >
                <div className="impkt-cover-frame impkt-up">
                  <img src="/img/blog/1.jpg" alt="cover" />
                </div>
                <div className="impkt-post-descr">
                  <div className="impkt-labels impkt-up impkt-mb-30">
                    <div className="impkt-label impkt-upper impkt-accent">
                      TECHNOLOGY
                    </div>
                    <div className="impkt-label impkt-upper">may 24 2023</div>
                  </div>
                  <h4 className="impkt-up impkt-mb-30">
                    16 Best Graphic Design Online and Offline Courses
                  </h4>
                  <p className="impkt-post-text impkt-up impkt-mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius sequi commodi dignissimos optio, beatae, eos
                    necessitatibus nisImpkt. Nam cupiditate consectetur nostrum
                    qui! Repellat natus nulla, nisi aliquid, asperiores impedit
                    tempora sequi est reprehenderit cumque explicabo, dicta. Rem
                    nihil ullam totam ea voluptas quibusdam repudiandae id ut at
                    iure! Totam, a!
                  </p>
                  <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
                    <span>Read more</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Post;
