import { Box } from "@material-ui/core";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";

interface Props {}

interface State {
  email: string;
  isLogin: boolean;
}
export default class RegisterRoot extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      isLogin: false,
    };
  }
  handleLogin = (email: any, isLogin: any) => {
    this.setState({ email: email, isLogin: isLogin });
  };
  render() {
    return (
      <Box>
        <BrowserRouter>
          <Routes >
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    );
  }
}
