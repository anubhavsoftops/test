import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import TargetLogo from "./assets/target.svg";

import DurationLogo from "./assets/duration.svg";
import FinancialLogo from "./assets/financial.svg";
import ServiceLogo from "./assets/services.svg";
import LanguageLogo from "./assets/language.svg";

export default class AAScrvice extends Component {
  render() {
    return (
      <>
        <ServiceContainer>
          <ServiceNameBox>
            <MainHeadingTxt>Sevice Name</MainHeadingTxt>
            <HeadingContainer>
              <Box
                style={{
                  padding: "30px",
                  borderRadius: "100px  ",
                  backgroundColor: "red",
                }}
              />
              <SelerDescBox>
                <DescHeadingTxt>seler name</DescHeadingTxt>
                <RatingStyle size="small" />
                <RatingTxt>4.0(120)</RatingTxt>
              </SelerDescBox>
            </HeadingContainer>
          </ServiceNameBox>

          <Grid container>
            <Grid xs={12} sm={12} md={8} lg={8}>
              <MainContainer>
                <ImgBox>
                  <MainImg
                    src="https://source.unsplash.com/random/1600x1000/?cyberpunk'"
                    alt=""
                  />
                </ImgBox>
                <DescTxt>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                  nesciunt reprehenderit cumque labore vero fuga optio veritatis
                  earum suscipit perspiciatis quas quidem in quaerat accusantium
                  ut nobis ab accusamus non dolorem voluptates assumenda
                  voluptas! Quae rem ab, ipsam vero ipsum qui id, vel recusandae
                  enim sapiente facere repellendus voluptatibus maiores amet.
                  Quo ab ducimus beatae, deleniti aperiam fugiat maiores
                  officiis.
                </DescTxt>
                <TabContainer>
                  <HeaderContainer>
                    <HeaderTabTxt> Required document</HeaderTabTxt>
                    <HeaderTabTxt>The conditions</HeaderTabTxt>
                    <HeaderTabTxt> steps</HeaderTabTxt>
                  </HeaderContainer>
                  <TabDescTxtBox>
                    <Typography>
                      Serveral attachment depend on the type of case
                    </Typography>
                  </TabDescTxtBox>
                </TabContainer>
              </MainContainer>
            </Grid>
            <CardGrid xs={12} sm={12} md={4} lg={4}>
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
                      It depends on the procedures of the government agency and
                      the Ministry of Finance
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
            </CardGrid>
          </Grid>
        </ServiceContainer>
      </>
    );
  }
}
const ServiceContainer = styled(Container)({
  backgroundColor: "#f1f5f9",
});
const ServiceNameBox = styled(Box)({
  padding: "0 10px",
});

const MainHeadingTxt = styled(Typography)({
  fontSize: "35px ",
  fontWeight: "bold",
});
const HeadingContainer = styled(Box)({
  display: "flex",
  marginBottom: "15px",
});
const SelerDescBox = styled(Box)({
  marginLeft: "15px",
});
const DescHeadingTxt = styled(Typography)({
  fontSize: "15px ",
  fontWeight: "bold",
  textTransform: "capitalize",
});
const RatingStyle = styled(Rating)({
  fontSize: "14px",
});
const RatingTxt = styled(Typography)({
  fontSize: "12px",
  color: "#64748b",
});
const MainContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "100%",

  padding: "0 10px",
});

const ImgBox = styled(Box)({
  height: "450px",
  width: "100%",
  backgroundColor: "#0f1729",
  marginBottom: "10px",
  borderRadius: "10px",
});
const MainImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
});
const DescTxt = styled(Typography)({
  fontSize: "15px",
  fontWeight: 400,
  textAlign: "left",
  marginBottom: "50px",
});
const TabContainer = styled(Box)({
  position: "relative",
  backgroundColor: "#cbd5e0",
  height: "250px",
  width: "100%",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginBottom: "15px",
  // padding: "0 20px",
});
const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "450px",
  backgroundColor: "#fff",
  padding: "4px",
  borderRadius: "100px",
  margin: "-25px auto 15px auto",

  "@media (max-width:590px)": {
    width: "330px",
    marginTop: "-20px ",
  },
  "@media (max-width:425px)": {
    width: "270px",
    marginTop: "-15px ",
  },
});
const TabDescTxtBox = styled(Box)({
  padding: "10px 20px 20px 20px",
  "@media (max-width:590px)": {
    padding: "0px 20px 20px 20px",
  },
  "@media (max-width:425px)": {
    padding: "00px 20px 20px 20px",
  },
});

const HeaderTabTxt = styled(Box)({
  padding: " 12px 15px",
  backgroundColor: "#f1f5f9",
  borderRadius: "100px",
  border: "1px solid #95a3b9",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  color: "#424e62",
  "@media (max-width:590px)": {
    fontSize: "12px",
    padding: " 8px 10px",
  },
  "@media (max-width:425px)": {
    fontSize: "10px",
    padding: " 5px 6px",
  },
});
const CardGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});
const CardContainer = styled(Box)({
  height: "483px",
  width: "100%",
  backgroundColor: "#e2e7f1",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "25px 35px ",
  borderRadius: "10px",
  marginLeft: "10px",
  "@media (max-width:958px)": {
    marginLeft: "0",
    width: "510px",
  },
  "@media (max-width:425px)": {
    height: "510px",
  },
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
