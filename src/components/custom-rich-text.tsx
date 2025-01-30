import { RichText, RichTextProps } from '@graphcms/rich-text-react-renderer';
import React, { useMemo } from 'react';

interface CustomRichTextProps {
  content: RichTextProps['content'];
  renderers?: RichTextProps['renderers'];
  classNameExtension?: string;
}

export default function CustomRichText({
  content,
  renderers,
  classNameExtension,
}: CustomRichTextProps) {
  const customClass = useMemo(
    () => `${classNameExtension ?? 'impkt-dark'}`,
    [classNameExtension]
  );

  return (
    <div className={`impkt-rich-text ${classNameExtension ?? 'impkt-dark'}`}>
      <RichText
        content={content}
        renderers={{
          ...(renderers ?? {
            h1: ({ children }) => (
              <h1 className={`impkt-mb-60 ${customClass}`}>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className={`impkt-mb-60 ${customClass}`}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className={`impkt-mb-30 ${customClass}`}>{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className={`impkt-mb-20 ${customClass}`}>{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className={`impkt-mb-20 ${customClass}`}>{children}</h5>
            ),
            bold: ({ children }) => (
              <strong className={`impkt-mb-10 ${customClass}`}>
                {children}
              </strong>
            ),
            blockquote: ({ children }) => (
              <blockquote className={`impkt-thin impkt-mb-10 ${customClass}`}>
                {children}
              </blockquote>
            ),
            p: ({ children }) => (
              <p className={`impkt-mb-10 ${customClass}`}>{children}</p>
            ),
          }),
        }}
      />
    </div>
  );
}
