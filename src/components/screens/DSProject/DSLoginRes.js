import React, { Component } from "react";

import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import {
  Container,
  Box,
  Button,
  Typography,
  TextField,
  OutlinedInput,
  Paper,
  ThemeProvider,
  InputAdornment,
  IconButton,
  InputLabel,
  Link,
} from "@material-ui/core";
import { createTheme, styled } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
// import { Path25 } from "./assets"
// import { Path2 } from "./assets"
// import { Path24 } from "./assets"
// import { Path26 } from "./assets"
// import { Path1 } from "./assets"
// import { FinalLogo1 } from "./assets";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import CloseIcon from "@material-ui/icons/Close";
const TopContainer = styled(Box)({
  width: "100vw",
});
const MainLogoImgBox = styled(Box)({
  // position: "absolute",
  // left: "120px",
  // right: "1193px",
  // bottom: "920px",
  // top: "94px",
  // "@media (max-width:1024px)": {
  //   left: "40px",
  // top:'60px'
  // },
  // "@media (max-width:584px)": {
  //   left: "10px",
  // top:'20px'
  // },
  margin:'25px 0 0 25px '
});
const MainLogoImg = styled("img")({
 
});
const FooterBackImg = styled(Box)({
  width: "100%",
  height: "300px",
  background: "url(./assets/group_bg.png)",
  
});
const FormContainer = styled(Paper)({
  width: 500,
  height: "500px",
  borderRadius: "var(--1, 8px)",
  background: "var(--basic-white, #FFF)",
  boxShadow:
    "0px 8px 32px 0px rgba(135, 96, 169, 0.16), 0px 4px 8px 0px rgba(135, 96, 169, 0.13)",
});

const webStyle = {
  topFinallogo: {
    position: "absolute",
    left: "120px",
    right: "1193px",
    bottom: "920px",
    top: "94px",
  },
  inputStyle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: "100%",
    height: "45px",
    marginTop: "40px",
    border: "none",
    backgroundColor: "rgb(98, 0, 238)",
  },
  pprBoxWrapper: {
  
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  pprLogin: {
    width: 500,
    height: "600px",
    borderRadius: "var(--1, 8px)",
    background: "var(--basic-white, #FFF)",
    boxShadow:
      "0px 8px 32px 0px rgba(135, 96, 169, 0.16), 0px 4px 8px 0px rgba(135, 96, 169, 0.13)",
  },
  footerMainWrapperLogin: {
    // display: "flex",
    // // justifyContent: "space-between",
    width: "100vw",
    // position: "absolute",
    bottom: "0",
    zIndex: "10",
  },
  footerImg: {
    // height:'300px',
    width: "100vw",
    // position:'absolute',
    objectFit: "cover",
  },
  // path2StyleLogin: {
  //   position: "absolute",
  //   zIndex: 1,
  //   bottom: 0,
  // },
  // path1StyleLogin: {
  //   position: "absolute",
  //   zIndex: 1,
  //   bottom: 0,
  //   left: 0,
  // },
  // path24StyleLogin: {
  //   position: "absolute",
  //   zIndex: 1,
  //   bottom: 0,
  //   right: 0,
  // },
  // path25StyleLogin: {
  //   position: "absolute",
  //   zIndex: 1,
  //   bottom: 0,
  //   right: "45px",
  // },
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 12,
  marginBottom: "20px",
  borderRadius: "0px 0px var(--1, 8px) var(--1, 8px)",
  background: "var(--basic-white, #FFF)",
};

const StyledLink = styled(Link)({
  cursor: "pointer",
});

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup
//     .string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//       'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
//     ),
// });

// Customizable Area End

// import EmailAccountLoginController,  from "./EmailAccountLoginController";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8760A9",
      contrastText: "#fff",
    },
  },
});

export default class EmailAccountLoginBlock extends Component {
  // constructor(props: Props) {
  //   super(props);
  // }

