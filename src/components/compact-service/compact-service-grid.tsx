import { useQuery } from '@apollo/client';
import { ServiceEntriesDocument } from '@/__generated__/graphql';
import CompactServiceItem from '@/components/compact-service/compact-service-item';

export default function CompactServiceGrid() {
  const { loading, error, data } = useQuery(ServiceEntriesDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="row impkt-services-grid m-0">
      {data?.serviceEntries.map((service) => (
        <CompactServiceItem
          key={service.id}
          to={`/services/${service.id}`}
          title={service.title}
          content={service.description.raw}
        />
      ))}
    </div>
  );
}
