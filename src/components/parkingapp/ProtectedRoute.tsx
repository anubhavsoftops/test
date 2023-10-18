// import { Box } from "@material-ui/core";
// import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
// import { withRouter } from "../../routerConfig";

import { useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  email: string;
  children: any;
}
interface State {
  user: any;
}

// class ProtectedRoute extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       user: JSON.parse(localStorage.getItem("user") || "{}"),
//     };
//   }

//   render() {
//     const { children } = this.props;
//     const { user } = this.state;
//     console.log("anu-", this.props);

//     if (user.email !== null) {
//       return children;
//     }

//     // return <Na to="/" replace />;
//     // return this.props.navigate("/login");
//     return this.props.history.replace('/');;
//   }
// }

// export default withRouter(ProtectedRoute);

const ProtectedRoute = (props: Props, state: State) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  if (user.email === props.email) {
    return props.children;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
