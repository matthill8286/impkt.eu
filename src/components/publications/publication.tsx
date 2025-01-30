import React from 'react';
import { Link } from 'react-router-dom';
import { Asset, Maybe, PostContentRichText } from '@/__generated__/graphql';

export interface PublicationProps {
  to: string;
  date: string;
  title: string;
  content: Pick<PostContentRichText, 'json'>;
  image: Maybe<Asset> | undefined;
}

export default function Publication({
  to,
  image,
  date,
  title,
}: PublicationProps) {
  return (
    <Link to={to} className="col-lg-6">
      <div className="impkt-blog-card impkt-mb-60">
        <div className="impkt-cover-frame impkt-up">
          <img src={image?.url} alt={image?.altText ?? 'cover'} />
        </div>
        <div className="impkt-post-descr">
          <div className="impkt-labels impkt-up impkt-mb-30">
            <div className="impkt-label impkt-upper impkt-accent">Design</div>
            <div className="impkt-label impkt-upper">{date}</div>
          </div>
          <h4 className="impkt-up impkt-mb-30">{title}</h4>
          <div className="impkt-link impkt-dark  impkt-up">
            <span>Read more</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
