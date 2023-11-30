import React, { Component } from "react";
// Customizable Area Start
// import { Path1 } from "./assets"
// import { FinalLogo1 } from "./assets"
// import { Path2 } from "./assets"
import { Box, Button, Grid, IconButton, InputAdornment, Container, MenuItem, OutlinedInput, Paper, Select, InputLabel, Link, TextField, ThemeProvider, Typography, createTheme, withStyles, Modal,styled } from "@material-ui/core";
// import * as Yup from "yup";
// import moment from "moment-timezone";
import { Field, Form, Formik } from "formik";
// import { Path24 } from "./assets"
// import { Path25 } from "./assets"

// import { Path26 } from "./assets";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
// Customizable Area End


// Customizable Area Start
const theme = createTheme({
    palette: {
        primary: {
            main: "#8760A9",
            contrastText: "#fff",
        },
    },
});

// const validationSchemaSignup = Yup.object().shape({
//     fullName: Yup.string().required("Full Name is required")
//     .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, 'Full Name should contain letters with optional spaces'),
//     password: Yup
//         .string()
//         .required('Password is required')
//         .min(8, 'Password must be at least 8 characters')
//         .matches(
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//             'Password should be at least 8 characters long, and contain capital letter, number and special character.'
//         ),
//     confirmPassword: Yup
//         .string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     company: Yup.string().required("Company is required").matches(/^[A-Za-z]+( [A-Za-z]+)*$/, 'Company Name should contain letters with optional spaces'),
//     email: Yup
//         .string()
//         .email("Type incorrect email address")
//         .required("Work Email is required"),
//     timeZone: Yup.string(),
// });

// const validationSchemaOTP = Yup.object().shape({
//     verificationCode: Yup.string()
//         .length(4, 'OTP must be exactly 4 digits')
//         .matches(/^\d+$/, 'OTP must contain only digits'),
// });
// Customizable Area End


// import EmailAccountRegistrationController, {
//     Props
// } from "./EmailAccountRegistrationController";



