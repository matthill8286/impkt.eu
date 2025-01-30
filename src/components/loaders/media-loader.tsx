import { useState, useEffect, FC } from 'react';

interface ResponsiveMediaLoaderProps {
  src: string;
  type: 'image' | 'video';
  alt?: string;
  className?: string;
  loading: boolean;
  onLoad?: () => void;
}

const MediaLoader: FC<ResponsiveMediaLoaderProps> = ({
  src,
  type,
  alt = '',
  className = '',
  loading,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsLoaded(true);
      onLoad && onLoad();
    }
  }, [loading, onLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad && onLoad();
  };

  return (
    <div className={`relative ${className}`}>
      {/* Spinner for Loading */}
      {loading && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Render Media */}
      {type === 'image' ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          onLoad={handleLoad}
        />
      ) : (
        <video
          src={src}
          className={`w-full h-auto ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          onCanPlay={handleLoad}
          controls
        />
      )}
    </div>
  );
};

export default MediaLoader;
