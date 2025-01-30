import Publication from '@/components/publications/publication';
import { Post } from '@/__generated__/graphql';
import PostLoader from '@/components/loaders/post-loader';

interface PublicationContainerProps {
  publications: Pick<
    Post,
    'title' | 'slug' | 'content' | 'coverImage' | 'date' | 'id'
  >[];
  loading: boolean;
  className?: string;
}

export default function PublicationContainer({
  publications,
  loading,
  className,
}: PublicationContainerProps) {
  if (!publications) return null;
  return (
    <>
      {publications.map((publication) => (
        <PostLoader
          loading={loading}
          key={publication.id}
          className={className}
        >
          <Publication
            key={publication?.id}
            to={publication?.id}
            date={publication.date}
            title={publication.title}
            content={publication.content}
            image={publication.coverImage}
          />
        </PostLoader>
      ))}
    </>
  );
}