class EmailAccountRegistration extends Component {
//     constructor(props: Props) {
//         super(props);
//    // Customizable Area Start
//    // Customizable Area End

//     }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        // const timezones = moment.tz.names();
        // const { activeStep } = this.state;
        //istanbul ignore next/
        return (

            <ThemeProvider theme={theme}>
                <Container style={{ maxWidth: 1440, height: 1024 }}>
                    <Box sx={webStyle.boxLogoWrapper} >
                        <img src={require("./assets/logo.png")} alt="My Image" />
                    </Box>
                    {1 === 0 && (
                        <Box
                            sx={webStyle.signupPprBoxWrapper}
                        >
                            <Paper

                                style={webStyle.signupPaper}
                            >
                                <Box style={{ padding: "24px" }}>
                                <Box style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                                    <Typography variant="h4" style={{ marginBottom: "18.5px" }} component="h2">
                                        Signup
                                    </Typography>
                                    <CloseIcon style={{cursor:"pointer"}} />
                                    </Box>
                                    <Typography style={{ marginBottom: "18.5px" }} variant="subtitle1" component="div">
                                        {/* {this.state.labelHeader} UI Engine::From Sketch */}
                                        During your free 21-day trial period, your account will be on <br/> the highest trial plan - Enterprise (Trial) and you will have <br/> access to all of the features and capabilities of Ganga
                                    </Typography>
                                    <Formik
                                        data-test-id="formikClickEvent"
                                        // initialValues={{
                                        //     fullName: this.state.fullName || "",
                                        //     email: this.state.email || "",
                                        //     password: this.state.password || "",
                                        //     confirmPassword: this.state.confirmPassword || "",
                                        //     company: this.state.companyName || "",
                                        //     timeZone: this.state.timeZone || "",
                                        // }}
                                        // validationSchema={validationSchemaSignup}
                                        // onSubmit={(values, actions) => {
                                        //     this.setState({
                                        //         fullName: values.fullName,
                                        //         workEmail: values.email,
                                        //         password: values.password,
                                        //         confirmPassword: values.confirmPassword,
                                        //         timeZone: values.timeZone,
                                        //         companyName: values.company
                                        //     })
                                        //     this.handleNextStep(this.webcreateAccount());
                                        // }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form translate={undefined}>
                                                <Grid container spacing={2} >
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="fullName">
                                                                Full Name<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                testID="textInputFullName"
                                                                type="text"
                                                                name="fullName"
                                                                id="fullName"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                // error={touched.fullName && !!errors.fullName}
                                                                // helperText={touched.fullName && errors.fullName}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="password">
                                                                Password<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                type={true? "text" : "password"}
                                                                testID="textInputPassword"
                                                                name="password"
                                                                id="password"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                // error={touched.password && !!errors.password}
                                                                // helperText={touched.password && errors.password}
                                                                endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            edge="end"
                                                                            // onClick={this.webbtnPasswordShowHideProps.onPress}
                                                                        >
                                                                            {true ? (
                                                                                <Visibility />
                                                                            ) : (
                                                                                <VisibilityOff />
                                                                            )}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                }
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="company">
                                                                Company<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                testID="txtInputCompanyName"
                                                                type="text"
                                                                name="company"
                                                                id="company"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                // error={touched.company && !!errors.company}
                                                                // helperText={touched.company && errors.company}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="confirmPassword">
                                                                Retype Password<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                type={true ? "text" : "password"}
                                                                testID="textInputConfirmPassword"

                                                                name="confirmPassword"
                                                                id="confirmPassword"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                // error={touched.confirmPassword && !!errors.confirmPassword}
                                                                // helperText={touched.confirmPassword && errors.confirmPassword}
                                                                endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            edge="end"
                                                                            onClick={this.webbtnConfirmPasswordShowHideProps.onPress}
                                                                        >
                                                                            {true ? (
                                                                                <Visibility />
                                                                            ) : (
                                                                                <VisibilityOff />
                                                                            )}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                }
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="email">
                                                                Work Email<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                testID="textInputEmail"
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                // error={touched.email && !!errors.email}
                                                                // helperText={touched.email && errors.email}
                                                            />
                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="timeZone">
                                                                Time Zone
                                                            </InputLabel>
                                                            <Field
                                                                type="text"
                                                                name="timeZone"
                                                                id="timeZone"
                                                                as={Select}
                                                                fullWidth
                                                                variant="outlined"
                                                                inputProps={{
                                                                    name: "timeZone",
                                                                    id: "timeZone"
                                                                }}
                                                                style={{ maxHeight: "300px" }}

                                                            >
                                                                {/* {timezones.map((timezone: string, index: number) => (
                                                                    <MenuItem key={index} value={timezone}>
                                                                        {timezone}
                                                                    </MenuItem>
                                                                ))} */}
                                                            </Field>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                                <Typography style={{ marginTop: "60px" }}>
                                                    Already have an account? <StyledLink
                                                        data-test-id="navigateToLogin"
                                                        // onClick={this.redirectLogin}

                                                    >
                                                        Login
                                                    </StyledLink>
                                                </Typography>
                                                <Box sx={buttonContainerStyle}>
                                                    <Button color="primary" style={{textTransform:'capitalize'}} type="reset">Cancel</Button>
                                                    <Button
                                                        data-test-id={"btnEmailLogIn"}
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        style={{textTransform:'capitalize'}}
                                                    >
                                                        Sign up
                                                    </Button>
                                                </Box>
                                            </Form>
                                        )}
                                    </Formik>
                                </Box>
                            </Paper>
                        </Box>
                    )}
                    {2 === 1 && (
                        <Box
                            sx={webStyle.pprBoxWrapper}
                        >
                            <Paper
                                style={webStyle.verfifyOTPPpr}

                            >
                                <Box style={{ padding: "24px" }}>
                                    <Typography variant="h4" style={{ marginBottom: "18.5px" }} component="h2">
                                        Verification Code
                                    </Typography>
                                    <Typography style={{ marginBottom: "18.5px" }} variant="subtitle1" component="div">
                                        {/* {this.state.labelHeader} UI Engine::From Sketch */}
                                        Please type in verification code that we have sent to {this.state.email}
                                    </Typography>
                                    <Formik
                                        data-test-id="formikClickEventOTP"
                                        initialValues={{
                                            verificationCode: this.state.otp || "",
                                        }}

                                        // validationSchema={validationSchemaOTP}
                                        onSubmit={(values, actions) => {
                                            this.setState({
                                                otp: values.verificationCode
                                            })
                                            this.validateOTP()
                                        }}
                                    >
                                        {(formikProps) => (
                                            <Form translate={undefined}>
                                                <Box>
                                                    {/* Remove this Typography for production, only for demo */}
                                                    <Typography>{this.state.isOTPReceived && `OTP: ${this.state.pin}`}</Typography>
                                                    <InputLabel htmlFor="verificationCode" style={{ marginBottom: "5px", marginTop: "60px" }}>
                                                        Verification Code<span style={{ color: "red" }}>*</span>
                                                    </InputLabel>
                                                    <Field
                                                        type="text"
                                                        name="verificationCode"
                                                        id="verificationCode"
                                                        placeHolder="Enter verification code"
                                                        as={TextField}
                                                        fullWidth
                                                        variant="outlined"
                                                        error={Boolean(formikProps.touched.verificationCode && formikProps.errors.verificationCode)}
                                                        helperText={formikProps.touched.verificationCode && formikProps.errors.verificationCode}
                                                    />
                                                    <Typography style={{ color: "red" }}>{this.state.pinError}</Typography>
                                                </Box>


                                                <Typography style={{ marginBottom: "50px", marginTop: "10px" }}>
                                                    Didn't received the code? <Link onClick={this.resendOTPWeb}>Resend it</Link>
                                                </Typography>
                                                <Box sx={buttonContainerStyle}>
                                                <Button type='reset' color="primary" style={{textTransform:'capitalize'}}>Cancel</Button>
                                                <Button type="submit" variant="contained" color="primary" style={{textTransform:'capitalize'}}>
                                                    Verify
                                                </Button>
                                                </Box>
                                            </Form>
                                        )}
                                    </Formik>
                                </Box>
                            </Paper>
                        </Box>
                    )}
                    {/* <Box sx={webStyle.footerMainWrapperSignup}  >
                        <Box style={{ display: "flex", }} >
                            <Box sx={webStyle.path2StyleSignup}  >
                                <img src={Path2} alt="Path2" />
                            </Box>
                            <Box sx={webStyle.path1StyleSignup} >
                                <img src={Path1} alt="Path1" />
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", }}>
                            <Box sx={webStyle.path24StyleSignup} >
                                <img src={Path24} alt="Path24" />
                            </Box >
                            <Box sx={webStyle.path25StyleSignup} >
                                <img src={Path25} alt="Path23" />
                            </Box>
                            <Box sx={webStyle.path24StyleSignup}>
                                <img src={Path26} alt="Path26" />
                            </Box>
                        </Box>
                    </Box> */}

                </Container >
            </ThemeProvider >
        );
        // Customizable Area End
    }


}

