import { Box, Typography, createStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { withRouter } from "../../routerConfig";

interface Props {
  classes: any;
  handleLogin: any;
  isLogin: any;
  navigate: any;
}

class NavigationBar extends Component<Props> {
  handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    this.props.handleLogin("", false);
    toast.success("User Logout Successfully");
    this.props.navigate("/");
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <>
        <Box className={classes.nav_container}>
          <Box className={classes.links_container}>
            <Typography style={{ color: "#fff",cursor:'pointer'}}>Parking - app</Typography>
            {this.props.isLogin ? (
              <Typography
                className={classes.nav_links}
                onClick={this.handleLogout}
              >
                Log-out
              </Typography>
            ) : null}
          </Box>
        </Box>
      </>
    );
  }
}
const styles = createStyles({
  nav_container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "darkblue",
    padding: "12px 20px",
  },
  links_container: {
    display: "flex",
    flexGrow: 1,
    flexBasis: "200",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  nav_links: {
    margin: "0 10px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
});
export default withRouter(withStyles(styles)(NavigationBar));
