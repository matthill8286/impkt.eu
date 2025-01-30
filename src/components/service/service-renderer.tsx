import { ServiceComponent } from '@/components/service/service';
import { useQuery } from '@apollo/client';
import { ServiceEntriesDocument } from '@/__generated__/graphql';
import PostLoader from '@/components/loaders/post-loader';

export default function ServiceRenderer() {
  const { loading, error, data } = useQuery(ServiceEntriesDocument);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <section id="services">
      <div className="mi-invert-fix">
        <div className="container impkt-p-120-60">
          <div className="row">
            <div className="col-lg-5">
              <div className="impkt-lines-place impkt-light"></div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {data?.serviceEntries.map((service) => (
                  <PostLoader
                    loading={loading}
                    key={service.id}
                    className="col-lg-6"
                  >
                    <ServiceComponent
                      id={service.id}
                      key={service.id}
                      title={service.title}
                      description={service.description?.raw}
                    />
                  </PostLoader>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
