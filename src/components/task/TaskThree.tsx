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
  listView: Array<string>;
}
class TaskThree extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: "",
      toggled: false,
      listView: [],
    };
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    if (this.state.listView.length <= 1) {
      this.setState((prevState) => ({
        listView: [...prevState.listView, this.state.userInput],
        userInput: "",
      }));
    } else {
      let tempArray = [...this.state.listView];
      tempArray.shift();
      tempArray.push(this.state.userInput);
      this.setState({ listView: tempArray, userInput: "" });
    }
  };
  render() {
    // Create an App to take user input and display it on the screen.
    const { classes } = this.props;
    return (
      <Box className={classes.task_container}>
        {/* {this.state.toggled ? (
          <Typography className={classes.user_input}>
            {this.state.userInput}
          </Typography>
        ) : null} */}
        <Box className={classes.user_input_container}>
          {this.state.listView.map((list, idx) => (
            <Typography key={idx} className={classes.user_input}>
              {list}
            </Typography>
          ))}
        </Box>

        <form className={classes.form_container} onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            className={classes.input_box}
            placeholder="Type To Append"
            value={this.state.userInput}
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
  user_input_container: { display: "flex" },
  user_input: {
    margin: "10px 5px",
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
export default withStyles(styles)(TaskThree);
