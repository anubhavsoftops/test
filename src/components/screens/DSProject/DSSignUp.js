import React from "react";
// Customizable Area Start
import { Path1 } from "./assets";
import { FinalLogo1 } from "./assets"
import { Path2 } from "./assets"
import { Box, Button, Grid, IconButton, InputAdornment, Container, MenuItem, OutlinedInput, Paper, Select, InputLabel, Link, TextField, ThemeProvider, Typography, createTheme, withStyles, styled } from "@material-ui/core";
import * as Yup from "yup";
import moment from "moment-timezone";
import { Field, Form, Formik } from "formik";
import { Path24 } from "./assets"
import { Path25 } from "./assets"
import { Path26 } from "./assets";
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



class EmailAccountRegistration extends EmailAccountRegistrationController {
    constructor(props: Props) {
        super(props);
   // Customizable Area Start
   // Customizable Area End

    }

    // Customizable Area Start
    // Customizable Area End

    render() {
        // Customizable Area Start
        const timezones = moment.tz.names();
        const { activeStep } = this.state;
        //istanbul ignore next/
        return (

            <ThemeProvider theme={theme}>
                <Container style={{ maxWidth: 1440, height: 1024 }}>
                    <Box sx={webStyle.boxLogoWrapper} >
                        <img src={FinalLogo1} alt="My Image" />
                    </Box>
                    {activeStep === 0 && (
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
                                    <Typography style={{ marginBottom: "18.5px" , }} variant="subtitle1" component="div">
                                        {/ {this.state.labelHeader} UI Engine::From Sketch /}
                                        During your free 21-day trial period, your account will be on <br/> the highest trial plan - Enterprise (Trial) and you will have <br/> access to all of the features and capabilities of Ganga
                                    </Typography>
                                    <Formik
                                        data-test-id="formikClickEvent"
                                        initialValues={{
                                            fullName: this.state.fullName || "",
                                            email: this.state.email || "",
                                            password: this.state.password || "",
                                            confirmPassword: this.state.confirmPassword || "",
                                            company: this.state.companyName || "",
                                            timeZone: this.state.timeZone || "",
                                        }}
                                        validationSchema={validationSchemaSignup}
                                        onSubmit={(values, actions) => {
                                            this.setState({
                                                fullName: values.fullName,
                                                workEmail: values.email,
                                                password: values.password,
                                                confirmPassword: values.confirmPassword,
                                                timeZone: values.timeZone,
                                                companyName: values.company
                                            })
                                            this.handleNextStep(this.webcreateAccount());
                                        }}
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
                                                                error={touched.fullName && !!errors.fullName}
                                                                helperText={touched.fullName && errors.fullName}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="password">
                                                                Password<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                type={!this.state.enablePasswordField ? "text" : "password"}
                                                                testID="textInputPassword"
                                                                name="password"
                                                                id="password"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                error={touched.password && !!errors.password}
                                                                helperText={touched.password && errors.password}
                                                                endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            edge="end"
                                                                            onClick={this.webbtnPasswordShowHideProps.onPress}
                                                                        >
                                                                            {!this.state.enablePasswordField ? (
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
                                                                error={touched.company && !!errors.company}
                                                                helperText={touched.company && errors.company}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box>
                                                            <InputLabel style={{ marginBottom: "5px" }} htmlFor="confirmPassword">
                                                                Retype Password<span style={{ color: "red" }}>*</span>
                                                            </InputLabel>
                                                            <Field
                                                                type={!this.state.enablePasswordField ? "text" : "password"}
                                                                testID="textInputConfirmPassword"

                                                                name="confirmPassword"
                                                                id="confirmPassword"
                                                                as={TextField}
                                                                fullWidth
                                                                variant="outlined"
                                                                error={touched.confirmPassword && !!errors.confirmPassword}
                                                                helperText={touched.confirmPassword && errors.confirmPassword}
                                                                endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            edge="end"
                                                                            onClick={this.webbtnConfirmPasswordShowHideProps.onPress}
                                                                        >
                                                                            {this.state.enableReTypePasswordField ? (
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
                                                                error={touched.email && !!errors.email}
                                                                helperText={touched.email && errors.email}
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
                                                                {timezones.map((timezone: string, index: number) => (
                                                                    <MenuItem key={index} value={timezone}>
                                                                        {timezone}
                                                                    </MenuItem>
                                                                ))}
                                                            </Field>
                                                        </Box>
                                                    </Grid>
                                                </Grid>

                                                <Typography style={{ marginTop: "60px" }}>
                                                    Already have an account? <StyledLink
                                                        data-test-id="navigateToLogin"
                                                        onClick={this.redirectLogin}

                                                    >
                                                        Log in
                                                    </StyledLink>
                                                </Typography>
                                                <Box sx={buttonContainerStyle}>
                                                    <Button color="primary" style={{textTransform:'capitalize'}} type="reset">Cancel</Button>
                                                    <Button
                                                        data-test-id={"btnEmailLogIn"}
                                                        style={{textTransform:'capitalize'}}
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
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
                    {activeStep === 1 && (
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
                                        {/ {this.state.labelHeader} UI Engine::From Sketch /}
                                        Please type in verification code that we have sent to {this.state.email}
                                    </Typography>
                                    <Formik
                                        data-test-id="formikClickEventOTP"
                                        initialValues={{
                                            verificationCode: this.state.otp || "",
                                        }}

                                        validationSchema={validationSchemaOTP}
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
                                                    {/ Remove this Typography for production, only for demo /}
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
                    </Container>
                    