import React, { Component } from "react";

import SearchIcon from "@material-ui/icons/Search";

import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  withStyles,
} from "@material-ui/core";
import Paragraph from "./common/Paragraph";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { filterlistName } from "./assets/config";
import { cards } from "./assets/config";

class IndustrialPageWeb extends Component {
  render() {
    const { classes } = this.props;
    console.log(",vnbfs",cards[0].image);
    return (
      <>
        <Box className={classes.serviceBox}>
          <Container className={classes.ServiceContainer}>
            <Paragraph fontSize="48px" fontWeight={600} color="#fff" mb="10px">
              Our Services
            </Paragraph>
            <Box className={classes.serviceDescBox}>
              <Paragraph
                fontWeight={500}
                color="#fff"
                lineHeight="30.5px"
                mb="20px"
              >
                The platform provides many services to various government
                agencies, the private sector, and individuals, which enhances
                the partnership between them to achieve the goals of development
                projects in the Kingdom. To enable the digital transformation of
                these services, increase and efficiency, and facilitate the
                conduct of services transparency.
              </Paragraph>
            </Box>
            <Button className={classes.ServiceBtn}>Request Verification</Button>
          </Container>
        </Box>
        <Container>
          <Grid className={classes.filterGrid} container spacing={4}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Paragraph
                fontSize="16px"
                fontWeight={400}
                lineHeight="24px"
                color="#64748B"
                margin="10px 0 0 0"
              >
                6500 Services
              </Paragraph>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Box className={classes.filterInputBox}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Select Category"
                  className={classes.filterCatagoryInput}
                />

                <TextField
                  className={classes.filterInput}
                  variant="outlined"
                  fullWidth
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className={classes.CatagoryBox}>
                {filterlistName.map((listName, index) => (
                  <Box className={classes.CatagoryWraper}>
                    <Paragraph
                      fontSize="14px"
                      fontWeight={700}
                      lineHeight="22px"
                      color="#0f172a"
                      fontFamily="inter"
                    >
                      {listName}
                    </Paragraph>
                    <ChevronRightIcon />
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid container spacing={3}>
                {cards.map((data, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Box className={classes.serviceCardWrapper}>
                      <Box className={classes.serviceImgWrapper}>
                        <img
                          className={classes.serviceImg}
                          src={data.image}
                          alt="bkimg"
                        />
                       
                        <Box
                          style={{
                            display: "flex",
                            width: "100%",
                            position: "absolute",
                            bottom: "12px",
                            left: "14px",
                          }}
                        >
                          {data.tags.map((tag, index) => (
                            <Paragraph
                              key={index}
                              color="#2f2f2f"
                              fontSize="11.68px"
                              fontFamily="mulish"
                              fontWeight={600}
                              bgColor="#fff"
                              padding="9.0px 22.7px"
                              borderRadius={"15.58px"}
                              margin={"0 9px 0 0 "}
                            >
                              {tag}
                            </Paragraph>
                          ))}
                        </Box>
                      </Box>
                      <Paragraph
                        color="#2F2F2F"
                        fontSize="19.47px"
                        fontFamily="mulish"
                        lineHeight="23.37px"
                        fontWeight={700}
                      >
                        {data.service}
                      </Paragraph>
                      <Paragraph
                        color="#785353"
                        fontSize="12.98px"
                        fontFamily="mulish"
                        lineHeight="18.89px"
                        fontWeight={400}
                      >
                        {data.desc}
                      </Paragraph>
                      <Paragraph
                        color="#2F2F2F"
                        fontSize="12.98px"
                        fontFamily="mulish"
                        lineHeight="19.54px"
                        fontWeight={400}
                      >
                        View More
                      </Paragraph>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
const useStyles = {
  serviceBox: {
    height: "418px",
    backgroundColor: "#0F172A",
    "@media (max-width:380px)": {
      height: "480px",
    },
  },
  ServiceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
  serviceDescBox: {
    width: "760px",
    fontSize: "16px",
    "@media (max-width:768px)": {
      fontSize: "14px",
      width: "100%",
    },
  },
  ServiceBtn: {
    width: "315px",
    height: "44px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#1E3A8A",
    borderRadius: "8px",
    marginBottom: "45px",
    textTransform: "capitalize",
    "@media (max-width:520px)": {
      width: "250px",
      height: "44px",
    },
  },
  filterGrid: {
    marginTop: "80px",
    marginBottom: "20px",
    "@media (max-width:960px)": {
      marginTop: "5px",
    },
  },
  filterInputBox: {
    display: "flex",
    width: "90%",
    "@media (max-width:960px)": {
      width: "100%",
    },
    "@media (max-width:580px)": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  filterCatagoryInput: {
    "& .MuiInputBase-input": {},
    "& .MuiOutlinedInput-root": {
      height: "44px",
    },
  },
  filterInput: {
    marginLeft: "30px",
    "& .MuiInputBase-input": {},
    "& .MuiOutlinedInput-root": {
      height: "44px",
    },
    "@media (max-width:580px)": {
      marginTop: "10px",
      marginLeft: "0",
    },
  },
  filterResultTxt: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#64748B",
  },
  CatagoryBox: {
    display: "flex",
    flexDirection: "column",
    padding: "15px 24px",
    height: "240px",
    justifyContent: "space-between",
    borderRadius: "10px",
    backgroundColor: "#cbd5e1",
  },
  CatagoryWraper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  serviceCardWrapper: {
    display: " flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: "10px",
    height: "380px",
  },
  serviceImgWrapper: {
    width: "100%",
    height: "240px",
    backgroundColor: "#1E293B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    position: "relative",
  },
  serviceImg: { height: "80%", width: "80%", objectFit: "cover" },
};
// const CatagoryBox = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   padding: "15px 24px",
//   height: "240px",
//   justifyContent: "space-between",
//   borderRadius: "10px",
//   backgroundColor: "#cbd5e1",
// });
// const CatagoryWraper = styled(Box)({
//   display: "flex",

//   justifyContent: "space-between",
//   alignItems: "center",
//   cursor: "pointer",
// });

export default withStyles(useStyles)(IndustrialPageWeb);
