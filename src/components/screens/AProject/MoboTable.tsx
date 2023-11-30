import { Box, styled } from "@material-ui/core";
import React, { Component } from "react";
import "./table.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPen, PiArrowsDownUpBold } from "react-icons/pi";

const data = [
  {
    id: "1",
    type: "course_category",
    attributes: {
      name: "Class 5",
      status: true,
      total_courses: 8,
      icon_cat:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--54b77b7383281deec2bc75af58e4e4b6beb1e65b/128128.png",
      web_icon:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--db7f04941d495d778a2c65a781a19f9a8f4afe15/128128.png",
      class_content: null,
    },
  },
  {
    id: "2",
    type: "course_category",
    attributes: {
      name: "Class6",
      status: true,
      total_courses: 4,
      icon_cat:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5f9ad353cd818518e250eee597b7a5714e113478/128128.png",
      web_icon:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b95aed78731d05d1c2126aecc5fa0b9abb971559/128128.png",
      class_content: null,
    },
  },
  {
    id: "4",
    type: "course_category",
    attributes: {
      name: "Class 7",
      status: true,
      total_courses: 0,
      icon_cat:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBhdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f4db479881bda7df9e285b0be1af31544061f3e7/128128.png",
      web_icon:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBiQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--724c0f62ccec35590bc5a34b6bef9512c8c5d1ee/128128.png",
      class_content: null,
    },
  },
  {
    id: "5",
    type: "course_category",
    attributes: {
      name: "Class 8",
      status: true,
      total_courses: 0,
      icon_cat:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9047052111cb9d60a247890925ab30f864442c72/128128.png",
      web_icon:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBkQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59bbaad8e84f182f4fe2a5501cdf2a484a49ab87/128128.png",
      class_content: null,
    },
  },
  {
    id: "6",
    type: "course_category",
    attributes: {
      name: "Class 7",
      status: true,
      total_courses: 0,
      icon_cat:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalFCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a9057c02efbf55a6ffb4e9221d2d7ae744d6e477/128128.png",
      web_icon:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalVCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0d1541a0a319bbbc5ad3536fbd0a221f625dc97/128128.png",
      class_content: null,
    },
  },
  {
    id: "7",
    type: "course_category",
    attributes: {
      name: "Class 7",
      status: true,
      total_courses: 0,
      icon_cat:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBallCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f1a5b8144094ed8c32220ad3765083535410342e/128128.png",
      web_icon:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamNCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--976c562643aaaaf0c349df6d5217c8b86fcc1c13/128128.png",
      class_content: null,
    },
  },
];

export default class MoboTable extends Component {
  renderTable = (item: any) => {
    return (
      <StyledTableBody>
        <tr>
          <td>
            <Box className="desc_checkbox">
              <input
                test-id="rowCheckbox"
                type="checkbox"
                style={webStyles.input}
              />
            </Box>
          </td>
          <td>
            <Box className="desc_icon_box">
              <PiArrowsDownUpBold className="desc_sort_icon" />
            </Box>
          </td>
          <td>{item.id}</td>
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_640.png"
              alt="img"
              className="desc_img"
            />
          </td>
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_640.png"
              alt="img2"
              className="desc_img"
            />
          </td>
          <td>{item.attributes.name}</td>
          <td>{item.attributes.total_courses}</td>
          <td>{item.attributes.total_student || 0}</td>
          <td>
            <CheckBtn className="switch">
              <input
                type="checkbox"
                //   checked={row.attributes.status}
                readOnly
                style={webStyles.input}
              />
              <span className="slider round"></span>
            </CheckBtn>
          </td>
          <td>
            <Box className="desc_edit_icon_box">
              <PiPen className="desc_edit_icon" color={"black"} size={25} />

              <FaRegTrashAlt className="desc_edit_icon" color={"black"} size={20}/>
            </Box>
          </td>
        </tr>
        <Box className="table_divider" style={webStyles.tableDivider}/>
      </StyledTableBody>
    );
  };

  render() {
    return (
      <>
        <Box>
          <Styletable>
            <thead>
              <tr>
                <th>
                  <Box
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      test-id="headerCheckbox"
                      checked={false}
                      style={webStyles.input}
                    />
                  </Box>
                </th>
                <th></th>
                <th>S.No</th>
                {[
                  "App Icon",
                  "Web Icon",
                  "cataegory Name",
                  "Total Courses",
                  "Total Students",
                ].map((header, index) => (
                  <th key={index.toString()}>{header}</th>
                ))}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <span style={webStyles.dividerLine}></span>
            {data.map((item) => this.renderTable(item))}
          </Styletable>
        </Box>
      </>
    );
  }
}

