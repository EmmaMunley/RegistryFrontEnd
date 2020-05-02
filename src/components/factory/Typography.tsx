import React from "react";

type TypographyProps = {
  color?: string;
  url?: string;
  textAlign?: string;
  className?: string;
};

export const PrimaryHeader: React.FC<TypographyProps> = ({
  children,
  color,
  textAlign,
  className,
}) => (
  <h1
    className={`${className}`}
    style={{
      color,
      textAlign: "left",
      // textAlign: align
    }}
  >
    {children}
  </h1>
);

export const Paragraph: React.FC<TypographyProps> = ({
  children,
  color,
  textAlign,
}) => (
  <p
    style={{
      color,
      textAlign: "center",
      // textAlign: align
    }}
  >
    {children}
  </p>
);
