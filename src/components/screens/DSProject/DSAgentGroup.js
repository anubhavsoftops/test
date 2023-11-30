import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { AvatarGroup, TreeItem, TreeView } from "@material-ui/lab";

export default class DSAgentGroup extends Component {
  render() {
    return (
      <>
        <Container>
          <TextField
            fullWidth
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Grid style={{ marginTop: "32px" }} container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <AgentContainer>
                <AgentHeadTxt>
                  Agent groups <AgentHeadSpanTxt>(5)</AgentHeadSpanTxt>
                </AgentHeadTxt>
                {[
                  "Capacity management team",
                  "Change team",
                  "Database team",
                  "Hardware team",
                  "Helpdesk monitoring team",
                ].map((item, idx) => (
                  <TeamWraperBox>
                    <TeamNameBox>
                      <TeamHeadTxt>{item}</TeamHeadTxt>
                      <TeamDescTxt>{item}</TeamDescTxt>
                    </TeamNameBox>
                    <AvatarGroup max={4}>
                      <AvatarIcon
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <AvatarIcon
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <AvatarIcon
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                    </AvatarGroup>
                  </TeamWraperBox>
                ))}

                <AddBtnBox>
                  <AddBtn>Add new agent group</AddBtn>
                </AddBtnBox>
              </AgentContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                style={{
                  // backgroundColor: "tomato",
                  width: "100%",
                  // height: "644px",
                  padding: "5px",
                  boxShadow: " 0px 8px 32px rgba(135, 96, 169, 0.16)",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <TreeView
                  // className={classes.root}
                  // defaultCollapseIcon={<ExpandMoreIcon />}
                  // defaultExpandIcon={<ChevronRightIcon />}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <CustomTreeItem
                    nodeId="1"
                    label="Account settings"
                  ></CustomTreeItem>
                  <CustomTreeItem nodeId="2" label="User management">
                    <CustomTreeItem nodeId="3" label="Agents" />
                    <CustomTreeItem nodeId="3" label="Roles" />
                    <CustomTreeItem nodeId="3" label="Departments" />
                    <CustomTreeItem nodeId="3" label="Department fields" />
                    <CustomTreeItem nodeId="3" label="Requesters" />
                    <CustomTreeItem nodeId="3" label="User Fields" />
                    <CustomTreeItem nodeId="3" label="CAB" />
                    <CustomTreeItem nodeId="3" label="Requester groups" />
                  </CustomTreeItem>
                  <CustomTreeItem nodeId="1" label="Channels"></CustomTreeItem>
                  <CustomTreeItem
                    nodeId="1"
                    label="Service management"
                  ></CustomTreeItem>
                  <CustomTreeItem
                    nodeId="1"
                    label="Automation and productivity"
                  ></CustomTreeItem>
                  <CustomTreeItem
                    nodeId="1"
                    label="IT operations management"
                  ></CustomTreeItem>
                  <CustomTreeItem
                    nodeId="1"
                    label="Project and workload management"
                  ></CustomTreeItem>
                </TreeView>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

const AgentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  boxShadow: "0px 8px 32px rgba(135, 96, 169, 0.16)",
  width: "100%",
  height: "551px",
  justifyContent: "space-between",
  borderRadius: "8px",
});
const AgentHeadTxt = styled(Typography)({
  color: "#33354d",
  fontSize: "20px",
  fontFamily: "manrope",
  fontWeight: 700,
  marginBottom: "30px",
});
const AgentHeadSpanTxt = styled("span")({
  color: "#33354d",
  fontSize: "16px",
  fontWeight: 600,
  fontFamily: "manrope",
});
const TeamWraperBox = styled(Box)({
  width: "100%",
  padding: "12px",
  border: "1px solid #A3A6C2",
  display: "flex",
  borderRadius: "10px",
  justifyContent: "space-between",
  alignItems: "center",
});
const TeamNameBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
const TeamHeadTxt = styled(Typography)({
  color: "#33354d",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "24px",
  fontFamily: "manrope",
  "@media (max-width:580px)": {
   fontSize:'14px'
  },
});
const TeamDescTxt = styled(Typography)({
  color: "#a3a6c2",
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "manrope",
  "@media (max-width:580px)": {
    fontSize:'12px'
   },
});
const AvatarIcon = styled(Avatar)({
  "@media (max-width:580px)": {
    height: "30px",
    width: "30px",
  },
});
const AddBtnBox = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
});
const AddBtn = styled(Button)({
  fontSize: "16px",
  fontWeight: 700,
  fontFamily: "manrope",
  color: "#33354d",
  textTransform: "none",
  backgroundColor: "#E6DEED",
  width: "196px",
  height: "36px",
  marginTop: "30px",
});
const CustomTreeItem = styled(TreeItem)({
  // padding: "9px 5px 9px 0",
  "& .MuiTreeItem-iconContainer": {
    display: "none",
  },
  "& .MuiTreeItem-group": {
    marginLeft: "0px",
    "& :hover": {
      backgroundColor: "#8760A9",
    },
  },
  "& .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label":
    {
      backgroundColor: "none",
    },
});
