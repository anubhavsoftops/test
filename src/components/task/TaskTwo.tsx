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
interface State {
  userInput: string;
  toggled: boolean;
  userArray: Array<string>;
  userName: string;
}
class TaskTwo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: "",
      toggled: false,
      userArray: [],
      userName: "Anubhav",
    };
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    let convertInt = +this.state.userInput;
    let tempArray = [];
    for (let i = 0; i < convertInt; i++) {
      tempArray.push(this.state.userName);
    }
    this.setState({ userArray: tempArray, toggled: true });
  };
  render() {
    // Create an App to take user input in integers and display your name no of times based on the input value.
    const { classes } = this.props;
    console.log(this.state.userInput);
    return (
      <Box className={classes.task_container}>
        {this.state.toggled
          ? this.state.userArray.map((e, idx) => (
              <Typography className={classes.user_input}>
                {this.state.userName}
              </Typography>
            ))
          : null}

        <form className={classes.form_container} onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            type="number"
            className={classes.input_box}
            placeholder="Type Some Number"
            onChange={(e) =>
              this.setState({ userInput: e.target.value, toggled: false })
            }
          />
          <Button
            disabled={this.state.userInput === ""}
            fullWidth
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
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
  form_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100px",
  },
});
export default withStyles(styles)(TaskTwo);
