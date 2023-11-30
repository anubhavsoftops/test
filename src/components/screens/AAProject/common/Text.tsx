import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
type TextAlign = "left" | "center" | "right" | "justify";
type FontFamily = "inter" | "poppins" | "montserrat";

interface TextProps {
  size?: "xxs"|"xs" |'sm' |'xl' | '2xl' | '3xl';
  weight?: 'light' | 'bold' | "extraBold";
  variant?: 'primary' | 'secondary' |"lightGrey";
  family?: FontFamily ;

 align?: TextAlign;
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ size, weight, variant,align,children ,family}) => {
  // Define sample font sizes for different sizes
  const fontSize = {
    "xxs":"10px",
    "xs": "12px",
    'sm': '16px',
    'xl': '24px',
    '2xl': '32px',
    '3xl': '40px',
  };

  // Define sample font weights for light and bold
  const fontWeight = {
    light: 300,
    bold: 500,
    extraBold:700
  };

  // Define colors for primary and secondary variants
  const color = {
    primary: '#1E293B',
    secondary: 'gray',
    lightGrey: "94A3B8"
  };

  const textAlign = {
    center: "center",
    left: "left",
    right: "right",
    justify: "justify",
  };

  const fontFamily={
   inter: "inter" ,
   poppins: "poppins" ,
   montserrat: "montserrat"
  }

  // Define the style for the Text component based on props
  const style = {
    fontSize: fontSize[size || "sm"], // Default to 16px if size is not provided
    fontWeight: fontWeight[weight as keyof typeof fontWeight] || 400, // Default to normal (400) if weight is not provided
    color: color[variant || "primary"], // Default to black if variant is not provided
    textAlign: textAlign[align || "left"] as TextAlign,
    fontFamily: fontFamily[family || "inter"]as FontFamily
  };

  return <Typography style={style}>{children}</Typography>;
};

Text.propTypes = {
  size: PropTypes.oneOf(["xxs", "xs", 'sm', 'xl', '2xl', '3xl']),
  weight: PropTypes.oneOf(['light', 'bold',"extraBold"]),
  variant: PropTypes.oneOf(['primary', 'secondary',"lightGrey"]),
  align: PropTypes.oneOf(["center", "left", "right", "justify"]),
  family: PropTypes.oneOf(["inter" , "poppins" , "montserrat" ]),
  children: PropTypes.node.isRequired,
};

export default Text;
