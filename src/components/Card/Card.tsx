import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { GiphyData } from "../../models/giphy";

const property = "preview_gif";

export const Card = ({ id, title, images, alt_text, url }: GiphyData) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <div
      data-id={id}
      onClick={handleClick}
      className="rounded-sm border-gray-500 overflow-hidden flex flex-col gap-4 bg-white cursor-pointer hover:scale-[102%] transition-transform"
    >
      <div className="relative h-[300px] w-full overflow-hidden flex-shrink-0 leading-none">
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
