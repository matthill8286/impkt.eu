import React from 'react';
import { Link } from 'react-router-dom';
import CustomRichText from '@/components/custom-rich-text';
import { CompactServiceItemProps } from '@/components/compact-service/compact-service.interface';

export default function CompactServiceItem({
  to,
  title,
  content,
}: CompactServiceItemProps) {
  return (
    <div className="col-md-6 col-lg-3 impkt-services-grid-item p-0">
      <Link to={to} className="impkt-service-card-sm impkt-up">
        <h5 className="impkt-muted impkt-mb-30">{title}</h5>
        <CustomRichText
          content={content}
          classNameExtension="impkt-light-soft"
        />
        <div className="impkt-button impkt-icon-button-sm "></div>
      </Link>
    </div>
  );
}
