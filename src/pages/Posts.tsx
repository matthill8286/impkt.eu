import React from 'react';
import { useQuery } from '@apollo/client';
import { postsQuery } from '@/queries/post';
import { Post } from '@/components/post';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import PostLoader from '@/components/loaders/post-loader';

const Posts: React.FC = (): React.ReactElement => {
  const { loading, error, data } = useQuery(postsQuery);

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
            <Breadcrumbs
              crumbs={[
                { label: 'Homepage', to: '/' },
                { label: 'Blog', to: '/posts' },
              ]}
            />
            <h1 className="impkt-mb-60">
              Exploring <span className="impkt-thin">the World</span> <br />{' '}
              Through Our <span className="impkt-thin">Blog</span>
            </h1>
            <a href="#blog" className="impkt-link impkt-dark  impkt-down-arrow">
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
                <Link to="/posts" className="impkt-link impkt-dark ">
                  <span>View all</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {data?.posts.map((post) => (
              <PostLoader loading={loading} key={post.id}>
                <Post
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  author={post.author?.name}
                  title={post.title}
                  coverImage={post.coverImage as any}
                />
              </PostLoader>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
