import {
  Box,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EventIcon from "@material-ui/icons/Event";
import LinkIcon from "@material-ui/icons/Link";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
interface Props {}
interface State {
  toggleColor: boolean;
  toggleShareModal: boolean;
  toggleMoreModal: boolean;
  anchorEl: any;
}

export default class EventDesc extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggleColor: false,
      toggleMoreModal: false,
      toggleShareModal: false,
      anchorEl: null,
    };
  }
  handleShareModalClose = () => {
    this.setState({
      toggleShareModal: !this.state.toggleShareModal,
      anchorEl: null,
    });
  };
  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <>
        <Container>
          <DescContainer>
            {/* Heder Image  */}
            <DescImgContainer>
              <DescImg
                src="https://source.unsplash.com/random/1600x1000/?cyberpunk"
                alt="Faces And Voices"
              />
            </DescImgContainer>
            {/* Heder text  */}
            <DescHederContainer>
              <DescHederTxt>Event Discussion</DescHederTxt>

              <DescHederTxt>
                7<br />
                Jan
              </DescHederTxt>
            </DescHederContainer>
            {/* Icons Box  */}
            <DescIconContainer>
              <DescIconWraperBox>
                <DescStarBorderIcon
                  onClick={() =>
                    this.setState({ toggleColor: !this.state.toggleColor })
                  }
                  style={
                    this.state.toggleColor
                      ? webStyles.starColorBlue
                      : webStyles.starColorWhite
                  }
                />
                <DescIconTxt>Interested</DescIconTxt>
              </DescIconWraperBox>
              <DescIconWraperBox>
                <DescSendIcon
                  id={id}
                  aria-haspopup="true"
                  onClick={(
                    event: React.MouseEvent<SVGSVGElement, MouseEvent>
                  ) =>
                    this.setState({
                      toggleShareModal: !this.state.toggleShareModal,
                      anchorEl: event.currentTarget,
                    })
                  }
                />
                <DescIconTxt>Share</DescIconTxt>
                <Box style={{ position: "absolute", top: "0px", left: "0" }}>
                  <CustomPopover
                    id={id}
                    open={this.state.anchorEl}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleShareModalClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <PopoverContainer>
                      <PopoverContantWraper>
                        <LinkIcon />
                        <PopoverTxt>Copy link</PopoverTxt>
                      </PopoverContantWraper>
                      <PopoverContantWraper>
                        <SendIcon />
                        <PopoverTxt>Share post in app</PopoverTxt>
                      </PopoverContantWraper>
                    </PopoverContainer>
                  </CustomPopover>
                </Box>
                {/* <Box style={{position:'absolute',top:'0px',left:'0'}}>
                  <Menu
                    id="simple-menu"
                    // anchorEl={anchorEl}
                    keepMounted
                    open={this.state.toggleShareModal}
                    onClose={this.handleShareModalClose}
                  >
                    <MenuItem onClick={this.handleShareModalClose}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={this.handleShareModalClose}>
                      My account
                    </MenuItem>
                    <MenuItem onClick={this.handleShareModalClose}>
                      Logout
                    </MenuItem>
                  </Menu>
                </Box> */}
              </DescIconWraperBox>
              <DescIconWraperBox>
                <DescMoreHorizIcon />
                <DescIconTxt>More</DescIconTxt>
              </DescIconWraperBox>
            </DescIconContainer>
            {/* Desc Text Content Boxes  */}
            <DescTxtContainer>
              <EventIcon />
              <DescContentTxt>
                <DescEventTxtSpan>Virtual Event </DescEventTxtSpan>
                hosted by
                <DescCompanyTxtSpan>
                  Faces and Voices of Recovery.
                </DescCompanyTxtSpan>
              </DescContentTxt>
            </DescTxtContainer>
            <DescTxtContainer>
              <LinkIcon />
              <DescContentTxt>www.eventurlfaces&voices.com</DescContentTxt>
            </DescTxtContainer>
            <DescTxtContainer>
              <QueryBuilderIcon />
              <DescContentTxt>
                02:00 PM - 03:00 PM <br />
                (Eastern Timezone)
              </DescContentTxt>
            </DescTxtContainer>
            <DescTxtContainer>
              <LibraryBooksIcon />
              <DescContentTxt>
                If you do not agree with any of these terms, you are prohibited
                from using or accessing this application. This materials
                contained in this application are protected by applicable
                copyright and trade mark law.
                <br />
                By accessing this app you are agreeing to be bound by these app
                Terms and Conditions of use, all applicable laws and
                regulations, and agree that you are responsible for compliance
                with any applicable local laws. If you do not agree with any of
                these terms.
              </DescContentTxt>
            </DescTxtContainer>
          </DescContainer>
        </Container>
      </>
    );
  }
}

const DescContainer = styled(Box)({
  padding: "14px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});
const DescImgContainer = styled(Box)({
  borderRadius: "10px",
  overflow: "hidden",
  width: "100%",
  height: "299px",
});

const DescImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});
const DescHederContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  margin: "20px 0 0 0",
  // alignItems:'center',
});
const DescHederTxt = styled(Typography)({
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#005487",
});
const DescIconContainer = styled(Box)({
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
});
const DescIconWraperBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});
const DescIconTxt = styled(Typography)({
  fontSize: "14px",
  marginTop: "8px",
  textTransform: "capitalize",
  textAlign: "center",
});
const DescStarBorderIcon = styled(StarRoundedIcon)({
  height: "60px",
  width: "60px",
  padding: "6px",
  backgroundColor: "#d9d9d9",
  borderRadius: "30px",
  color: "#fff",
  cursor: "pointer",
});

const DescSendIcon = styled(SendIcon)({
  height: "60px",
  width: "60px",
  padding: "6px",
  backgroundColor: "#d9d9d9",
  borderRadius: "30px",
  color: "#fff",
  cursor: "pointer",
});
const DescMoreHorizIcon = styled(MoreHorizIcon)({
  height: "60px",
  width: "60px",
  padding: "6px",
  backgroundColor: "#d9d9d9",
  borderRadius: "30px",
  color: "#fff",
  cursor: "pointer",
});
const DescTxtContainer = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "10px",
  color: "#005487",
});
const DescContentTxt = styled(Typography)({
  fontSize: "16px",
  color: "#808080",
  marginLeft: "15px",
});
const DescEventTxtSpan = styled("span")({
  fontSize: "16px",
  color: "#000",
  fontWeight: 400,
});
const DescCompanyTxtSpan = styled("span")({
  fontSize: "16px",
  color: "#000",
  fontWeight: "bold",
});
const CustomPopover = styled(Popover)({
  "& .MuiPopover-paper": {
    // position:'absolute',
    borderRadius: "10px",
  },
});
const PopoverContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "15px 0",
  width: "343px",
});
const PopoverContantWraper = styled(Box)({
  display: "flex",
  padding: "10px 20px",
  alignItems:'center',
  width: "100%",
  cursor: "pointer",
  color: "#005487",
  margin:'3px 0'
  ,'&:hover':{
    backgroundColor:'tomato'
  }
});
const PopoverTxt = styled(Typography)({
  color:'#808080',fontSize:'17px',marginLeft:'10px'
});

const webStyles = {
  starColorWhite: {
    color: "#fff",
  },
  starColorBlue: {
    color: "#005487",
  },
};
