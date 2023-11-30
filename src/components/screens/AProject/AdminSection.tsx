import React, { Component } from "react";
import AdminSidebar from "./ASideBar";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  Typography,
  styled,
  Toolbar,
  TextField,
  Button,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuIcon from "@material-ui/icons/Menu";
import MoboTable from "./MoboTable";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";


interface Props {}
interface State {
  isDrawer: boolean;
  setfullWidth: boolean;
}
const routes = [
  { route: "/home", icon: <InboxIcon />, link: "Home" },
  { route: "/user", icon: <InboxIcon />, link: "User", subLinks: [] },
  { route: "/mainuser", icon: <InboxIcon />, link: "Main user", subLinks: [] },
  { route: "/course", icon: <InboxIcon />, link: "Course" },
  { route: "/bundle", icon: <InboxIcon />, link: "Bundle" },
  { route: "/institute", icon: <InboxIcon />, link: "Institute" },
  { route: "/language", icon: <InboxIcon />, link: "Language" },
];
const drawerWidth = 250;
const closeDrawer = 0;
export default class AdminSection extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDrawer: true,
      setfullWidth: true,
    };
  }
  toggleDrawer = () => {
    this.setState({
      isDrawer: !this.state.isDrawer,
      setfullWidth: !this.state.setfullWidth,
    });
  };

  render() {
    return (
      <>
        <Box style={{ width: "100vw" }}>
          <AdminSidebar isVisible={this.state.isDrawer} />

          <CustomNavBar
            position="fixed"
            style={
              this.state.setfullWidth
                ? webStyles.showDrawer
                : webStyles.hideDrawer
            }
          >
            <Toolbar>
              <Box className="nav_container">
                <Box className="nav_txt_box">
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <MenuIcon
                      onClick={this.toggleDrawer}
                      className="drower_menu"
                    />
                    <Typography className="main_heading">Category</Typography>
                  </Box>
                  <Box className="avtar_box">
                    <NotificationsNoneIcon />
                    <Avatar src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
                  </Box>
                </Box>
                <Box className="search_box">
                  <OutlinedInput
                    className="search_input"
                    placeholder="Search"
                    endAdornment={<SearchIcon className="icon_color" />}
                  />
                  <Box className="btn_box">
                    <Button
                      variant="contained"
                      className="btns"
                      startIcon={<AiOutlineExport />}
                    >
                      Export
                    </Button>
                    <Button
                      variant="contained"
                      className="btns"
                      startIcon={<IoMdAdd />}
                    >
                      Add Category
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Toolbar>
            <main className="table_content">
              <MoboTable />
            </main>
          </CustomNavBar>
        </Box>
      </>
    );
  }
}

const CustomNavBar = styled(AppBar)({
  marginLeft: "250px",
  backgroundColor: "#fff",
  "& .table_content": {
    "@media (max-width:950px)": {
      overflowX: 'scroll',
      padding:'10px'
    },
    
  },
  "&.MuiPaper-elevation4": { boxShadow: "none" },

  "& .nav_container": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    justifyContent: "space-between",
  },

  "& .nav_txt_box": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000",
    marginBottom: "15px",
    "& .drower_menu": {
      display: "none",
      height: "35px",
      width: "35px",
      color: "black",
      "@media (max-width:970px)": {
        display: "block",
      },
    },
    "& .main_heading": {
      fontSize: "24px",
      fontWeight: 600,
      // marginLeft: "15px",
    },
    "& .avtar_box": {
      display: "flex",
      justifyContent: "space-between",
      width: "90px",
      alignItems: "center",
    },
  },
  "& .search_box": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",

    "& .search_input": {
      width: "350px",
      height: "45px",
      borderRadius: "2px",
      "& .icon_color": { color: "#b2b2b2" },
      "@media (max-width:970px)": {
        width: "100%",
      },
      '&.Mui-focused fieldset': {
        borderColor: '#206575',
      },
    },
    "& .btn_box": {
      display: "flex",
      justifyContent: "space-between",

      "& .btns": {
        marginLeft: "10px",
        backgroundColor: "#206575",
        padding: "9px 22px",
        textTransform: "capitalize",
        fontSize: "16px",
        color: "#fff",
        borderRadius: "0",
        "@media (max-width:970px)": {
          marginLeft: "0",
          marginTop: "20px",
          marginRight: "10px",
          padding: "6px 12px",
        },
      },
    },
    "@media (max-width:970px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "start",
    },
  },
});
const webStyles = {
  showDrawer: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  hideDrawer: {
    width: `calc(100% - ${closeDrawer}px)`,
  },
};
