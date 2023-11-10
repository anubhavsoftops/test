import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <Box>
        <Container>
          <Grid container spacing={5} style={{ backgroundColor: "" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
              <Grid xs={12} sm={6}  md={4} lg={3} xl={3} item>
                {/* <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              > */}
                <Box style={webStyles.card_container}>
                  <Box style={webStyles.card_img_container}>
                    <img
                      style={webStyles.card_img}
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </Box>
                  <Typography style={webStyles.card_title_name}>
                    Neha Singh
                  </Typography>
                  <Typography style={webStyles.card_title_desc}>
                    Interior Designer
                  </Typography>
                  <Typography style={webStyles.card_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia ratione deserunt fugit!
                  </Typography>
                  <Button style={webStyles.card_read_btn}>View Profile</Button>
                </Box>

                {/* </Box> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
}
const webStyles: Record<string, React.CSSProperties> = {
  card_container: {
    width: "100%",
    // backgroundColor:'red',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "450px",
    backgroundColor: "#fff",
    borderRadius: "30px",
    flexDirection: "column",
    padding: "2rem 1rem",
    boxShadow: "0px 2px 4px -1px rgba(128, 128, 128, 1)",
  },
  card_img_container: {
    objectFit: "cover",
    borderRadius: "100px",
    overflow: "hidden",
    border: "3px solid #a27d4d",
  },
  card_img: {
    height: "120px",
    width: "120px",
    objectFit: "cover",
  },
  card_title_name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: "10px",
    textAlign: "center",
  },
  card_title_desc: {
    fontSize: "1rem",
    textAlign: "center",
  },
  card_desc: {
    textAlign: "center",
    fontSize: "1rem",
    color: "gray",
    marginTop: "15px",
  },
  card_read_btn: {
    borderRadius: "50px",
    backgroundColor: "#a27d4d",
    textTransform: "capitalize",
    color: "#fff",
    padding: "8px 15px",
    fontWeight: "400",
    marginTop: "2.5rem",
  },
};
