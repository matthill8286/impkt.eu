import { useQuery } from '@apollo/client';
import { Post, PostsDocument } from '@/__generated__/graphql';
import PublicationContainer from '@/components/publications/publication-container';

export default function PublicationsRenderer() {
  const { data, loading, error } = useQuery(PostsDocument);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container impkt-p-120-60">
      <div className="row align-items-center impkt-mb-30">
        <div className="col-lg-6 impkt-mb-30">
          <h3 className="impkt-up">Popular Publications:</h3>
        </div>
        <div className="col-lg-6 impkt-mb-30">
          <div className="impkt-adaptive-right impkt-up">
            <a href="blog.html" className="impkt-link impkt-dark ">
              <span>View all</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <PublicationContainer
          loading={loading}
          className="col-lg-6"
          publications={data?.posts.slice(0, 2) as Post[]}
        />
      </div>
    </div>
  );
}
