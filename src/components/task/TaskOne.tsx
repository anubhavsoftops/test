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
}
class TaskOne extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: "",
      toggled: false,
    };
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({ toggled: true });
  };
  render() {
    // Create an App to take user input and display it on the screen.
    const { classes } = this.props;
    return (
      <Box className={classes.task_container}>
        {this.state.toggled ? (
          <Typography className={classes.user_input}>
            {this.state.userInput}
          </Typography>
        ) : null}

        <form className={classes.form_container} onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            value={this.state.userInput}
            className={classes.input_box}
            placeholder="type somthing"
            onChange={(e) => this.setState({ userInput: e.target.value })}
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
export default withStyles(styles)(TaskOne);
