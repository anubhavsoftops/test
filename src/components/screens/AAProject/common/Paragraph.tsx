// import React from 'react';

// interface ParagraphProps {
//   fontSize?: string;
//   fontFamily?: string;
//   color?: string;
//   fontWeight?: string | number;
//   width?: string | number;
//   lineHeight?: string | number;
//   margin?: string | number;
//   mb?: string | number;
//   padding?: string | number;
//   align?: TextAlign;
//   // cursor?: string ;
//   children: React.ReactNode;
// }
// type TextAlign = "left" | "center" | "right" | "justify";
// const Paragraph: React.FC<ParagraphProps> = ({
//   fontSize,
//   fontFamily,
//   color,
//   fontWeight,
//   width,
//   lineHeight,
//   margin,
//   mb,
//   padding,
//   children,
//   align,
//   // cursor
// }) => {
//   const paragraphStyle = {
//     fontSize: fontSize || 'inherit',
//     fontFamily: fontFamily || 'inherit',
//     color: color || 'inherit',
//     fontWeight: fontWeight || 'normal',
//     width: width || 'auto',
//     lineHeight: lineHeight || 'normal',
//     margin: margin || 0,
//     marginBottom: mb || 0,
//     padding: padding || 0,
//     textAlign: align || 'left',
//     // cursor:cursor ||'none'
//   };

//   return (
//     <p style={paragraphStyle}>
//       {children}
//     </p>
//   );
// };

// export default Paragraph;

import React, { Component } from 'react';

interface ParagraphProps {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  fontWeight?: string | number;
  width?: string | number;
  lineHeight?: string | number;
  margin?: string | number;
  mb?: string | number;
  padding?: string | number;
  align?: TextAlign;
  bgColor?: string ;
  children: React.ReactNode;
  borderRadius?: string | number;
}

type TextAlign = 'left' | 'center' | 'right' | 'justify';

class Paragraph extends Component<ParagraphProps> {
  render() {
    const {
      fontSize,
      fontFamily,
      color,
      fontWeight,
      width,
      lineHeight,
      margin,
      mb,
      padding,
      children,
      align,
      bgColor,
      borderRadius,
    } = this.props;

    const paragraphStyle = {
      fontSize: fontSize || 'inherit',
      fontFamily: fontFamily || 'inherit',
      color: color || 'inherit',
      fontWeight: fontWeight || 'normal',
      width: width || 'auto',
      lineHeight: lineHeight || 'normal',
      margin: margin || 0,
      marginBottom: mb || 0,
      padding: padding || 0,
      textAlign: align || 'left',
      backgroundColor: bgColor || '',
      borderRadius: borderRadius || '',
    };

    return <p style={paragraphStyle}>{children}</p>;
  }
}

export default Paragraph;
