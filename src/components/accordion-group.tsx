import React, { FC, ReactElement } from "react";

interface AccordionGroupProps {
  title: string;
  children: NonNullable<ReactElement>;
}

export const AccordionGroup: FC<AccordionGroupProps> = ({
  title,
  children,
}) => {
  return (
    <div className="impkt-accordion-group impkt-up">
      <div className="impkt-accordion-menu">
        <p className="impkt-accordion-head">{title}</p>

        <div className="impkt-symbol impkt-h3">
          <div className="impkt-plus">+</div>
          <div className="impkt-minus">-</div>
        </div>
      </div>
      <div className="impkt-accordion-content">{children}</div>
    </div>
  );
};
