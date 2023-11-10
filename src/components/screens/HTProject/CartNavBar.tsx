import { Box, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default class CartNavBar extends Component {
  render() {
    return (
      <>
      {/* cartNavBar  */}
        <CartNavbar>
          <LogoBox>
            <LogoImg src={require("./assets/button_logo.png")} alt="" />
          </LogoBox>
          <NavIconBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M20.6667 18.6667H19.6133L19.24 18.3067C20.5918 16.7387 21.3348 14.7369 21.3333 12.6667C21.3333 10.9526 20.825 9.27696 19.8727 7.85173C18.9204 6.4265 17.5669 5.31567 15.9833 4.65971C14.3996 4.00376 12.6571 3.83213 10.9759 4.16653C9.29472 4.50094 7.75047 5.32636 6.53841 6.53841C5.32636 7.75047 4.50094 9.29472 4.16653 10.9759C3.83213 12.6571 4.00376 14.3996 4.65971 15.9833C5.31567 17.5669 6.4265 18.9204 7.85173 19.8727C9.27696 20.825 10.9526 21.3333 12.6667 21.3333C14.8133 21.3333 16.7867 20.5467 18.3067 19.24L18.6667 19.6133V20.6667L25.3333 27.32L27.32 25.3333L20.6667 18.6667ZM12.6667 18.6667C9.34667 18.6667 6.66667 15.9867 6.66667 12.6667C6.66667 9.34667 9.34667 6.66667 12.6667 6.66667C15.9867 6.66667 18.6667 9.34667 18.6667 12.6667C18.6667 15.9867 15.9867 18.6667 12.6667 18.6667Z"
                fill="#252729"
                fill-opacity="0.8"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M29.0973 9.90801C28.9747 9.73077 28.8109 9.5859 28.62 9.48582C28.4291 9.38573 28.2168 9.33341 28.0013 9.33334H9.77864L8.23997 5.64001C8.03822 5.15363 7.69659 4.73812 7.2584 4.44615C6.82021 4.15418 6.30519 3.99891 5.77864 4.00001H2.66797V6.66667H5.77864L12.104 21.8467C12.2053 22.0895 12.3762 22.297 12.5952 22.4429C12.8142 22.5888 13.0715 22.6667 13.3346 22.6667H24.0013C24.5573 22.6667 25.0546 22.3213 25.2506 21.8027L29.2506 11.136C29.3262 10.9342 29.3518 10.717 29.3251 10.5031C29.2984 10.2893 29.2202 10.0851 29.0973 9.90801ZM23.0773 20H14.224L10.8906 12H26.0773L23.0773 20Z"
                fill="#252729"
                fill-opacity="0.8"
              />
              <path
                d="M14 28C15.1046 28 16 27.1046 16 26C16 24.8954 15.1046 24 14 24C12.8954 24 12 24.8954 12 26C12 27.1046 12.8954 28 14 28Z"
                fill="#252729"
                fill-opacity="0.8"
              />
              <path
                d="M23.332 28C24.4366 28 25.332 27.1046 25.332 26C25.332 24.8954 24.4366 24 23.332 24C22.2275 24 21.332 24.8954 21.332 26C21.332 27.1046 22.2275 28 23.332 28Z"
                fill="#252729"
                fill-opacity="0.8"
              />
            </svg>
          </NavIconBox>
        </CartNavbar>
        <StepperBox>
          <StepperTxt>Order Details</StepperTxt>
          <StepperTxt>Address</StepperTxt>
          <StepperTxt>Payment</StepperTxt>
        </StepperBox>
        <Box style={{ marginRight: "20px" }}>
          <ArrowBackIcon />
        </Box>
      </>
    );
  }
}
const CartNavbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const LogoBox = styled(Box)({});
const LogoImg = styled("img")({
  height: "78px",
  width: "225px",
});

const NavIconBox = styled(Box)({
  width: "100px",
  display: "flex",
  justifyContent: "space-between",
});
// const NavIconBox = styled(Box)({});

const StepperBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StepperTxt = styled(Typography)({
  padding: "10px 0",
  fontSize: "15px",
  margin: "0px 35px",
  borderBottom: "2px solid #000",
  cursor: "pointer",
  fontFamily: "Raleway",
});
