import { Box, createStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
  classes: any;
}

class TaskNavBar extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Box className={classes.nav_container}>
          <Box className={classes.links_container}>
            <Link className={classes.nav_links} to={"/one"}>
              Task One
            </Link>
            <Link className={classes.nav_links} to={"/two"}>
              Task Two
            </Link>
            <Link className={classes.nav_links} to={"/three"}>
              Task Three
            </Link>
            <Link className={classes.nav_links} to={"/four"}>
              Task Four
            </Link>
            <Link className={classes.nav_links} to={"/five"}>
              Task Five
            </Link>
            <Link className={classes.nav_links} to={"/six"}>
              Task Six
            </Link>
            <Link className={classes.nav_links} to={"/saven"}>
              Task Saven
            </Link>
            <Link className={classes.nav_links} to={"/eight"}>
              Task Eight
            </Link>
          </Box>
          <Box>
            <Link className={classes.nav_links} to={"/signin"}>
              Sign-In
            </Link>
            <Link className={classes.nav_links} to={"/"}>
              Sign-Out
            </Link>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nav_links: {
    margin: "0 10px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
});
export default withStyles(styles)(TaskNavBar);
