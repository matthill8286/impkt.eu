import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from '@/__generated__/graphql';
import { RichText as Renderer } from '@graphcms/rich-text-react-renderer';

export type Service = {
  id: string;
  name: string;
  description: string;
};

interface ServiceProps {
  id: string;
  title: string;
  description: RichText;
  services?: Service[];
}

export const ServiceComponent: FC<ServiceProps> = ({
  id,
  title,
  description,
  services = [],
}) => {
  return (
    <div className="col-md-6 col-lg-6">
      <Link
        to={`/services/${id}`}
        className="impkt-service-card-lg impkt-more impkt-accent-cursor"
      >
        <h4 className="impkt-muted impkt-up impkt-mb-30">{title}</h4>
        <p className="impkt-descr impkt-light-soft impkt-up impkt-mb-30">
          <Renderer content={description.raw} />
        </p>
        <ul className="impkt-service-list impkt-light impkt-mb-30">
          {services.map((service) => (
            <li key={service.id} className="impkt-up">
              {service.name}
            </li>
          ))}
        </ul>
        <div className="impkt-link impkt-accent impkt-arrow-place impkt-up">
          <span>Read more</span>
        </div>
      </Link>
    </div>
  );
};
