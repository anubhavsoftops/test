import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

interface State {}
interface Props {}
declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true; // adds the `tablet` breakpoint
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
export default class MDCProductDesc extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container >
          <Box>
            <MainContainer>
              <ProductDescContainer>
                <ProductImgContainer>
                  <ProductImg src="https://source.unsplash.com/random/1600x1000/?bedroom" />
                  <MultiImgContainer>
                    {[1, 2, 3, 4].map((item) => (
                      <MultiImgBox>
                        <ProductImg src="https://source.unsplash.com/random/1600x1000/?bedroom" />
                      </MultiImgBox>
                    ))}
                  </MultiImgContainer>
                </ProductImgContainer>
                <ProductContantContainer>
                  <ContentContainer>
                    <ProductHeadingTxt>Lorem Ipsum</ProductHeadingTxt>
                    <SameDescTxt>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </SameDescTxt>
                    <ProductPriceTxt>GBP 1200</ProductPriceTxt>
                  </ContentContainer>

                  <ContentContainer>
                    <SameHeadingTxt>Description</SameHeadingTxt>
                    <SameDescTxt>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut <MoreSpan>More</MoreSpan>
                    </SameDescTxt>
                  </ContentContainer>
                  <ContentContainer>
                    <SameHeadingTxt>Details & Dimensions</SameHeadingTxt>
                    <ListOfDesc>
                      <ListDescTxt>Product Refernce : xxxxxxxxx</ListDescTxt>
                      <ListDescTxt>Download : xxxxxxxxx</ListDescTxt>
                      <ListDescTxt>Material : xxxxxxxxx</ListDescTxt>
                      <ListDescTxt>Dimensions ( in ) : xxxxxxxxx</ListDescTxt>
                      <ListDescTxt>Dimension ( cm ) : xxxxxxxxx</ListDescTxt>
                    </ListOfDesc>
                  </ContentContainer>
                  <ContentContainer>
                    <SameHeadingTxt>Sizes</SameHeadingTxt>
                    <ProductSizeBox>
                      <SizeTxt>Dim: XXX cm</SizeTxt>
                      <SizeTxt>Dim: XXX cm</SizeTxt>
                      <SizeTxt>Dim: XXX cm</SizeTxt>
                    </ProductSizeBox>
                  </ContentContainer>
                  <ContentContainer>
                    <SameHeadingTxt>Color OPtions</SameHeadingTxt>
                    <ProductColorBox>
                      {["#C8C6B6CC", "#EAE2D7", "#A27D4DCC", "#A27D4DCC"].map(
                        (color) => (
                          <ProductColor style={{ backgroundColor: color }} />
                        )
                      )}
                    </ProductColorBox>
                  </ContentContainer>
                  <ContentContainer>
                    <ProductQuantityBox>
                      <SubIconBtn />
                      <QuantityTxt>Quantity : 1</QuantityTxt>
                      <AddIconBtn />
                    </ProductQuantityBox>
                  </ContentContainer>

                  <CartBtn>ADD TO CART</CartBtn>
                </ProductContantContainer>
              </ProductDescContainer>
              <DescriptionBox>
                <DescriptionImgBox>
                  <DescriptionImg src="https://source.unsplash.com/random/1600x1000/?worker"></DescriptionImg>
                </DescriptionImgBox>
                <DescriptionContantBox>
                  <DescriptionHeadTxt>Extroverso</DescriptionHeadTxt>
                  <DescriptionSubTxt>Manchester UK, Designer</DescriptionSubTxt>
                  <DescriptionTxt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </DescriptionTxt>
                </DescriptionContantBox>
              </DescriptionBox>
            </MainContainer>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const ProductDescContainer = styled(Box)({
  width: "100%",
  height: "850px",
  display: "flex",
  "@media (max-width:1040px)": {
    height: "750px",
  },
  "@media (max-width:768px)": {
    flexDirection: "column",
    height: "980px",
  },
});

const ProductImgContainer = styled(Box)({
  position: "relative",
  width: "60%",
  height: "100%",

  "@media (max-width:768px)": {
    width: "100%",
    height: "480px",
  },
});

const ProductImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
});

const MultiImgContainer = styled(Box)({
  position: "absolute",
  bottom: "0",
  right: "0",
  "@media (max-width:480px)": {
    display: "flex",
    left: "0",
  },
});
const MultiImgBox = styled(Box)({
  height: "80px",
  width: "80px",
  backgroundColor: "transparent",
  margin: "0px 20px 20px 0px",
  borderRadius: "10px",
  border: "2px solid #fff",
  cursor: "pointer",
  "@media (max-width:768px)": {
    height: "60px",
    width: "60px",
  },
  "@media (max-width:480px)": {
    height: "40px",
    width: "40px",
    margin: "0px 0px 15px 15px",
  },
});

const ProductContantContainer = styled(Box)({
  display: "flex",
  width: "40%",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "120px 0 0 50px",

  "@media (max-width:1040px)": {
    padding: "120px 0 0 30px",
  },
  "@media (max-width:768px)": {
    width: "100%",
    padding: "0 20px 0 20px",
    marginTop: "20px",
    height: "70%",
  },
});

const ContentContainer = styled(Box)({});

