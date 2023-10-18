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
interface stateObject {
  id: number;
  option: string;
}
interface State {
  options: Array<stateObject>;
  isIndex: number;
}
class TaskFive extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      options: [
        { id: 1, option: "option : 1" },
        { id: 2, option: "option : 2" },
        { id: 3, option: "option : 3" },
        { id: 4, option: "option : 4" },
      ],
      isIndex: -1,
    };
  }
  hendleSelect = (e: any) => {
    let index = this.state.options.findIndex(
      (option, idx) => idx === e
    );
    // console.log(index);
    this.setState({ isIndex: index });
  };
  render() {
    // Create an App to highlight the selected element in red color inside the list view.
    const { classes } = this.props;

    return (
      <Box className={classes.task_container}>
        {this.state.options.map((e, idx) => (
          <Box
            key={idx}
            style={{
              backgroundColor: this.state.isIndex === idx ? "red" : "#fff",
            }}
            className={classes.selected_box}
            onClick={() => this.hendleSelect(idx)}
          >
            {e.option}
          </Box>
        ))}
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
  selected_box: {
    height: "2.8rem",
    width: "18rem",
    border: "1px solid black",
    margin: "4px",
    borderRadius: "4px",
  },
});
export default withStyles(styles)(TaskFive);
