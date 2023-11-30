import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
  styled,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import React, { Component } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { GrHomeRounded } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { GrBundle } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";

interface Props {
  isVisible: boolean;
}
interface State {
  // isDrawer: boolean;
}
const routes = [
  { route: "/home", icon: <GrHomeRounded />, link: "Home" },
  { route: "/user", icon: <LuUser />, link: "User", subLinks: [] },
  {
    route: "/mainuser",
    icon: <GiHamburgerMenu />,
    link: "Main user",
    subLinks: [],
  },
  { route: "/course", icon: <IoBookOutline />, link: "Course" },
  { route: "/bundle", icon: <GrBundle />, link: "Bundle" },
  {
    route: "/institute",
    icon: <HiOutlineBuildingLibrary />,
    link: "Institute",
  },
  { route: "/language", icon: <BsGlobe />, link: "Language" },
];
export default class ASideBar extends Component<Props, State> {
  render() {
    return (
      <>
        <CustomDrawer open={this.props.isVisible} variant="persistent">
          <Box className="side_img_box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O2TQcyl3YM4XtrX_4D-7zoUNc-icJzSv-D0oW_wP&s"
              alt="bgImg"
            />
          </Box>
          <Box className="links_container">
            {routes.map((link, index) => (
              <>
                <Box className="side_link_box">
                  <Box className="side_txt_box">
                    {link.icon}
                    <Typography className="side_link_txt">
                      {link.link}
                    </Typography>
                  </Box>
                  {link.subLinks ? <KeyboardArrowDownIcon /> : ""}
                </Box>
               
              </>
            ))}
          </Box>
        </CustomDrawer>
      </>
    );
  }
}

const CustomDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "250px",
  },
  "& .side_img_box": {
    width: "100%",
    height: "70px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  "& .links_container": { marginTop: "45px" },
  "& .side_link_box": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    cursor: "pointer",
    marginBottom: "10px",
    "&.side_link_box:hover": {
      backgroundColor: "lightgrey",
    },
    "& .side_txt_box": {
      display: "flex",
      alignItems: "center",
    },
    "& .side_link_txt": {
      marginLeft: "14px",
    },
  },
});
