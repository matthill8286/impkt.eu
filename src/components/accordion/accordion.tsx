import React, { FC, ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className={`impkt-accordion-group impkt-up`}>
      <div
        className="accordion-header impkt-accordion-menu"
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        aria-label={`Toggle ${title}`}
      >
        <p className="accordion-title impkt-accordion-head">{title}</p>
        <div className="impkt-symbol impkt-h3">
          <div className={`${isOpen ? 'impkt-minus' : 'impkt-plus'}`}>
            {isOpen ? '−' : '+'}
          </div>
        </div>
      </div>

      <div
        id={`accordion-content-${title}`}
        className="impkt-accordion-content"
        role="region"
        aria-labelledby={`accordion-header-${title}`}
        style={{
          height: isOpen ? 'auto' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          marginBottom: '20px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
