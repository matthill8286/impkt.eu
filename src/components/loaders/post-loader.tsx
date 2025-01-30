import { useState, useEffect, FC, ReactNode } from 'react';

interface PostLoaderProps {
  loading: boolean;
  children: ReactNode;
  className?: string;
}

const PostLoader: FC<PostLoaderProps> = ({
  loading,
  className = '',
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsLoaded(true);
    }
  }, [loading]);

  return (
    <div className={`relative ${className}`}>
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

      {!loading && isLoaded && children}
    </div>
  );
};

export default PostLoader;
