import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div
      className={`accordion ${
        isOpen ? 'accordion--open' : 'accordion--closed'
      }`}
      style={{
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <div
        className="accordion-header"
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        aria-label={`Toggle ${title}`}
        style={{
          padding: '12px 16px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isOpen ? '#f0f0f0' : '#ffffff',
          outline: 'none',
          fontSize: '16px',
          lineHeight: '24px',
        }}
      >
        <p
          className="accordion-title"
          style={{
            margin: 0,
            fontWeight: 'bold',
          }}
        >
          {title}
        </p>
        <div
          className="accordion-icon"
          style={{
            fontSize: '24px',
          }}
        >
          {isOpen ? '−' : '+'}
        </div>
      </div>

      <div
        id={`accordion-content-${title}`}
        className="accordion-content"
        role="region"
        aria-labelledby={`accordion-header-${title}`}
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {isOpen && (
          <div
            style={{
              padding: '12px 16px',
              fontSize: '14px',
              lineHeight: '20px',
              backgroundColor: '#ffffff',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
