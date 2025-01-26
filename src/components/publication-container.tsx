import React, { Fragment } from 'react';
import Publication from '@/components/publication';
import { Post } from '@/__generated__/graphql';

interface PublicationContainerProps {
  publications: Pick<
    Post,
    'title' | 'slug' | 'content' | 'coverImage' | 'date' | 'id'
  >[];
}

export default function PublicationContainer({
  publications,
}: PublicationContainerProps) {
  if (!publications) return null;
  return (
    <Fragment>
      {publications.map((publication) => (
        <Publication
          key={publication?.id}
          to={publication?.id}
          date={publication.date}
          title={publication.title}
          content={publication.content}
          image={publication.coverImage}
        />
      ))}
    </Fragment>
  );
}
