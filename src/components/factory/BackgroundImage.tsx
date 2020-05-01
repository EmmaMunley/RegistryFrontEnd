import React from "react";

type BackgroundImageProps = {
  isMobile: boolean;
  url?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  isMobile,
  url,
  children,
}) => {
  const responsiveClass = isMobile
    ? "d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"
    : "d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block";
  return (
    <div
      className={`jumbotron ${responsiveClass}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: `cover`,
        width: `100%`,
        margin: 0,
      }}
    >
      {children}
    </div>
  );
};
export default BackgroundImage;
