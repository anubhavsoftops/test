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
  userInput: any;
  toggled: boolean;
  todosArray: Array<string>;
  isEdit: boolean;
  isIndex: number;
}
class TaskFour extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: "",
      toggled: false,
      todosArray: [],
      isEdit: false,
      isIndex: 0,
    };
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    if (!this.state.isEdit) {
      this.setState((prevState) => ({
        todosArray: [...prevState.todosArray, this.state.userInput],
        userInput: "",
      }));
    } else {
      let tempArray = [...this.state.todosArray];
      tempArray[this.state.isIndex] = this.state.userInput;
      this.setState({
        todosArray: tempArray,
        userInput: "",
      });
    }
  };

  handleEditTodo = (id: number) => {
    let index = this.state.todosArray.findIndex((todo, idx) => idx === id);
    let item = this.state.todosArray.find((n, idx) => idx === id);
    console.log(typeof item);
    this.setState({ userInput: item, isEdit: true, isIndex: index });
  };
  handleDeleteTodo = (id: number) => {
    let index = this.state.todosArray.findIndex((todo, idx) => idx === id);
    let item = this.state.todosArray.splice(index, 1);
    this.setState({ todosArray: this.state.todosArray });
  };
  render() {
    // Create an App to perform CRUD operation in list view.
    const { classes } = this.props;

    return (
      <Box className={classes.task_container}>
        <form className={classes.form_container} onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            className={classes.input_box}
            value={this.state.userInput}
            placeholder="Type Todo"
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
        <Box className={classes.todos_container}>
          {this.state.todosArray.map((todo, idx) => (
            <Box key={idx} className={classes.todos_wraper}>
              <Typography className={classes.todo_txt}>{todo}</Typography>
              <Button
                className={classes.todos_btn}
                variant="contained"
                color="primary"
                onClick={() => this.handleEditTodo(idx)}
              >
                Edit
              </Button>
              <Button
                className={classes.todos_btn}
                variant="contained"
                color="secondary"
                onClick={() => this.handleDeleteTodo(idx)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
const styles = createStyles({
  task_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "95vh",
    width: "100vw",
  },

  form_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100px",
  },
  todos_container: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  todos_wraper: {
    display: "flex",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "tomato ",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "5px 5px",
    // width:'20rem'
  },
  todo_txt: {
    padding: "5px 10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    width: "12rem",
  },
  todos_btn: {
    margin: "0 3px",
    textTransform: "capitalize",
  },
});
export default withStyles(styles)(TaskFour);
