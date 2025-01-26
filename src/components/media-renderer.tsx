import React from 'react';
import { Maybe } from '@/__generated__/graphql';

interface MediaProps {
  url?: string;
  mimeType?: Maybe<string> | undefined;
  altText?: string;
}

const MediaRenderer: React.FC<MediaProps> = ({ url, mimeType, altText }) => {
  if (mimeType === 'video/mp4' || mimeType === 'video/quicktime') {
    return (
      <video
        style={{ height: '100%' }}
        src={url}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    );
  } else if (mimeType?.startsWith('image/')) {
    return <img src={url} alt={altText ?? 'media'} />;
  } else {
    return <p>Unsupported media type</p>;
  }
};

export default MediaRenderer;
