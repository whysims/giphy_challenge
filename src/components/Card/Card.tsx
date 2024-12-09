import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { GiphyData } from "../../models/giphy";

const property = "preview_gif";

export const Card = ({ id, title, images, alt_text }: GiphyData) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <div
      data-id={id}
      className="rounded-sm border-gray-500 overflow-hidden flex h-44 gap-4 bg-white"
    >
      <div className="relative h-44 w-44 overflow-hidden flex-shrink-0 leading-none">
        {!loaded && <Skeleton height="100%" width="100%" />}
        <img
          src={images[property].url}
          alt={title}
          className="w-full h-full object-cover absolute"
          onLoad={() => handleLoad()}
        />
      </div>
      <div className="p-2">
        {title && (
          <p className="text-gray-800 font-medium text-left">{title}</p>
        )}
        {alt_text && (
          <p className="text-sm text-left text-ellipsis text-gray-500">
            {alt_text}
          </p>
        )}
      </div>
    </div>
  );
};
