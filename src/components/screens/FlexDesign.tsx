import { Box, createStyles, withStyles } from "@material-ui/core";
import React, { Component } from "react";
interface Props {
  classes: any;
}
class FlexDesign extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.container}>
        <Box className={classes.conatiner_box}>1</Box>
        <Box className={classes.conatiner_box}>2</Box>
        <Box className={classes.conatiner_box}>3</Box>
        <Box className={classes.conatiner_box}>4</Box>
      </Box>
    );
  }
}
const useStyles = createStyles({
  container: {
    // height: "100vh",
    width: "100vw",
    backgroundColor: "lightgreen",
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  conatiner_box: {
    border: "1px solid",
    margin: "2px",
    height: "5rem",
    backgroundColor: "tomato",
    flexBasis: '400px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default withStyles(useStyles)(FlexDesign);
