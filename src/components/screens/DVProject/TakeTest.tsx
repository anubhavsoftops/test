import { Box, Button, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";

export default class TakeTest extends Component {
  render() {
    return (
      <Box
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          backgroundColor: "",
          flexDirection: "column",
        }}
      >
        <Typography style={{ padding: "10px 15px" }}>Notifactions</Typography>
        <Container>
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "100px",
                backgroundColor: "blue",
                marginRight: "15px",
              }}
            ></Box>
            <Box>
              <AssessmentTxt>New Assessment Test</AssessmentTxt>
              <AssessmentDescTxt>
                Your organization has created a new assessment test.
              </AssessmentDescTxt>
              <DeadlineTxt>Deadline: 24hrs</DeadlineTxt>
              <BtnBox>
                <TestBtnIBox>
                  <Typography>take test</Typography>
                </TestBtnIBox>
                <TestBtnIIBox>
                  <Typography>take test</Typography>
                </TestBtnIIBox>
              </BtnBox>
            </Box>
          </Box>
          <TimeBox>
            <TimeTxt>08 jun 2021, 07:00am</TimeTxt>
          </TimeBox>
        </Container>
      </Box>
    );
  }
}
const Container = styled(Box)({
  width: "100%",
  padding: "10px 15px",
});
const AssessmentTxt = styled(Typography)({
  fontSize: "14px",
  fontFamily: "Verdana",
  fontWeight: "bold",
  textTransform: "capitalize",
  lineHeight: "22px",
  marginBottom: "5px",
});
const AssessmentDescTxt = styled(Typography)({
  fontSize: "14px",
  lineHeight: "22px",
});
const DeadlineTxt = styled(Typography)({
  fontSize: "15px",
  fontWeight: "bold",
  color: "#005487",
  marginBottom: "10px",
});
const BtnBox = styled(Box)({
  display: "flex",
  width: "13rem",
  justifyContent: "space-between",
});
const TestBtnIBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100px",
  alignItems: "center",
  height: "30px",
  color: "#005487",
  cursor: "pointer",
  border: "1px solid #005487",
  "&:hover": {
    color: "white",
    backgroundColor: "#005487",
  },
});
const TestBtnIIBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100px",
  alignItems: "center",
  height: "30px",
  color: "#fff",
  backgroundColor: "#005487",
  border: "1px solid #005487",
  cursor: "pointer",
  "&:hover": {
    color: "#005487",
    backgroundColor: "white",
  },
});
const TimeTxt = styled(Typography)({
  fontSize: "10px",
  color: "#808080",
  marginTop: "5px",
});
const TimeBox = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
});
