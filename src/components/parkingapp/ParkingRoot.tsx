import { Box } from "@material-ui/core";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParkingContainer from "./ParkingContainer";
import SignUp from "./SignUp";
import Login from "./Login";
import NavigationBar from "./NavigationBar";
import Design from "./Design";
import ProtectedRoute from "./ProtectedRoute";

interface Props {}

interface State {
  email: string;
  isLogin: boolean;
}
export default class ParkingRoot extends Component<Props, State> {
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
          <NavigationBar
            isLogin={this.state.isLogin}
            handleLogin={this.handleLogin}
          />
          <Routes>
            <Route
              path="/parkingapp"
              element={
                <ProtectedRoute email={this.state.email}>
                  <ParkingContainer />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<SignUp />} />
            <Route
              path="/login"
              element={
                // <ProtectedRoute email={this.state.email}>
                  <Login handleLogin={this.handleLogin} />
                // {/* </ProtectedRoute> */}
              }
            />
            <Route
              path="/design"
              element={
                <ProtectedRoute email={this.state.email}>
                  <Design />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
    );
  }
}