const Styletable = styled("table")({
  minWidth: "670px",
  overflow: "scroll",
  width: "100%",
  marginTop: "10px",
  borderTop: "2px solid black",
  borderSpacing: "0",
  position: "relative",
  color: "black",

  "& thead": {
    width: "100%",
    borderCollapse: "initial",
    padding: "10px 5px",
    height: "50px",
   
  },

  "& th": {
    borderBottom: "2px solid black",
    fontWeight: "600",
    "@media (max-width:950px)": {
      fontSize:'14px'
    },
    "@media (max-width:750px)": {
      fontSize:'12px'
    },
  },

  "& td": {
   
    "& .desc_checkbox": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
    "& .desc_icon_box": {
      textAlign: "left",
      "& .desc_sort_icon": {
        backgroundColor: "lightgray",
        padding: "3px",
        height: "20px",
        width: "20px",
      },
    },
    "& .desc_img": {
      height: "40px",
      width: "40px",
    },
    "& .desc_edit_icon_box": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .desc_edit_icon": {
        cursor: "pointer",
        margin: "0 5px",
      },
    },
 
  },
  "&.table_divder":{
    height: "10px",
  } ,
});

const StyledTableBody = styled("tbody")({
  
  "& tr": {
    backgroundColor: "#f5f5f7",
    borderRadius: "20px",
    height: "50px",
    padding: "45px",
    margin: "20px",
  },

  "& td": {
    fontWeight: "500",
    fontSize: "16px",
    textAlign: "center",
    "@media (max-width:950px)": {
      fontSize:'14px'
    },
    "@media (max-width:750px)": {
      fontSize:'12px'
    },
  },

  "& td button": {
    border: "none",
  },
});
const CheckBtn = styled("label")({
  "& .switch": {
    position: "relative",
    display: "inline-block",
    width: "35px",
    marginTop: "5px",
    "& input": {
      opacity: 0,
      width: 0,
      height: 0,
    },
  },
  "& .slider": {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: "-1px",
    backgroundColor: "#ccc",
    WebkitTransition: ".4s",
    transition: ".4s",
    borderRadius: "100px",
  },
  "& input:checked + .slider": {
    backgroundColor: "#708328",
  },
  "& input:checked + .slider::before": {
    WebkitTransform: "translateX(26px)",
    msTransform: "translateX(26px)",
    transform: "translateX(26px)",
  },
  "& input:focus + .slider": {
    backgroundColor: "#708328",
  },
  "& .slider.round": {
    borderRadius: "20px",
  },
  "& .slider.round:bofore": {
    borderRadius: "50%",
  },
});

const webStyles = {
  // table th svg {
  //     color: var(--gray),
  //    margin-bottom: -5px,
  // }

  dividerLine: {
    height: "20px",
    display: "inline-block",
  },
  tableDivider: {
    height: "10px",
  },

  input: {
    width: "20px",
    height: "20px",
    border: "3px solid black",
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // .tableBody td:nth-child(2) svg{
  //     background-color: #d9d9d9,
  //     border-radius: 3px,
  //     padding: 3px,
  //     margin-top: 3px,
  // }
  // .tableBody td:nth-child(3) {
  //     width: 100px,
  // }

  // .tableBody td button svg, .tableBody td a svg{
  //     font-size: 1.4rem,
  // }
  tableActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // .tableActions a{
  //     text-decoration: none,
  // }

  currentPage: {
    backgroundColor: "#176876",
    color: "white",
    borderRadius: "5px",
    padding: "0px 5px",
  },

  modalContent: {
    width: "90%",
    maxWidth: "700px",
    backgroundColor: "#fff",
    borderRadius: "5px",
  },

  tableFooter: {
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
    width: "320px",
    marginRight: "40px",
  },

  // .tableFooter p{
  //     color: #7ca1a4,
  //     font-size: 1.1rem,
  //     font-weight: 600,
  // }

  pagination: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // .pagination span, .pageWrapper svg{
  //     font-size: 1.1rem,
  //     font-weight: 500,
  // }

  pageWrapper: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // .pageWrapper svg{
  //     font-size: 1.4rem,
  // }

  // .pageWrapper button{
  //     background: none,
  //     border: none,
  //     font-size: 1.4rem,
  //     display: flex,
  //     align-items: center,
  //     justify-content: center,
  // }

  tableBodyMsg: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    width: "100%",
    marginTop: "50px",
    border: "1px solid red",
  },

  // .tableBodyMsg p, .tableBodyMsg span, .tableBodyMsg svg{
  //     text-align: center,
  //     font-weight: 600,
  //     font-size: 1rem,
  // }
};