  render() {
    return (
      // Required for all blocks
      <ThemeProvider theme={theme}>
        {/* <Container
          style={{
            maxWidth: 1440,
            minHeight: "100vh",
            height: "1024px",
            overflow: "hidden",
            margin: "0 auto",
          }}
        > */}
        {/* {this.state.apiErrorResponse && toast.error(this.state.apiErrorResponse)} */}
        <TopContainer>
          <MainLogoImgBox>
            <MainLogoImg src={require("./assets/logo.png")} alt="My Image" />
          </MainLogoImgBox>
          <Box sx={webStyle.pprBoxWrapper}>
            <FormContainer>
              <Box style={{ padding: "24px" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "18.5px" }}
                  component="h2"
                >
                  Login
                </Typography>
                <Typography
                  style={{ marginBottom: "18.5px" }}
                  variant="subtitle1"
                  component="div"
                >
                  Provide email address and password associated with your
                  account.
                </Typography>
                <Formik
                  data-test-id="formikClickEvent"
                  initialValues={{
                    email: this.state?.email || "",
                    password: this.state?.password || "",
                  }}
                  // validationSchema={validationSchema}
                  onSubmit={(values) => {
                    // this.doWebEmailLoginSubmit(values.email, values.password)
                    console.log("bjkdsfg");
                  }}
                >
                  {({ errors, touched }) => (
                    <Form translate={undefined}>
                      <Box>
                        {/* Email feild  */}
                        <Box>
                          <InputLabel
                            htmlFor="email"
                            style={{ marginBottom: "5px" }}
                          >
                            Work email<span style={{ color: "red" }}>*</span>
                          </InputLabel>
                          <Field
                            data-test-id={"txtInputEmail"}
                            type="text"
                            name="email"
                            id="email"
                            placeHolder="Enter your work email address"
                            as={TextField}
                            fullWidth
                            // variant="outlined"
                            // error={touched.email && !!errors.email}
                            // helperText={touched.email && errors.email}
                          />
                        </Box>
                        {/* passworde feild  */}
                        <Box sx={{ padding: "20px 0px", marginBottom: "10px" }}>
                          <InputLabel
                            htmlFor="password"
                            style={{ marginBottom: "5px" }}
                          >
                            Enter password
                            <span style={{ color: "red" }}>*</span>
                          </InputLabel>
                          <Field
                            data-test-id="txtInputPassword"
                            // type={!this.state.enablePasswordField ? 'text' : 'password'}
                            name="password"
                            id="password"
                            as={OutlinedInput}
                            fullWidth
                            placeHolder="Enter Password"
                            // error={touched.password && !!errors.password}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  edge="end"
                                  // onClick={this.btnPasswordShowHideProps.onPress}
                                >
                                  {true ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <span id="testPassowrd" style={{ color: "red" }}>
                            {touched.password && errors.password}
                          </span>
                        </Box>
                        {/* Forgot Password ? Reset Password */}
                        <Typography
                          style={{ marginBottom: "50px", paddingRight: "5px" }}
                        >
                          Forgot Password ?
                          <Link
                            data-test-id="linkForgotPassword"
                            onClick={this.redirectResetPassowrd}
                          >
                            {" "}
                            Reset Password
                          </Link>
                        </Typography>
                        {/* Don't have an account ?Sign up  */}
                        <Typography style={{ paddingRight: "5px" }}>
                          Don't have an account ?
                          <StyledLink onClick={this.redirectSignup}>
                            Sign up{" "}
                          </StyledLink>
                        </Typography>
                        {/* Login btn  */}
                        <Box sx={buttonContainerStyle}>
                          <Button
                            color="primary"
                            style={{ textTransform: "capitalize" }}
                            type="reset"
                          >
                            Cancel
                          </Button>
                          <Button
                            data-test-id={"btnEmailLogIn"}
                            type="submit"
                            style={{ backgroundColor: "#8760A9" }}
                          >
                            <span
                              style={{
                                color: "white",
                                textTransform: "none",
                              }}
                            >
                              Log in
                            </span>
                          </Button>
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </FormContainer>
          </Box>
          <Box sx={webStyle.footerMainWrapperLogin}>
          {/* <FooterBackImg > */}
            {/* <img
              src={require("./assets/group_bg.png")}
          
              alt="Path24"
              style={webStyle.footerImg}
            /> */}
            <Box style={{ display: "flex" }}>
              <Box sx={webStyle.path2StyleLogin}>
                <img src={"Path2"} alt="Path2" />
              </Box>
              <Box sx={webStyle.path1StyleLogin}>
                <img src={"Path1"} alt="Path1" />
              </Box>
            </Box>
            <Box style={{ display: "flex" }}>
              <Box sx={webStyle.path24StyleLogin}>
                <img src={"Path24"} alt="Path24" />
              </Box>
              <Box sx={webStyle.path25StyleLogin}>
                <img src={"Path25"} alt="Path23" />
              </Box>
              <Box sx={webStyle.path24StyleLogin}>
                <img src={"Path26"} alt="Path26" />
              </Box>
            </Box>
            </Box> 
          {/* </FooterBackImg> */}
          {/* </Container> */}
          <Toaster>
            {(t) => (
              <ToastBar
                toast={t}
                style={{
                  width: "500px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {({ icon, message }) => (
                  <>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>{icon}</p>

                      <p>{message}</p>
                    </div>

                    {t.type !== "loading" && (
                      <CloseIcon onClick={() => toast.dismiss(t.id)} />
                    )}
                  </>
                )}
              </ToastBar>
            )}
          </Toaster>
        </TopContainer>
      </ThemeProvider>
    );
  }
}
