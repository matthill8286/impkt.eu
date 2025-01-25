import React from 'react';
import { useQuery } from '@apollo/client';
import { postsQuery } from '@/queries/post';
import { Post } from '@/components/post';
import { Link } from 'react-router-dom';

const Posts: React.FC = (): React.ReactElement => {
  const { loading, error, data } = useQuery(postsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="impkt-inner-banner impkt-p-0-120">
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
                <Link to="/posts">Blog</Link>
              </li>
            </ul>
            <h1 className="impkt-mb-60">
              Exploring <span className="impkt-thin">the World</span> <br />{' '}
              Through Our <span className="impkt-thin">Blog</span>
            </h1>
            <a
              href="#blog"
              className="impkt-link impkt-dark impkt-arrow-place impkt-down-arrow"
            >
              <span>Publications</span>
            </a>
          </div>
        </div>
      </div>
      <section className="impkt-soft-bg" id="blog">
        <div className="container impkt-p-120-60">
          <div className="row align-items-center impkt-mb-30">
            <div className="col-lg-6 impkt-mb-30">
              <h3 className="impkt-up">Popular Publications:</h3>
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
            {loading && !data?.posts && <p>Loading...</p>}
            {data?.posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                date={post.date}
                author={post.author?.name}
                title={post.title}
                coverImage={post.coverImage as any}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
