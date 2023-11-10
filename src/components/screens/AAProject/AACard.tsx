import { Box, Button, Container, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import TargetLogo from "./assets/target.svg";
import DurationLogo from "./assets/duration.svg";
import FinancialLogo from "./assets/financial.svg";
import ServiceLogo from "./assets/services.svg";
import LanguageLogo from "./assets/language.svg";

export default class AACard extends Component {
  render() {
    return (
      <>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CardContainer>
            <ContentWraperBox>
              <LogoImg src={TargetLogo} alt="target" />
              <TxtWraperBox>
                <ContentHeadTxt>Target Group</ContentHeadTxt>
                <ContentDescTxt>
                  Privete sector, goverment agencies, Ministry of Finance
                  (Revanue Agency)
                </ContentDescTxt>
              </TxtWraperBox>
            </ContentWraperBox>
            <ContentWraperBox>
              <LogoImg src={DurationLogo} alt="target" />
              <TxtWraperBox>
                <ContentHeadTxt>Duration of service</ContentHeadTxt>
                <ContentDescTxt>
                  It depends on the procedures of the government agency and the
                  Ministry of Finance
                </ContentDescTxt>
              </TxtWraperBox>
            </ContentWraperBox>
            <ContentWraperBox>
              <LogoImg src={ServiceLogo} alt="target" />
              <TxtWraperBox>
                <ContentHeadTxt>Service delivery channels</ContentHeadTxt>
                <ContentDescTxt>Our Platform</ContentDescTxt>
              </TxtWraperBox>
            </ContentWraperBox>
            <ContentWraperBox>
              <LogoImg src={LanguageLogo} alt="target" />
              <TxtWraperBox>
                <ContentHeadTxt>
                  The language used for the service
                </ContentHeadTxt>
                <ContentDescTxt>English, Arabic</ContentDescTxt>
              </TxtWraperBox>
            </ContentWraperBox>
            <ContentWraperBox>
              <LogoImg src={FinancialLogo} alt="target" />
              <TxtWraperBox>
                <ContentHeadTxt>Financial compensation</ContentHeadTxt>
                <ContentDescTxt>Free</ContentDescTxt>
              </TxtWraperBox>
            </ContentWraperBox>
            <ServiceBtn>Start the service</ServiceBtn>
            <ContactBtn>Contact Us</ContactBtn>
          </CardContainer>
        </Container>
      </>
    );
  }
}
const CardContainer = styled(Box)({
  height: "483px",
  width: "387px",
  backgroundColor: "#e2e7f1",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "25px 35px ",
  borderRadius: "10px",
});
const ContentWraperBox = styled(Box)({
  display: "flex",
  alignItems: "top",
});
const TxtWraperBox = styled(Box)({
  marginLeft: "10px",
});
const LogoImg = styled("img")({
  height: "25px",
  width: "25px",
});
const ContentHeadTxt = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#354257",
});
const ContentDescTxt = styled(Typography)({
  fontSize: "12px",
  fontWeight: 400,
});
const ServiceBtn = styled(Button)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#ffffff",
  backgroundColor: "#1f3b8a",
  textTransform: "none",
  padding: "10px",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#11296b",
  },
});
const ContactBtn = styled(Button)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
  backgroundColor: "#fff",
  textTransform: "none",
  padding: "10px",
  borderRadius: "10px",
  "&:hover": { backgroundColor: "#f0f1f2" },
});
