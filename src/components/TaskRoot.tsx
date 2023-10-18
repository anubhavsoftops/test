import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskOne from "./task/TaskOne";
import TaskTwo from "./task/TaskTwo";
import TaskThree from "./task/TaskThree";
import TaskFour from "./task/TaskFour";
import TaskFive from "./task/TaskFive";
import TaskSix from "./task/TaskSix";
import TaskSaven from "./task/TaskSaven";
import TaskEight from "./task/TaskEight";
import TaskNavBar from "./task/TaskNavBar";
import SignIn from "./task/signIn";
import SignUp from "./task/signUp";


export default class TaskRoot extends Component {
  render() {
    return (
      <Box>
        <BrowserRouter>
          <TaskNavBar />
          <Routes>
            <Route path="/one" element={<TaskOne />} />
            <Route path="/two" element={<TaskTwo />} />
            <Route path="/three" element={<TaskThree />} />
            <Route path="/four" element={<TaskFour />} />
            <Route path="/five" element={<TaskFive />} />
            <Route path="/six" element={<TaskSix />} />
            <Route path="/saven" element={<TaskSaven />} />
            <Route path="/eight" element={<TaskEight />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Box>
    );
  }
}
