import React from 'react';
import { Link } from 'react-router-dom';

interface PublicationProps {
  to: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: {
    url: string;
    altText: string;
  };
}

export default function Publication({
  to,
  image,
  category,
  date,
  title,
  excerpt,
}: PublicationProps) {
  return (
    <div className="col-lg-6">
      <Link to={to} className="impkt-blog-card impkt-mb-60">
        <div className="impkt-cover-frame impkt-up">
          <img src={image.url} alt={image.altText} />
        </div>
        <div className="impkt-post-descr">
          <div className="impkt-labels impkt-up impkt-mb-30">
            <div className="impkt-label impkt-upper impkt-accent">
              {category}
            </div>
            <div className="impkt-label impkt-upper">{date}</div>
          </div>
          <h4 className="impkt-up impkt-mb-30">{title}</h4>
          <p className="impkt-post-text impkt-up impkt-mb-30">{excerpt}</p>
          <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
            <span>Read more</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
