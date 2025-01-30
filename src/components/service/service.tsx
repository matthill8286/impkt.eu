import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import CustomRichText from '@/components/custom-rich-text';
import { ServiceProps } from '@/components/service/service.interface';

export const ServiceComponent: FC<ServiceProps> = ({
  id,
  title,
  description,
  services = [],
  readMoreLabel = 'Read more',
}) => {
  return (
    <div className="col-md-6 col-lg-6">
      <div className="impkt-service-card-lg impkt-more impkt-accent-cursor impkt-mb-30">
        <Link to={`/services/${id}`}>
          <h4 className="impkt-muted impkt-up impkt-mb-30">{title}</h4>
        </Link>
        <CustomRichText
          classNameExtension="impkt-light-soft"
          content={description}
        />
        <ul className="impkt-service-list impkt-light impkt-mb-30">
          {services.map((service) => (
            <li key={service.id} className="impkt-up">
              {service.name}
            </li>
          ))}
        </ul>
        <div className="impkt-link impkt-accent  impkt-up">
          <Link to={`/services/${id}`}>
            <span>{readMoreLabel}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
