import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
  withStyles,
} from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";
import React, { Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Label } from "@material-ui/icons";

export default class Exective extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      steps: ["Getting know you", "Crate your account", "Select your coach"],
      Qns1: ["Yes", "I am new to coaching"],
      isSelected: false,
      optionSeleted: false,
      selectedIndex: null,
    };
  }
  handleNext = () => {
    if (this.state.activeStep !== this.state.steps.length - 1) {
      this.setState((prevState) => ({ activeStep: prevState.activeStep + 1 }));
    }
  };

  handleBack = () => {
    if (this.state.activeStep !== 0) {
      this.setState((prevState) => ({ activeStep: prevState.activeStep - 1 }));
    }
  };
  selectAns = (index) => {
    this.state.Qns1.map((opt, stateIndex) => {
      if (index === stateIndex) {
        this.setState({
          optionSeleted: true,
          selectedIndex: index,
        });
      }
    });
  };
  render() {
    return (
      <>
        <Grid container spacing={0}>
          <Hidden smDown>
            <Grid style={{ height: "100vh" }} item xs={0} md={5}>
              <ImageContainer>
                <Box
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: "5",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0), #630FE7),url('your-image.jpg') center/cover no-repeat",
                  }}
                />
                <LogoContainer>
                  <img src={require("./assets/image_Logo.png")} alt="" />
                </LogoContainer>
                <ImgTxt>
                  Unlock Your Potential,
                  <br /> Ignite Personal Growth
                </ImgTxt>
              </ImageContainer>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={7}>
            <ContentContainer>
              <ContentWraper>
                <MainHeding>It’s all about you</MainHeding>
                <Stepper
                  style={{ width: "100%", backgroundColor: "inherit" }}
                  alternativeLabel
                  activeStep={this.state.activeStep}
                  connector={<QontoConnector />}
                >
                  {this.state.steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                {this.state.activeStep === 0 && (
                  <>
                    <QnsHeading>Have you tried coaching before?</QnsHeading>
                    {this.state.Qns1.map((label, index) => (
                      <>
                        <OptBox 
                          key={index}
                          style={
                            this.state.optionSeleted &
                            this.state.selectedIndex === index
                              ? webStyles.activeAns
                              : webStyles.disableAns
                          }
                          onClick={() => this.selectAns(index)}
                        >
                          <AnsTxt>{label}</AnsTxt>
                        </OptBox>
                      </>
                    ))}
                  </>
                )}
                {this.state.activeStep === 1 && (
                  <>
                    <QnsHeading>
                      What would you like the coach to help you with?
                    </QnsHeading>
                    <OptBox>
                      <AnsTxt>
                        A partner to accelerate my professional performance and
                        growth
                      </AnsTxt>
                    </OptBox>
                    <OptBox>
                      <AnsTxt>Achieve clarity and do more with my life </AnsTxt>
                    </OptBox>
                  </>
                )}
                {this.state.activeStep === 2 && (
                  <>
                    <QnsHeading>
                      How do you prefer to communicate with your coach?
                    </QnsHeading>
                    <OptBox>
                      <AnsTxt>Mostly via face-to-face session</AnsTxt>
                    </OptBox>
                    <OptBox>
                      <AnsTxt>Mostly via phone or video session</AnsTxt>
                    </OptBox>
                    <OptBox>
                      <AnsTxt>Not sure yet decide later</AnsTxt>
                    </OptBox>
                  </>
                )}

                <ButtonContainer>
                  <ArrowBackIosIcon
                    style={
                      this.state.activeStep === 0
                        ? webStyles.disableIcon
                        : webStyles.activeIcon
                    }
                    onClick={this.handleBack}
                  />
                  <NextButton
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {this.state.activeStep === this.state.steps.length - 1
                      ? "Finish"
                      : "Next"}
                  </NextButton>
                </ButtonContainer>
              </ContentWraper>
            </ContentContainer>
          </Grid>
        </Grid>
      </>
    );
  }
}
//   "& .MuiStepIcon-root": {},
//   "& .MuiStepIcon-root.MuiStepIcon-completed": {
//     backgroundColor: "#4CE09E",
//   },
//   "& .MuiStepIcon-root.MuiStepIcon-active": {
//     backgroundColor: "#4CE09E",
//   },
//   "& .MuiSvgIcon-root": {
//     border: "2px solid #630FE7",
//     borderRadius: "100px",
//   },
// });

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const ImageContainer = styled(Box)({
  height: "100vh",
  width: "100%",
  backgroundColor: "lightblue",
  borderRadius: "0 80px 80px 0 ",
  backgroundImage: "url(https://source.unsplash.com/random/1600x1000/?dubai)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  zIndex: 4,
  overflow: "hidden",
});
const LogoContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  margin: "30px 0 0 30px",
});
const ImgTxt = styled(Box)({
  fontSize: "34px",
  fontFamily: "open sans",
  fontWeight: 600,
  color: "#edefee",
  textAlign: "center",
  marginBottom: "40px",
  zIndex: 6,
});
const ContentContainer = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});
const ContentWraper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "563px",
  "@media (max-width:630px)": {
    width: "90%",
  },
});
const MainHeding = styled(Typography)({
  color: "#390689",
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "22.67px",
  fontFamily: "martian mono",
  marginBottom: "10px",
  "@media (max-width:530px)": {
    fontSize: "24px",
  },
});
const QnsContainer = styled(Box)({
  width: "100%",
  height: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});
const QnsHeading = styled(Typography)({
  color: "#630fe7",
  fontSize: "24px",
  textAlign: "center",
  marginTop: "100px", // <-- margin
  marginBottom: "40px",
  "@media (max-width:530px)": {
    fontSize: "20px",
  },
});
const OptBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#4ce09e",
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  marginBottom: "12px",
  "@media (max-width:530px)": {
    padding: "6px",
  },
});
const AnsTxt = styled(Typography)({
  fontSize: "20px",
  color: "#390689 ",
  fontWeight: 400,
  lineHeight: "28.12px",
  textAlign: "center",
  "@media (max-width:530px)": {
    fontSize: "16px",
  },
});
const ButtonContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "60px",
});
const NextButton = styled(Button)({
  width: "100px",
  "&.MuiButton-root": {
    minWidth: "135px",
    borderRadius: "100px",
    textTransform: "capitalize",
    backgroundColor: "#630fe7",
  },
});
const Buttons = styled(Box)({});

const webStyles = {
  disableIcon: {
    color: "lightgrey",
    cursor: "not-allowed",
  },
  activeIcon: {
    color: "#390689",
    cursor: "pointer",
  },
  disableAns: {
    backgroundColor: "#fff",
    border: "1px solid #707070",
  },
  activeAns: {
    backgroundColor: "#4ce09e",
  },
};
