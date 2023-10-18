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

interface Props {
  classes: any;
  navigate: any;
}
interface userInputInterface {
  email: string;
  password: string;
}
interface State {
  userInput: userInputInterface;
  toggled: boolean;
  userDetails: Array<object>;
  setLogin: boolean;
}
class SignIn extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: {
        email: "",
        password: "",
      },
      toggled: false,
      userDetails: [],
      setLogin: false,
    };
  }

  handleSubmit = async (e: any) => {
    e.preventDefault();

    let getdata = JSON.parse(localStorage.getItem("userDetails") || "{}");

    getdata.map((data: any, idx: number) => {
      if (
        this.state.userInput.email === data.email &&
        this.state.userInput.password === data.password
      ) {
        this.setState({ setLogin: true });
      }
    });
    if (this.state.setLogin) {
      this.props.navigate("/one");
    } else {
      alert("first create account");
      this.props.navigate("/");
    }
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

    return (
      <Box className={classes.task_container}>
        <Box className={classes.main_container}>
          <Typography className={classes.heading}>Welcome back!</Typography>
          <form className={classes.form_container} onSubmit={this.handleSubmit}>
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
export default withRouter(withStyles(styles)(SignIn));
