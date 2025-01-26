import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from '@/__generated__/graphql';
import CustomRichText from '@/components/custom-rich-text';

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
      <div className="impkt-service-card-lg impkt-more impkt-accent-cursor">
        <Link to={`/services/${id}`}>
          <h4 className="impkt-muted impkt-up impkt-mb-30">{title}</h4>
        </Link>
        <CustomRichText content={description.raw} />
        <ul className="impkt-service-list impkt-light impkt-mb-30">
          {services.map((service) => (
            <li key={service.id} className="impkt-up">
              {service.name}
            </li>
          ))}
        </ul>
        <div className="impkt-link impkt-accent impkt-arrow-place impkt-up">
          <Link to={`/services/${id}`}>
            <span>Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