const ProductHeadingTxt = styled(Typography)({
  fontSize: "32px",
  fontWeight: 400,
  fontStyle: "normal",
  lineHeight: "normal",
  fontFamily: "Raleway",
  color: "rgba(37, 39, 41, 0.80)",
  "@media (max-width:1040px)": {
    fontSize: "20px",
  },
});

const SameHeadingTxt = styled(Typography)({
  fontSize: "24px",
  fontFamily: "Raleway",
  textTransform: "uppercase",
  color: "rgba(37, 39, 41, 0.80)",
  fontWeight: 600,
  "@media (max-width:1040px)": {
    fontSize: "14px",
  },
});

const MoreSpan = styled("span")({
  fontSize: "18px",
  fontStyle: "normal",
  fontFamily: "Raleway",
  fontWeight: 400,
  textDecoration: "underline",

  "@media (max-width:1040px)": {
    fontSize: "12px",
  },
});
const SameDescTxt = styled(Typography)({
  fontSize: "18px",
  fontStyle: "normal",
  fontFamily: "Raleway",
  fontWeight: 400,
  color: "rgba(37, 39, 41, 0.70)",
  "@media (max-width:1040px)": {
    fontSize: "12px",
  },
});

const ProductPriceTxt = styled(Typography)({
  fontSize: "32px",
  fontWeight: 500,
  fontFamily: "Raleway",
  color: "rgba(37, 39, 41, 0.80)",

  "@media (max-width:1040px)": {
    fontSize: "24px",
  },
});

const ListOfDesc = styled("ul")({
  marginLeft: "30px",
});

const ListDescTxt = styled("li")({
  fontSize: "18px",
  fontWeight: 400,
  color: "rgba(37, 39, 41, 0.70)",
  marginBottom: "5px",
  // listStyleType:'dot'
});

const ProductSizeBox = styled(Box)({
  display: "flex",
  marginTop: "10px",
  marginBottom: "10px",
});

const SizeTxt = styled(Typography)({
  border: "1px solid rgba(37, 39, 41, 0.20)",
  padding: "4px 10px",
  fontSize: "12px",
  borderRadius: "30px",
  marginRight: "10px",
  cursor: "pointer",
  color: "rgba(37, 39, 41, 0.70)",
  "@media (max-width:918px)": {
    padding: "4px 6px",
    fontSize: "10px",
  },
});

const ProductColorBox = styled(Box)({
  display: "flex",
  marginLeft: "14px",
});

const ProductColor = styled(Box)({
  height: "24px",
  width: "24px",
  borderRadius: "5px",
  marginRight: "10px",
  cursor: "pointer",
});

const ProductQuantityBox = styled(Box)({
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  width: "220px",
  "@media (max-width:1040px)": {
    width: "220px",
    fontSize: "14px",
  },
});

const QuantityTxt = styled(Typography)({
  color: "rgba(37, 39, 41, 0.80)",
  fontFamily: "roboto",
  fontSize: "24px",
  fontWeight: 700,
});
const AddIconBtn = styled(AddCircleOutlineIcon)({
  height: "24px",
  width: "24px",
  cursor: "pointer",
  color: "#252729CC",
});

const SubIconBtn = styled(RemoveCircleOutlineIcon)({
  height: "24px",
  width: "24px",
  color: "#252729CC",
  cursor: "pointer",
});

const CartBtn = styled(Button)({
  backgroundColor: "#a27d4d",
  color: "#ffffff",
  width: "200px",
  padding: "10px 0",
  fontSize: "18px",
  fontWeight: 500,
  borderRadius: "100px",
  marginTop: "12px",
  "&:hover": {
    backgroundColor: "#956220",
  },
  "@media (max-width:1040px)": {
    width: "150px",
    fontSize: "14px",
  },
});

const DescriptionBox = styled(Box)({
  display: "flex",
  width: "90%",

  margin: "80px 0",
  "@media (max-width:1024px)": {
    flexDirection: "column",
    width: "70%",
  },
  "@media (max-width:550px)": {
    flexDirection: "column",
    width: "90%",
  },
});

const DescriptionImgBox = styled(Box)({
  height: "408px",
  width: "45%",
  "@media (max-width:1024px)": {
    width: "100%",
  },
  "@media (max-width:550px)": {
    height: "250px",
  },
});

const DescriptionImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  borderRadius: "5px",
});

const DescriptionContantBox = styled(Box)({
  width: "65%",
  padding: "0 0 0 40px ",
  "@media (max-width:1024px)": {
    width: "100%",
    padding: "0 5px 0 5px ",
    marginTop: "20px",
  },
});

const DescriptionHeadTxt = styled(Typography)({
  fontSize: "40px",
  marginTop: "-9px",
  fontWeight: 500,
  marginBottom: "20px",
  fontFamily: "Raleway",
  textTransform: "capitalize",
  "@media (max-width:550px)": {
    fontSize: "28px",
  },
});

const DescriptionSubTxt = styled(Typography)({
  fontSize: "30px",
  fontWeight: 400,
  fontFamily: "Raleway",
  marginBottom: "20px",
  textTransform: "capitalize",
  textAlign: "justify",
  "@media (max-width:550px)": {
    fontSize: "18px",
  },
});

const DescriptionTxt = styled(Typography)({
  fontSize: "24px",
  fontWeight: 300,
  fontFamily: "Raleway",
  textTransform: "capitalize",
  "@media (max-width:550px)": {
    fontSize: "14px",
  },
});
