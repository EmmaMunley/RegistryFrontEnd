import React from "react";

type ButtonProps = {
  url: string;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ url, children }) => {
  return (
    <React.Fragment>
      <a className="btn btn-primary btn-lg btn-block " href={url} role="button">
        {children}
      </a>
    </React.Fragment>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ url, children }) => {
  return (
    <React.Fragment>
      <a
        className="btn btn-secondary btn-lg btn-block "
        href={url}
        role="button"
      >
        {children}
      </a>
    </React.Fragment>
  );
};
