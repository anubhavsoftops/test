import {
    Box,
    Button,
    TextField,
    Typography,
    createStyles,
    withStyles,
  } from "@material-ui/core";
  import { get } from "http";
  import React, { Component } from "react";
  import { withRouter } from "../../routerConfig";
  import { toast } from "react-toastify";
  import { Link } from "react-router-dom";
  
  interface Props {
    classes: any;
    navigate: any;
  }
  
  interface State {
    email?: any;
    password?: any;
  }
  class SignUp extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
    }
  
    handleSubmit = async (e: any) => {
      e.preventDefault();
      console.log("hii");
      let user = { ...this.state };
      let { email, password } = this.state;
      if (localStorage.getItem("user")) {
        toast.error("account with this email is already exist");
        return;
      }
  
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(email)) {
        console.log("no email regex found");
        toast.error("Please write correct mail id");
        return;
      }
  
      if (password.length < 8) {
        toast.error("password should be greater than 8 characters");
        return;
      }
  
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("account get created successfully");
      this.props.navigate('/login')
      this.setState({ email: "", password: "" });
  

    };
   
    handleChange = (e: any) => {
      let value = e.target.value;
      let name = e.target.name;
  
      this.setState({ [name]: value });
    };
    render() {
      // Create an App to take user input and display it on the screen.
      const { classes } = this.props;
  
      return (
        <Box className={classes.task_container}>
          <Box className={classes.main_container}>
            <Typography className={classes.heading}>register here</Typography>
            <form className={classes.form_container} onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                name="email"
                value={this.state.email}
                className={classes.form_input_box}
                placeholder="Enter Your Email"
                onChange={(e) => this.handleChange(e)}
              />
              <TextField
                variant="outlined"
                name="password"
                value={this.state.password}
                className={classes.form_input_box}
                placeholder="Enter Your Password"
                onChange={(e) => this.handleChange(e)}
              />
  
              <Button
                // disabled={this.state.userInput === ""}
                fullWidth
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
            <Typography component={Link} to={'/login'}>already have account? - login</Typography>
          </Box>
        </Box>
      );
    }
  }
  const styles = createStyles({
    task_container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "95vh",
    },
    user_input: {
      marginBottom: "14px",
      padding: "5px 10px",
      backgroundColor: "cornflowerblue",
      color: "#fff",
      borderRadius: "8px",
      textAlign: "center",
    },
    main_container: {
      height: "30rem",
      width: "30rem",
      // backgroundColor: "red",
      border: "2px solid #28405E",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    heading: {
      fontSize: "3rem",
      textAlign: "center",
      textTransform: "capitalize",
      textDecoration: "underline",
      color: "#28405E",
    },
    form_container: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      // justifyContent: "space-between",
      // height: "100px",
    },
    form_input_box: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "5px",
        marginBottom: "10px",
        color: "#28405E",
        "& .MuiOutlinedInput-input": {
          padding: "12px 14px",
          "@media (max-width: 425px)": { padding: "8px 10px" },
        },
        "& fieldset": {
          border: "1px solid #3D6D8F",
        },
        "&:hover fieldset": {
          border: "2px solid #D9F0FF",
        },
        "&.Mui-focused fieldset": {
          border: "2px solid #28405E",
        },
      },
      "@media (max-width: 590px)": {
        height: "3rem",
      },
    },
  });
  export default withRouter(withStyles(styles)(SignUp));
  