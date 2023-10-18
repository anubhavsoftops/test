import { Box, Typography, createStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";

interface Props {
  classes: any;
}
interface objectInterface {
  id: number;
  value: string;
  color: string;
}
interface State {
  listData: Array<objectInterface>;
  setColor: string;
  setIndex: number;
}
class TaskSaven extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listData: [
        { id: 1, value: "anubhav", color: "bfg" },
        { id: 2, value: "ayush", color: "" },
        { id: 3, value: "sumit", color: "" },
        { id: 4, value: "rahul", color: "" },
        { id: 5, value: "satish", color: "" },
        { id: 6, value: "gopal", color: "" },
      ],
      setColor: "",
      setIndex: -1,
    };
  }
  componentDidMount(): void {
    this.getRandomColor();
  }
  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ setColor: color });
  }
  handleColorChanged = (idx: number) => {
    this.getRandomColor();
    let index = this.state.listData.findIndex((x, index) => index === idx);
    let tempArray = [...this.state.listData];
    tempArray[index].color = this.state.setColor;
    this.setState({ listData: tempArray, setIndex: index });
    // console.log(this.state.listData);
  };

  render() {
    // Create an App to take user input and display it on the screen.
    const { classes } = this.props;
    return (
      <Box className={classes.task_container}>
        {this.state.listData.map((data, idx) => (
          <Typography
            key={idx}
            // style={{ backgroundColor: this.state.setIndex=== idx?`${data.color}`:'' }}
            style={{ backgroundColor: data.color }}
            className={classes.user_input}
            onClick={() => this.handleColorChanged(idx)}
          >
            {data.value}
          </Typography>
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
  user_input: {
    margin: "5px",
    height: "3rem",
    width: "18rem",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default withStyles(styles)(TaskSaven);
