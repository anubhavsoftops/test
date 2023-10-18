import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { parkingData } from "./parkingData";
import NavigationBar from "./NavigationBar";
interface Props {
  classes: any;
}
interface State {
  data: any;
  // data: Array<object>;
  userCarName: string;
}
class ParkingContainer extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = {
      data: parkingData,
      userCarName: "",
    };
  }
  handleSumnit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { data, userCarName } = this.state;
    let filterData = data.filter((item: any) => item.status);

    const randomNum = Math.floor(Math.random() * filterData.length);
    const availableData = filterData[randomNum];
    console.log(availableData);
    if (availableData) {
      let updatedData = data.map((item: any, idx: number) => {
        console.log(availableData.id, item.id);
        if (availableData.id === item.id) {
          return {
            ...item,
            status: false,
            carName: userCarName,
          };
        }
        return item;
      });
      this.setState({ data: updatedData, userCarName: "" });
    } else {
      alert("full");
    }
  };
  handleRemoved = (index: number) => {
    let { data, userCarName } = this.state;
    let removedData = data.map((e: any, idx: number) => {
      if (e.id == index) {
        return {
          ...e,
          status: true,
          carName: "",
        };
      }
      return e;
    });
    this.setState({ data: removedData });
  };

  render() {
    const { classes } = this.props;
    // console.log(this.state.data);
    return (
      <>
        {/* <NavigationBar /> */}
        <Box className={classes.parking_container}>
          <Box className={classes.main_container}>
            <form
              onSubmit={this.handleSumnit}
              className={classes.input_container}
            >
              <TextField
                className={classes.inputfield}
                placeholder="Add Car"
                variant="outlined"
                value={this.state.userCarName}
                onChange={(e) => this.setState({ userCarName: e.target.value })}
              />
              <Button
                disabled={this.state.userCarName === ""}
                variant="contained"
                type="submit"
                color="secondary"
              >
                park car
              </Button>
            </form>
            <Grid container spacing={1} className={classes.slots_container}>
              {this.state.data.map((e: any, idx: number) => (
                <Grid key={idx} item xs={4}>
                  <Box className={classes.parking_car_container}>
                    <Box
                      className={classes.slot_status}
                      style={{
                        backgroundColor: e.status ? "#84DD63" : "#F25757",
                      }}
                    >
                      <Typography>{e.slotName}</Typography>
                      <Typography>{`car name : ${e.carName}`}</Typography>
                    </Box>
                    <Button
                      onClick={() => this.handleRemoved(e.id)}
                      fullWidth
                      disabled={e.status}
                      variant="contained"
                      color="primary"
                    >
                      remove car
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </>
    );
  }
}
const useStyles = createStyles({
  parking_container: {
    height: "95vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f86c6c29",
  },
  main_container: {
    height: "40rem",
    width: "60rem",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    // backgroundColor: "red",
    backdropFilter: "blur(5px)",
    boxShadow: "0px 1px 6px -1px rgba(135, 135, 135, 0.69)",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "10px",
  },
  input_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "32%",
  },
  inputfield: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",

      color: "#28405E",

      "& .MuiOutlinedInput-input": {
        padding: "9px 14px",
        "@media (max-width: 425px)": { padding: "7px 10px" },
      },
      "& fieldset": {
        border: "1px solid #3D6D8F",
      },
      "&:hover fieldset": {
        border: "2px solid #D9F0FF",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #28405E",
      },
    },
    "@media (max-width: 590px)": {
      height: "3rem",
    },
  },
  slots_container: {
    height: "30rem",
    width: "100%",
    // backgroundColor: "orange",
    display: "flex",
    flexWrap: "wrap",
    padding: "5px",
    overflow: "overlay",
    boxShadow: "inset 0px 1px 6px -1px rgba(135, 135, 135, 0.69)",
  },
  parking_car_container: {
    display: "flex",
    flexDirection: "column",
    height: "12rem",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFF6EE",
    padding: "5px",
    boxShadow: "0px 1px 6px -1px rgba(135, 135, 135, 0.69)",
  },
  slot_status: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    padding: "5px",
    backgroundColor: "tomato",
    alignItems: "flex-start",
    height: "8rem",
  },
});
export default withStyles(useStyles)(ParkingContainer);
