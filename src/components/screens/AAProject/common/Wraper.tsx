import React from 'react';

interface CustomDivProps {
  display?: string;
  flexDirection?: FlexDirection;
  alignItems?: string;
  justifyContent?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  padding?: string | number;
  margin?: string | number;
  cursor?: string ;
  children?: React.ReactNode;
}

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface CustomDivStyle {
  display?: string;
  flexDirection?: FlexDirection;
  alignItems?: string;
  justifyContent?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  padding?: string | number;
  margin?: string | number;
  cursor?: string ;
  
}

const Wraper: React.FC<CustomDivProps> = ({
  display,
  flexDirection,
  alignItems,
  justifyContent,
  height,
  width,
  borderRadius,
  backgroundColor,
  padding,
  margin,
  children,
  cursor,
  ...restProps
}) => {
  const customDivStyle: CustomDivStyle = {
    display: display || 'block',
    flexDirection: flexDirection || 'row',
    alignItems: alignItems || 'stretch',
    justifyContent: justifyContent || 'flex-start',
    height: height || 'auto',
    width: width || 'auto',
    borderRadius: borderRadius || 0,
    backgroundColor: backgroundColor || 'transparent',
    padding: padding || 0,
    margin: margin || 0,
    cursor: cursor || "inherit",
  };

  return (
    <div style={customDivStyle} {...restProps}>
      {children}
    </div>
  );
};

export default Wraper;