export default EmailAccountRegistration;


// Customizable Area Start

const webStyle = {
    pprBoxWrapper: {
        height: 440,
        flexShrink: 0,
        position: "relative",
        top: "252px",
        left: "470px",
        bottom: "400px",

    },
    signupPprBoxWrapper: {
        flexShrink: 0,
        position: "relative",
        top: "252px",
        left: "220px",
        bottom: "178px",
    },
    signupPaper: {
        width: 1000,

        // padding: 20,
        borderRadius: "var(--1, 8px)",
        background: "var(--basic-white, #FFF)",
        boxShadow:
            "0px 8px 32px 0px rgba(135, 96, 169, 0.16), 0px 4px 8px 0px rgba(135, 96, 169, 0.13)",

    },
    verfifyOTPPpr: {
        width: 500,

        // padding: 20,
        borderRadius: "var(--1, 8px)",
        background: "var(--basic-white, #FFF)",
        boxShadow:
            "0px 8px 32px 0px rgba(135, 96, 169, 0.16), 0px 4px 8px 0px rgba(135, 96, 169, 0.13)",

    },
    boxLogoWrapper: {
        position: "absolute",
        left: "120px",
        right: "1193px",
        bottom: "920px",
        top: "52px",
    },
    footerMainWrapperSignup: {
        display: "flex", justifyContent: "space-between"
    },

    path24StyleSignup: {
        position: "absolute", zIndex: 1, bottom: 0, right: 0
    },
    path25StyleSignup: {
        position: "absolute", zIndex: 1, bottom: 0, right: "45px"
    },
    path2StyleSignup: {
        position: "absolute", zIndex: 1, bottom: 0
    },
    path1StyleSignup: {
        position: "absolute", zIndex: 1, bottom: 0, left: 0
    },
}

const buttonContainerStyle = {
    display: "flex",
    // width: 452,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
    borderRadius: "0px 0px var(--1, 8px) var(--1, 8px)",
    background: "var(--basic-white, #FFF)",
    padding: "10px 0px",
};


const StyledLink=styled(Link)({
    cursor:"pointer"
  })
// Customizable Area End

