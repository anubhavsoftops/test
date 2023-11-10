import { Box, Button, Container, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

interface State {}
interface Props {}

export default class MDCProductDesc extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Box>
          <MainContainer>
            <ProductDescContainer>
              <ProductImgContainer>
                <ProductImg src="https://s3-alpha-sig.figma.com/img/512d/f44b/263a763aa111e1043d6b66ccde3e5302?Expires=1698624000&Signature=HATBP63STM6Xjl5WMqoLcyQITKyy-vSN~P-fXdkOXhIU16q111-WAiXw2f5W8UhcwkjhhJpxBPBuX9NPYRuPgCj8RSmJniDF4fXWH03SFLzmjDH3t8GZmZ8WMMpLGDFr~UOCP8GHfBVfaH15XfvIzMBURU7HzUogFdV-qh1JUOsjLp3RZ0JG3B0NL0kLV8E5eztpY8ADwmNSsvGh-Shz7wN6q7k7I7dXmv2-pElKKwAo0-Fa1n0M2dyONvNx414wIelhy3e1LqPVRvfElqXHcK3k~4aoCfhZS0KUgMPqwxKfZiBNHVsrbsH1DVrPNStYBv0Cg7vDsvLxjreuVVNFZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <MultiImgContainer>
                  {[1, 2, 3, 4].map((item) => (
                    <MultiImgBox>
                      <ProductImg src="https://s3-alpha-sig.figma.com/img/512d/f44b/263a763aa111e1043d6b66ccde3e5302?Expires=1698624000&Signature=HATBP63STM6Xjl5WMqoLcyQITKyy-vSN~P-fXdkOXhIU16q111-WAiXw2f5W8UhcwkjhhJpxBPBuX9NPYRuPgCj8RSmJniDF4fXWH03SFLzmjDH3t8GZmZ8WMMpLGDFr~UOCP8GHfBVfaH15XfvIzMBURU7HzUogFdV-qh1JUOsjLp3RZ0JG3B0NL0kLV8E5eztpY8ADwmNSsvGh-Shz7wN6q7k7I7dXmv2-pElKKwAo0-Fa1n0M2dyONvNx414wIelhy3e1LqPVRvfElqXHcK3k~4aoCfhZS0KUgMPqwxKfZiBNHVsrbsH1DVrPNStYBv0Cg7vDsvLxjreuVVNFZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </MultiImgBox>
                  ))}
                </MultiImgContainer>
              </ProductImgContainer>
              <ProductContantContainer>
                <ContentContainer>
                  <ProductHeadingTxt>Lorem Ipsum</ProductHeadingTxt>
                  <SameDescTxt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </SameDescTxt>
                  <ProductPriceTxt>GBP 1200</ProductPriceTxt>
                </ContentContainer>

                <ContentContainer>
                  <SameHeadingTxt>Description</SameHeadingTxt>
                  <SameDescTxt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut More
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
                    <Typography>Quantity : 1</Typography>
                    <AddIconBtn />
                  </ProductQuantityBox>
                </ContentContainer>

                <CartBtn>ADD TO CART</CartBtn>
              </ProductContantContainer>
            </ProductDescContainer>
            <DescriptionBox>
              <DescriptionImgBox>
                <DescriptionImg src="https://s3-alpha-sig.figma.com/img/383e/9853/f4ce9323e34a6dcb60437957349134f7?Expires=1698624000&Signature=H9jnyGKhlJ-~9Grzc05aNttqcr3dwEa0khbLCfN8okoDfiHmLoHC9woi2B~ooqrC4g8gIo33PBsWgmyKZdzcpq7i9RLiBbqTKJTCSMJSWlEm33XE5w8JPFgOy-4IJQFWRjo1IyIrPpo1Vfya1SmhMkphGYqPZS3CsMXS3DnW-pZkKLGXq4MDfhcOhSy0rxUisokYrMGoA8omyWCxoaeiWVYzoNYKctwobSNf2F1hJeYY~MFOKd~~Ah0P7vLueVWIgXVR2xO-zsboN-AuzzTxfYF5qCyp0LUowSN24WsEFkw104m8Nno4Pdzxx8vwHILTNglPLcHbew0Dh2~Ro3Zg~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></DescriptionImg>
              </DescriptionImgBox>
              <DescriptionContantBox>
                <DescriptionHeadTxt>Extroverso</DescriptionHeadTxt>
                <DescriptionSubTxt>Manchester UK, Designer</DescriptionSubTxt>
                <DescriptionTxt>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </DescriptionTxt>
              </DescriptionContantBox>
            </DescriptionBox>
          </MainContainer>
        </Box>
      </>
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
  height: "750px",
  display: "flex",
  "@media (max-width:1040px)": {
    height: "650px",
  },
  "@media (max-width:768px)": {
    flexDirection: "column",
    height: "980px",
  },
});

const ProductImgContainer = styled(Box)({
  position: "relative",
  width: "55%",
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
});
const MultiImgBox = styled(Box)({
  height: "80px",
  width: "80px",
  backgroundColor: "red",
  margin: "0px 20px 20px 0px",
  borderRadius: "10px",
  border: "2px solid #fff",
  cursor: "pointer",
  "@media (max-width:768px)": {
    height: "60px",
    width: "60px",
  },
});

const ProductContantContainer = styled(Box)({
  display: "flex",
  width: "65%",
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
  fontSize: "25px",
  fontFamily: "Raleway",
  "@media (max-width:1040px)": {
    fontSize: "20px",
  },
});

const SameHeadingTxt = styled(Typography)({
  fontSize: "20px",
  fontFamily: "Raleway",
  textTransform: "uppercase",
  fontWeight: 600,
  "@media (max-width:1040px)": {
    fontSize: "14px",
  },
});

const SameDescTxt = styled(Typography)({
  fontSize: "14px",
  fontFamily: "Raleway",
  fontWeight: 400,
  "@media (max-width:1040px)": {
    fontSize: "12px",
  },
});

const ProductPriceTxt = styled(Typography)({
  fontSize: "28px",
  fontWeight: 500,
  fontFamily: "Raleway",
  "@media (max-width:1040px)": {
    fontSize: "24px",
  },
});

const ListOfDesc = styled("ul")({
  marginLeft: "30px",
});

const ListDescTxt = styled("li")({
  fontSize: "14px",
  fontWeight: 300,
});

const ProductSizeBox = styled(Box)({ display: "flex" });

const SizeTxt = styled(Typography)({
  border: "1px solid rgba(37, 39, 41, 0.70)",
  padding: "4px 10px",
  fontSize: "12px",
  borderRadius: "30px",
  marginRight: "10px",
  cursor: "pointer",
});

const ProductColorBox = styled(Box)({
  display: "flex",
});

const ProductColor = styled(Box)({
  height: "24px",
  width: "24px",
  backgroundColor: "red",
  borderRadius: "5px",
  marginRight: "10px",
  cursor: "pointer",
});

const ProductQuantityBox = styled(Box)({
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",

  width: "160px",

  ".Typography": { color: "#000000" },
  "@media (max-width:1040px)": {
    width: "150px",
    fontSize: "14px",
  },
});

const AddIconBtn = styled(AddCircleOutlineIcon)({
  height: "20px",
  width: "20px",
  cursor: "pointer",
});

const SubIconBtn = styled(RemoveCircleOutlineIcon)({
  height: "20px",
  width: "20px",
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
  fontSize: "35px",
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
  fontSize: "24px",
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
  fontSize: "18px",
  fontWeight: 300,
  fontFamily: "Raleway",
  textTransform: "capitalize",
  "@media (max-width:550px)": {
    fontSize: "14px",
  },
});
