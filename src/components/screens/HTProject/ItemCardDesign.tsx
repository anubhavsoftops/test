import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  styled,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { data } from "./data";
import CartNavBar from "./CartNavBar";
interface Props {}
interface State {
  value: number;
  products: Array<object>;
}

export default class ItemCarDesign extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0,
      products: data,
    };
  }
  itemCartComponent = (item: any) => {
    return (
      <>
        <CartContainerBox>
          <CartDetailsBox>
            <ImgComponent
              style={webStyles.cart_img}
              //   src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt={item.name}
              src={item.image}
            />
            <Box>
              <CartItemTitleTxt>{item.name}</CartItemTitleTxt>
              <Box style={webStyles.cart_price_container}>
                <Box style={webStyles.cart_price_heading}>
                  <CartDescTxt>Price</CartDescTxt>
                  <CartDescTxt>Size</CartDescTxt>
                  <CartDescTxt>Colour</CartDescTxt>
                </Box>
                <Box style={webStyles.cart_price_details}>
                  <CartDescTxt>: GBP {item.price}</CartDescTxt>
                  <CartDescTxt>: {item.size}</CartDescTxt>
                  <CartDescTxt>: {item.colour}</CartDescTxt>
                </Box>
              </Box>
            </Box>
          </CartDetailsBox>

          <CartBtnBox>
            <RemoveCircleOutlineIcon style={webStyles.btn_icon} />
            <Typography style={webStyles.btn_txt}>
              Quantity : {item.Quantity}
            </Typography>
            <AddCircleOutlineIcon style={webStyles.btn_icon} />
          </CartBtnBox>
        </CartContainerBox>
      </>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Box>
        <Container>
          <CartNavBar />
          {/* Accordion box */}
          {products.map((element: any) => (
            <AccordionBox>
              <AccordionSummaryBox
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <CartTitleTxt>{element.name}</CartTitleTxt>
              </AccordionSummaryBox>
              <AccordionDetailsBox>
                {element.product.map((item: any) =>
                  this.itemCartComponent(item)
                )}
              </AccordionDetailsBox>
            </AccordionBox>
          ))}

          {/* <AccordionBox defaultExpanded>
            <AccordionSummaryBox
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <CartTitleTxt>Living Room Items</CartTitleTxt>
            </AccordionSummaryBox>
            <AccordionDetailsBox></AccordionDetailsBox>
          </AccordionBox> */}
          <hr />
          {/* Referral box */}
          <ReferalBox>
            <ReferalTxt>Designer Referal Code</ReferalTxt>
            <ReferalCodeBox>
              <ReferalCodeTxt>Enter Code</ReferalCodeTxt>
            </ReferalCodeBox>
          </ReferalBox>
          <hr />
          {/* Total Summary  */}
          <TotalSummaryBox>
            <TotalSummaryTxt>Lorem Ipsum</TotalSummaryTxt>
            <TotalSummaryContainer>
              <Box>
                <TotalPrizeDescTxt>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem, ex.
                </TotalPrizeDescTxt>
                <TotalPrizeLightDescTxt>Lorem ipsum</TotalPrizeLightDescTxt>
              </Box>
              <Box>
                <TotalPrizeTxt>GBP 1200</TotalPrizeTxt>
                <TotalPrizeTxt>GBP 200</TotalPrizeTxt>
              </Box>
            </TotalSummaryContainer>
          </TotalSummaryBox>
          <hr />
          {/* Total */}
          <TotalBox>
            <TotalDescBox>
              <TotalSummaryTxt>Lorem Ipsum</TotalSummaryTxt>
              <TotalSummaryTxt>GBP 1500</TotalSummaryTxt>
            </TotalDescBox>
            <OrderBtn>Place order</OrderBtn>
          </TotalBox>
        </Container>
      </Box>
    );
  }
}
const AccordionBox = styled(Accordion)({
  boxShadow: "none",
  "&.MuiAccordion-root.Mui-expanded": {
    margin: "0",
  },
});
const AccordionSummaryBox = styled(AccordionSummary)({
  "& .MuiAccordionSummary-content": {
    margin: "0",
  },
});
const AccordionDetailsBox = styled(AccordionDetails)({
  display: "flex",
  flexDirection: "column",
  "&.MuiAccordionDetails-root": {
    padding: "0px 16px 16px",
  },
});
const CartContainerBox = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px 0",
  "@media (max-width:650px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
const CartDetailsBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width:650px)": {
    width: "100%",
    // flexDirection: "column",
    justifyContent: "flex-start",
  },
});
const ImgComponent = styled("img")({
  height: "160px",
  width: "160px",
  objectFit: "cover",
  borderRadius: "8px",
  marginRight: "1.5rem",
  "@media (max-width:500px)": {
    height: "120px",
    width: "120px",
  },
});
const CartItemTitleTxt = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  "@media (max-width:500px)": {
    fontSize: "1rem",
  },
});
const CartTitleTxt = styled(Typography)({
  fontSize: "1.8rem",
  fontWeight: "bold",
  "@media (max-width:500px)": {
    fontSize: "1.2rem",
  },
});
const CartBtnBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#a27d4d",
  width: "10rem",
  padding: "10px 10px",
  borderRadius: "30px",
  ".Typography": { color: "#000000" },
  "@media (max-width:650px)": {
    marginTop: "15px",
    width: "100%",
  },
});
const CartDescTxt = styled(Typography)({
  fontSize: ".9rem",
  color: "#929494",
  "@media (max-width:500px)": {
    fontSize: "10px",
  },
});
const ReferalBox = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignContent: "center",
  padding: "20px 0",
});
const ReferalCodeBox = styled(Box)({
  width: "15rem",
  border: "1px solid #a27d4d",
  padding: "8px 10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ReferalTxt = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "normal",
});
const ReferalCodeTxt = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#a27d4d",
});
const TotalSummaryBox = styled(Box)({
  padding: "25px 0",
  display: "flex",
  flexDirection: "column",
});
const TotalSummaryTxt = styled(Typography)({
  fontSize: "1.8rem",
});
const TotalSummaryContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
const TotalPrizeTxt = styled(Typography)({
  textAlign: "end",
  fontSize: ".8rem",
});
const TotalPrizeDescTxt = styled(Typography)({
  textAlign: "start",
  fontSize: ".8rem",
});
const TotalPrizeLightDescTxt = styled(Typography)({
  textAlign: "start",
  fontSize: ".8rem",
  fontWeight: "lighter",
});
const TotalBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const TotalDescBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
const OrderBtn = styled(Button)({
  backgroundColor: "#a27d4d",
  color: "#ffffff",
  width: "15rem",
  padding: "10px 0",
  borderRadius: "100px",
  marginTop: "12px",
  "&:hover": {
    backgroundColor: "#956220",
  },
});

const webStyles: Record<string, React.CSSProperties> = {
  cart_price_container: {
    display: "flex",
  },
  cart_price_heading: { marginRight: "2rem" },

  btn_icon: {
    height: "20px",
    width: "20px",
    color: "#fff",
  },
  btn_txt: { color: "#ffffff", fontWeight: "bold", fontSize: "1rem" },
};
