import React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  styled,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";
import { Box, Container, Switch } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const data = [
  {
    id: "9",
    type: "course_category",
    attributes: {
      name: "Class 1",
      status: false,
      total_courses: 0,
      icon_cat:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png",
      web_icon:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png ",
      class_content: null,
    },
  },
  {
    id: "9",
    type: "course_category",
    attributes: {
      name: "Class 1",
      status: false,
      total_courses: 0,
      icon_cat:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png",
      web_icon:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png ",
      class_content: null,
    },
  },
  {
    id: "9",
    type: "course_category",
    attributes: {
      name: "Class 1",
      status: false,
      total_courses: 0,
      icon_cat:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png",
      web_icon:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png ",
      class_content: null,
    },
  },
  {
    id: "9",
    type: "course_category",
    attributes: {
      name: "Class 1",
      status: false,
      total_courses: 0,
      icon_cat:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png",
      web_icon:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png ",
      class_content: null,
    },
  },
  {
    id: "9",
    type: "course_category",
    attributes: {
      name: "Class 1",
      status: false,
      total_courses: 0,
      icon_cat:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png",
      web_icon:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png ",
      class_content: null,
    },
  },
  {
    id: "9",
    type: "course_category",
    attributes: {
      name: "Class 1",
      status: false,
      total_courses: 0,
      icon_cat:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png",
      web_icon:
        "https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_640.png ",
      class_content: null,
    },
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  tableRow: {
    cursor: "pointer",
    borderLeft: "8px solid #9a031e",
    marginTop: "8px"
  }
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer
        component={CustomTableContainer}
        style={{ boxShadow: "0" }}
      >
        <Table  aria-label="simple table">
          <TableHead
            style={{
              borderTop: "5px solid black",
              borderBottom: "5px solid black",
            }}
          >
            <TableRow className={classes.tableRow}>
              <TableCell align="center">
                <input type="checkbox" name="" id="" />
              </TableCell>
              <TableCell align="center">S.No</TableCell>
              <TableCell align="center">App Icon</TableCell>
              <TableCell align="center">Web Icon</TableCell>
              <TableCell align="center">cataegory Name</TableCell>
              <TableCell align="center">Total Courses</TableCell>
              <TableCell align="center">Total Students</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <CustomTableCell align="center">
                  <input type="checkbox" name="" id="" />
                </CustomTableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">
                  <img
                    height={"40px"}
                    width={"40px"}
                    src={row.attributes.icon_cat}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">
                  <img
                    height={"40px"}
                    width={"40px"}
                    src={row.attributes.web_icon}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">{row.attributes.name}</TableCell>
                <TableCell align="center">
                  {row.attributes.total_courses}
                </TableCell>
                <TableCell align="center">2000</TableCell>
                <TableCell align="center">
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <AntSwitch
                      checked={true}
                      //   onChange={'handleChange'}
                      name="checkedC"
                    />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <FaRegEdit />
                  <RiDeleteBin6Line />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={10} shape="rounded" />
      </TableContainer>
    </Container>
  );
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch);

const CustomTableContainer = styled(Paper)({
  "&.MuiPaper-elevation1": {
    boxShadow: "none",
  },
  "&.MuiPaper-rounded": {
    borderRadius: "0",
  },
});

const CustomTableCell = styled(TableCell)({
  backgroundColor: "gray",
  padding:"0px"
});
