import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class Design extends Component {
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
        
        <Box
          style={{
            width: "100%",
            padding: "10px 15px",
          }}
        >
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
              <Typography
                style={{
                  fontSize: "14px",
                  fontFamily: "Verdana",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  lineHeight: "22px",
                  marginBottom: "5px",
                }}
              >
                New Assessment Test
              </Typography>
              <Typography style={{ fontSize: "14px", lineHeight: "22px" }}>
                Your organization has created a new assessment test.
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#005487",
                  marginBottom: "10px",
                }}
              >
                Deadline: 24hrs
              </Typography>
              <Box
                style={{
                  display: "flex",
                  width: "13rem",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100px",
                    alignItems: "center",
                    height: "30px",
                    color: "#005487",
                    border: "1px solid #005487",
                  }}
                >
                  <Typography>take test</Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100px",
                    alignItems: "center",
                    height: "30px",
                    color: "white",
                    backgroundColor: "#005487",
                  }}
                >
                  <Typography>take test</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              style={{ fontSize: "10px", color: "#808080", marginTop: "5px" }}
            >
              08 jun 2021, 07:00am
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
