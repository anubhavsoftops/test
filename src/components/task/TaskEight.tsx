import {
  Box,
  Button,
  TextField,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";

interface Props {
  classes: any;
}
interface userInputInterface {
  username: string;
  email: string;
  password: string;
  c_password: string;
}
interface State {
  userInput: userInputInterface;
  toggled: boolean;
  userDetails: Array<object>;
}
class TaskEight extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: {
        username: "",
        email: "",
        password: "",
        c_password:''
      },
      toggled: false,
      userDetails: [],
    };
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState((prevState) => ({
      userDetails: [...prevState.userDetails, this.state.userInput],
      userInput: { username: "", email: "", password: "",c_password:'' },
    }));
  };
  handleChange = (e: any) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      userInput: {
        ...this.state.userInput,
        [name]: value,
      },
    });
  };
  render() {
    // Create an App to take user input and display it on the screen.
    const { classes } = this.props;
    // console.log("userdata --", this.state.userDetails);
    return (
      <Box className={classes.task_container}>
        {/* {this.state.toggled ? (
          <Typography className={classes.user_input}>
            {this.state.userInput}
          </Typography>
        ) : null} */}
        <Box className={classes.main_container}>
          <Typography className={classes.heading}>register here</Typography>
          <form className={classes.form_container} onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              name="username"
              value={this.state.userInput.username}
              className={classes.form_input_box}
              placeholder="Enter Your Username"
              onChange={(e) => this.handleChange(e)}
            />
            <TextField
              variant="outlined"
              name="email"
              value={this.state.userInput.email}
              className={classes.form_input_box}
              placeholder="Enter Your Email"
              onChange={(e) => this.handleChange(e)}
            />
            <TextField
              variant="outlined"
              name="password"
              value={this.state.userInput.password}
              className={classes.form_input_box}
              placeholder="Enter Your Password"
              onChange={(e) => this.handleChange(e)}
            />
            <TextField
              variant="outlined"
              name="c_password"
              value={this.state.userInput.c_password}
              className={classes.form_input_box}
              placeholder="Enter Confirm Password"
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
export default withStyles(styles)(TaskEight);
