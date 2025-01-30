import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from '@graphcms/rich-text-react-renderer';

interface PostProps {
  id: string;
  title: string;
  coverImage: {
    url: string;
    altText: string;
  };
  author?: string;
  content?: {
    json: any;
  };
  slug?: string;
  date: string;
}

export const Post: FC<PostProps> = ({
  id,
  title,
  author,
  coverImage,
  content,
  date,
}) => {
  return (
    <div className="col-lg-6">
      <Link to={id} className="impkt-blog-card impkt-mb-60">
        <div className="impkt-cover-frame impkt-up">
          <img
            src={coverImage?.url}
            alt={coverImage?.altText ?? 'Image alternative'}
          />
        </div>
        <div className="impkt-post-descr">
          <div className="impkt-labels impkt-up impkt-mb-30">
            <div className="impkt-label impkt-upper impkt-accent">{author}</div>
            <div className="impkt-label impkt-upper">{date}</div>
          </div>
          <h4 className="impkt-up impkt-mb-30">{title}</h4>
          <p className="impkt-post-text impkt-up impkt-mb-30">
            <RichText content={content?.json} />
          </p>
          <div className="impkt-link impkt-dark  impkt-up">
            <span>Read more</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
