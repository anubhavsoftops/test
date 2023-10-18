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
interface optionsInterface {
  optinIndex: string;
  answer: string;
}
interface dataInterface {
  question: string;
  options: Array<optionsInterface>;
  id: string;
}
interface State {
  setIndex: number;
  data: Array<dataInterface>;
}
class TaskSix extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      setIndex: 0,
      data: [
        {
          id: "1",
          question: "task - 1",
          options: [
            { optinIndex: "a", answer: "hii" },
            { optinIndex: "b", answer: "bye" },
            { optinIndex: "c", answer: "yo" },
            { optinIndex: "d", answer: "no non" },
          ],
        },
        {
          id: "2",
          question: "task - 2",
          options: [
            { optinIndex: "a", answer: "fdgsf" },
            { optinIndex: "b", answer: "bfdgsye" },
            { optinIndex: "c", answer: "yodfgfg" },
            { optinIndex: "d", answer: "no nfdgdfon" },
          ],
        },
        {
          id: "3",
          question: "task - 3",
          options: [
            { optinIndex: "a", answer: "fdgfdvb" },
            { optinIndex: "b", answer: "bydfgjhke" },
            { optinIndex: "c", answer: "fdgdfg" },
            { optinIndex: "d", answer: "no dfdfgdf" },
          ],
        },
        {
          id: "4",
          question: "task - 4",
          options: [
            { optinIndex: "a", answer: "fdgdfgfd" },
            { optinIndex: "b", answer: "dfgdfvdfklbn" },
            { optinIndex: "c", answer: " cvzfndgl;o" },
            { optinIndex: "d", answer: "no ndfgjkvadfgkjkbdfbgjkv" },
          ],
        },
      ],
    };
  }
  renderQuestions = () => {
    const { classes } = this.props;

    return (
      <Typography className={classes.question}>
        {this.state.data[this.state.setIndex].id} -{"> "}
        {this.state.data[this.state.setIndex].question}
      </Typography>
    );
  };

  renderOptions = () => {
    const { classes } = this.props;

    return (
      <Box className={classes.options_container}>
        {this.state.data[this.state.setIndex].options.map((e, idx) => (
          <Typography className={classes.options} key={idx}>
            {e.optinIndex}.{e.answer}
          </Typography>
        ))}
      </Box>
    );
  };
  onClickNextButton = () => {
    this.setState({ setIndex: this.state.setIndex + 1 });
  };

  onClickPrevButton = () => {
    this.setState({ setIndex: this.state.setIndex - 1 });
  };

  render() {
    // Create an App to implement the quiz list and use a checkbox/radio buttons as answering options.
    const { classes } = this.props;

    return (
      <Box className={classes.task_container}>
        {this.renderQuestions()}
        {this.renderOptions()}
        <Box className={classes.btn_container}>
          <Button
            disabled={this.state.setIndex === 0}
            onClick={() => this.onClickPrevButton()}
            color="primary"
            variant="contained"
          >
            prev
          </Button>
          <Button
            disabled={this.state.data.length - 1 === this.state.setIndex}
            onClick={() => this.onClickNextButton()}

            color="secondary"
            variant="contained"
          >
            next
          </Button>
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
  question: {
    fontSize: "2rem",
    padding: "1rem 3rem",
    backgroundColor: "gold",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  options_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "tomato",
    width: "14rem",
    height: "14rem",
  },
  options: {
    width: "100%",
    padding: "6px 5px",
    backgroundColor: "orange",
    borderRadius: "4px",
    },
  btn_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "14rem",
  },
});
export default withStyles(styles)(TaskSix);
