// import React, { Component } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   Switch,
//   Button,
// } from "@material-ui/core";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { PiPen, PiArrowsDownUpBold } from "react-icons/pi";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { withStyles } from "@material-ui/core/styles";


// const styles = () => ({
//   root: {
//     fontFamily: "Poppins, sans-serif",
//   },
//   table: {
//     width: "97%",
//     borderSpacing: 0,
//     margin: "0 20px",
//     fontFamily: "Poppins, sans-serif",
//     position: "relative",
//     // borderCollapse: "separate",
//     // borderSpacing: "0 20px",
//   },
//   tableHead: {
//     width: "100%",
//     borderCollapse: "collapse",
//     padding: "10px 5px",
//     height: "50px",
//   },
//   tableHeadCell: {
//     borderBottom: "2px solid black",
//     fontWeight: 600,
//   },
//   dividerLine: {
//     height: "20px",
//     display: "inline-block",
//   },
//   tableBody: {
//     width: "90%",
//   },
//   checkbox: {
//     width: "20px",
//     height: "20px",
//     border: "3px solid black",
//     background: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   tableRow: {
//     backgroundColor: "#f5f5f7",
//     borderRadius: "20px",
//     height: "50px",
//     padding: "0px 45px",
//     margin: "20px 0",
//   },
//   tableCell: {
//     fontWeight: 500,
//     fontSize: "1rem",
//     textAlign: "center",
//   },
//   switch: {
//     width: "70px",
//   },
//   tableActions: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     border: "none",
//     background: "none",
//   },
//   currentPage: {
//     backgroundColor: "#176876",
//     color: "white",
//     borderRadius: "5px",
//     padding: "0px 5px",
//   },
// });

// interface Props{
//     classes:any
// }
// class CustomTable extends Component<Props> {
//   constructor(props: Props) {
//     super(props);
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <>
//         <TableContainer component={Paper}>
//           <Table className={classes.table}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>
//                   <Checkbox
//                     test-id="headerCheckbox"
//                     // checked={this.state.isHeaderChecked}
//                     // onChange={() =>
//                     //   this.handleHeaderCheckboxChange(this.props.tableData)
//                     // }
//                   />
//                 </TableCell>
//                 <TableCell></TableCell>
//                 <TableCell className={classes.tableHeadCell}>S.No</TableCell>
//                 {/* {this.props.tableHeaders?.map((header: string, index: number) => ( */}
//                   <TableCell  className={classes.tableHeadCell}>
//             fdgfln
//                   </TableCell>
//                 {/* ))} */}
//                 <TableCell className={classes.tableHeadCell}>Status</TableCell>
//                 <TableCell className={classes.tableHeadCell}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody className={classes.tableBody}>
//               {[3,3,3,333,4].map((row: any, index: number) => (
//                 <React.Fragment key={row.id}>
//                   <TableRow className={classes.tableRow}>
//                     <TableCell>
//                       <Checkbox
//                         // test-id="rowCheckbox"
//                         // checked={this.state.isChecked[index]}
//                         // onChange={() => this.handleRowCheckboxChange(index)}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <PiArrowsDownUpBold />
//                     </TableCell>
//                     <TableCell>{index + 1}</TableCell>
//                     {/* {this.props.customRows && this.props.customRows(row)} */}
//                     <TableCell>
//                       <Switch
//                         checked={row.attributes.status}
//                         readOnly
//                       />
//                     </TableCell>
//                     <TableCell className={classes.tableActions}>
//                       <Button
//                         className={classes.button}
//                         // onClick={() => this.props.editCategory(row)}
//                         test-id="modalOpen"
//                       >
//                         <PiPen color={"black"} size={25} />
//                       </Button>
//                       <Button
//                         className={classes.button}
//                         // onClick={() => this.delCategory(row.id)}
//                         test-id="deleteCategory"
//                       >
//                         <FaRegTrashAlt />
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell colSpan={6} className={classes.dividerLine}></TableCell>
//                   </TableRow>
//                 </React.Fragment>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         {/* <div className="tableFooter">
//           <p>View All</p>
//           <div className="pageWrapper">
//             <Button
//               test-id="tablePrev"
//               onClick={() => this.handleTablePrevious(this.props.tableFunction)}
//             >
//               <IoIosArrowBack />
//             </Button>
//             <div className="pagination">
//               {[1, 2, 3, 4, 5].map((pageNo: any, index: any) => (
//                 <Button
//                   key={index.toString()}
//                   className={this.state.pageNo === pageNo ? classes.currentPage : "pageNo"}
//                   onClick={() => this.handleTableNumberClick(pageNo, this.props.tableFunction)}
//                   test-id="numberClick"
//                 >
//                   {pageNo}
//                 </Button>
//               ))}
//             </div>
//             {this.state.categoryData.length > 0 && (
//               <Button
//                 test-id="tableNext"
//                 onClick={() => this.handleTableNext(this.props.tableFunction)}
//               >
//                 <IoIosArrowForward />
//               </Button>
//             )}
//           </div>
//         </div> */}
//       </>
//     );
//   }
// }

// export default withStyles(styles)(CustomTable);

// import React from "react";
// // Customizable Area Start
// import "./categoryAdmin.css";
// import "./table.css";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { PiPen, PiArrowsDownUpBold } from "react-icons/pi";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // Customizable Area End

// import CatalogueController, { Props } from "./CatalogueController";

// export default class Table extends CatalogueController {
//   constructor(props: Props) {
//     super(props);
//     // Customizable Area Start
//     // Customizable Area End
//   }

//   // Customizable Area Start
//   // Customizable Area End

//   render() {
//     return (
//       //Merge Engine DefaultContainer
//       <>
//         <table id="table">
//           <thead>
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   test-id="headerCheckbox"
//                   checked={this.state.isHeaderChecked}
//                   onChange={() =>
//                     this.handleHeaderCheckboxChange(this.props.tableData)
//                   }
//                 />
//               </th>
//               <th></th>
//               <th>S.No</th>
//               {this.props.tableHeaders?.map((header: string, index: number) => (
//                 <th key={index.toString()}>{header}</th>
//               ))}
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <span className="dividerLine"></span>
//             <tbody className="tableBody">
//               {this.props.tableData?.map((row: any, index: number) => (
//                 <>
//                   <tr key={row.id}>
//                     <td>
//                       <input
//                         test-id="rowCheckbox"
//                         type="checkbox"
//                         checked={this.state.isChecked[index]}
//                         onChange={() => this.handleRowCheckboxChange(index)}
//                       />
//                     </td>
//                     <td>
//                       <PiArrowsDownUpBold />
//                     </td>
//                     <td>{index + 1}</td>
//                     {this.props.customRows && this.props.customRows(row)}
//                     <td>
//                       <label className="switch">
//                         <input
//                           type="checkbox"
//                           checked={row.attributes.status}
//                           readOnly
//                         />
//                         <span className="slider round"></span>
//                       </label>
//                     </td>
//                     <td>
//                       <span className="tableActions">
//                         <span
//                           style={{ background: "none", border: "none" }}
//                           onClick={() => this.props.editCategory(row)}
//                           test-id="modalOpen"
//                         >
//                           <PiPen color={"black"} size={25} />
//                         </span>
//                         <span
//                           style={{ background: "none", border: "none" }}
//                           onClick={() => this.delCategory(row.id)}
//                           test-id="deleteCategory"
//                         >
//                           <FaRegTrashAlt />
//                         </span>
//                       </span>
//                     </td>
//                   </tr>
//                   <span className="dividerLine"></span>
//                 </>
//               ))}
//             </tbody>
//         </table>
//         <div className="tableFooter">
//           <p>View All</p>
//           <div className="pageWrapper">
//             <button
//               test-id="tablePrev"
//               onClick={() => this.handleTablePrevious(this.props.tableFunction)}
//             >
//               <IoIosArrowBack />
//             </button>
//             <div className="pagination">
//               {[1, 2, 3, 4, 5].map((pageNo: any, index: any) => (
//                 <span
//                 key={index.toString()}
//                   className={
//                     this.state.pageNo == pageNo ? "currentPage" : "pageNo"
//                   }
//                   onClick={() =>
//                     this.handleTableNumberClick(
//                       pageNo,
//                       this.props.tableFunction
//                     )
//                   }
//                   test-id="numberClick"
//                 >
//                   {pageNo}
//                 </span>
//               ))}
//             </div>
//             {this.state.categoryData.length > 0 && (
//               <button
//                 test-id="tableNext"
//                 onClick={() => this.handleTableNext(this.props.tableFunction)}
//               >
//                 <IoIosArrowForward />
//               </button>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// // Customizable Area Start
// // Customizable Area End
import React, { Component } from "react";
import {
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TablePagination,
  makeStyles,
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
  Select,
  MenuItem,
  Button,
  Input,
  Box,
  // Customizable Area Start
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// const SortIcon = require("./sort.svg");

const THEME = createTheme({
  typography: {
    fontFamily: "Source Sans Pro",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
});

const styles: any = {
  cursorPointer: {
    cursor: "pointer",
  },
  tablePaginaition: {
    "& .MuiIconButton-root": {
      borderRadius: "11px",
      color: "white",
      background: "#3695A7",
    },
  },
  paginationContainer: {
    marginTop: "4px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "36px",
    fontSize: "12px",
    fontWeight: 600,
    "& .MuiSelect-iconOutlined": {
      right: "0 !important",
    },
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      paddingLeft: "5px !important",
      paddingRight: "14px",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
  },
  rowPerPageContainer: {
    "& .MuiSelect-iconOutlined-158": {
      right: "0 !important",
    },
    "& .MuiSelect-outlined-153.MuiSelect-outlined-153": {
      paddingLeft: "5px !important",
      paddingRight: "14px",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
  },

  paginationNavigation: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "8px",
  },
  paginatinoButtons: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "4px",
  },
  paginationOfResults: {
    fontSize: "12px",
    fontWeight: 600,
  },
  paginationSelect: {
    fontSize: "12px",
  },
  select: {
    "& fieldset": {
      border: "0.5px solid #0094A7 !important",
    },
    "& div": {
      "&:focus": {
        background: "none",
      },
      paddingRight: "7px !important",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "6px",
    },

    fontSize: "12px",
  },
  paginationButtons: {
    backgroundColor: "#3696A7",
    padding: "9px",
    color: "white",
    width: "24px",
    minWidth: "24px",
    maxWidth: "24px",
    height: "24px",
    minHeight: "24px",
    maxHeight: "24px",
    "& .MuiSvgIcon-root": {
      fontSize: "15px",
    },
    "&.Mui-disabled": {
      backgroundColor: "#B9DDE1"
    }
  },
  paginationBackArrow: {
    paddingLeft: "7px",
  },
  paginationBtnDisabled: {
    fontSize: "17px",
    color: "white",
    backgroundColor: "#B9DDE1",
    "&.Mui-disabled": {
      backgroundColor: "#B9DDE1"
    }
  },
  paginationBtnEnabled: {
    fontSize: "17px",
    color: "white",
    backgroundColor: "#3695A7",
  },
  textWrap: {
    textWrap: "nowrap",
  },
  onHoverBtn: {
    "&:hover": {
      backgroundColor: "#3695A7",
    },
  },
  paginationButtonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  tableContainer: {
    backgroundColor: "#fff",
    "&::-webkit-scrollbar": {
      backgroundColor: "#E8E8E8",
      borderRadius: "22px",
      height: "12px",
      width: "12px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#E8E8E8",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#0094A7",
      borderRadius: "22px",
    },
  },
};

interface Props {
  id: any;
  classes: any;
  navigation: any;
  tableLink?: string;
  tableInputs: {
    apiData: any;
    colSpanList: any;
    columsList: any;
    columnSep: any;
  };
  pagination: {
    currentPage: number;
    rowsPerPageOptions: number[];
    totalLength: number;
    rowsPerPage: number;
  };
  onFavIconClick: (index: number, iconValue: string) => void;
  handlePageChange: (event: any, newPage: number) => void;
  handleChangeRowsPerPage: (event: any) => void;
  handleSort: (columnName: string, sortOrder: string) => void;
}

interface S {
  isRowPerPageMenuOpened: boolean;
}

interface SS { }

// Customizable Area End

// import { BlockComponent } from "../../../framework/src/BlockComponent";
// import { paginationDropdownIcon } from "../FilterView/assests";

class TableData extends Component<Props, S, SS> {
  selectRef: any;
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    this.selectRef = React.createRef();
    this.state = {
      isRowPerPageMenuOpened: false
    }
    // Customizable Area End
  }

  toggleSelect = () => {
    this.setState((prevState: S) => ({
      isRowPerPageMenuOpened: !prevState.isRowPerPageMenuOpened,
    }));
  };

  // Customizable Area Start
  // Customizable Area End

  handleChangePage(event: unknown, newPage: number) {
    this.props.handlePageChange(event, newPage);
  }

  handleChangeRowsPerPage() { }

  handleMultipleSelectedRecords(data: any) { // array
    if (data && data.length > 0) {
      const services = data.split(',')
      const firstElement = services[0]
      const amount = services.length
      return (
        <Box style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          {firstElement}
          <div style={{
            // position: 'absolute',
            // top: '0',
            // right: '40px',
            // transform: 'translateY(-50%)',
            backgroundColor: '#0094A7',
            borderRadius: '35px',
            color: '#FFF',
            padding: '2px 3px',
            display: (amount > 1) ? 'inline' : 'none',
          }}>+ {amount} </div>
        </Box>
      )

    } else {

    }

  }

  render() {
    const { classes } = this.props;
    // console.log('Table comp. props:', this.props)
    return (
      <MuiThemeProvider theme={THEME}>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead style={{ backgroundColor: "#EBF7F8" }}>
              <TableRow>
                {[1,1,1,1,1,1].map(
                  (headerRow: any, indexOfCSL: number) => (
                    <TableCell
                      key={`header-${headerRow.label}-${indexOfCSL}`}
                      className={classes.tableCell}
                      style={{
                        fontSize: "16px",
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "none",
                        borderRight:
                          indexOfCSL ===
                           [1,1,1,1,1].length - 1
                            ? "none"
                            : indexOfCSL == 0
                              ? "none"
                              : "1px solid #80CAD3",
                        borderLeft:
                          indexOfCSL == 0 ? "none" : "1px solid #80CAD3",
                      }}
                      colSpan={headerRow.colSpan}
                    >
                      {headerRow.colSpan !== 1 && headerRow.label}
                    </TableCell>
                  )
                )}
              </TableRow>
              <TableRow>
                {[11,,1,1,1,11,].map(
                  (headerRow: any, indexOfCL: number) => (
                    <TableCell
                      key={`sub-header-${headerRow.dataLalbel
                        }-${indexOfCL}`}
                      className={classes.textWrap}
                      style={{
                        fontSize: "16px",
                        padding: "8px",
                        borderBottom: "none",
                        minWidth: headerRow.width,
                        borderRight:
                          indexOfCL ===
                            this.props.tableInputs.columsList.length - 1
                            ? "none"
                            : this.props.tableInputs.columnSep.indexOf(
                              indexOfCL + 1
                            ) > -1
                              ? "1px solid #80CAD3"
                              : "1px solid #80CAD3",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: headerRow.textAlign ? headerRow.textAlign : "space-between",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {!headerRow.hideLabel && headerRow.displayLabel}
                        {headerRow.sortOption.isSortable && (
                          <img
                            className={classes.cursorPointer}
                            data-testid="sortIcon"
                            style={{
                              transform:
                                headerRow.sortOption.sortOrder === "ASC"
                                  ? "rotate(180deg)"
                                  : "",
                            }}
                            onClick={() =>
                              this.props.handleSort(
                                headerRow.dataLabel,
                                headerRow.sortOption.sortOrder
                              )
                            }
                            // src={SortIcon}
                            alt="sortIcon"
                          />
                        )}
                      </div>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody style={{ background: "white" }}>
              {this.props.tableInputs.apiData.map(
                (row: any, indexOfAD: number) => (
                  <TableRow key={`${row.name}-${indexOfAD}`}>
                    {[1,1,1,11,1].map(
                      (headerRow: any, indexOfCL: number) => (
                        <TableCell
                          key={`cell-${headerRow.dataLabel}-${indexOfCL}`}
                          style={{
                            padding: "8px",
                            fontWeight: 600,
                            borderBottom: "none",
                            borderRight:
                              indexOfCL ===
                                this.props.tableInputs.columsList.length - 1
                                ? "none"
                                : this.props.tableInputs.columnSep.indexOf(
                                  indexOfCL + 1
                                ) > -1
                                  ? "1px solid #80CAD3"
                                  : "1px solid #80CAD3",
                          }}
                        >
                          {headerRow.type === "value" && row[headerRow.dataLabel]}
                          {headerRow.type === "projectServices" && row[headerRow.dataLabel]}
                          {headerRow.type === "icon" && (
                            <img
                              className={classes.cursorPointer}
                              data-test-id="favIcon"
                              onClick={() =>
                                this.props.onFavIconClick(
                                  indexOfAD,
                                  row[headerRow.dataLabel]
                                )
                              }
                              src={row[headerRow.dataLabel]}
                            />
                          )}
                          {headerRow.type === "boolean" &&
                            (row[headerRow.dataLabel] ? "Yes" : "No")}
                          {headerRow.type === "link" && (
                            <a style={{
                              cursor: "pointer", textDecoration: "underline", color: "#0094A7",
                            }}
                              {...row["id"] ? { target: "_blank", href: `/${this.props.tableLink ? this.props.tableLink : 'People'}/${row["id"]}` } : {}}>
                              {row[headerRow.dataLabel]}
                            </a>
                          )}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.paginationContainer}>
          <div className={classes.rowPerPageContainer}>
            <span style={{ padding: "0px 16px" }}>Results per page</span>
            <Select
              name="asdf"
              className={classes.select}
              open={this.state.isRowPerPageMenuOpened}
              value={this.props.pagination.rowsPerPage}
              variant="outlined"
              onChange={this.props.handleChangeRowsPerPage}
              onOpen={this.toggleSelect}
              onClose={this.toggleSelect}
              ref={this.selectRef}
              MenuProps={{
                disableScrollLock: true,
              }}
              IconComponent={() => (
                <img
                  onClick={this.toggleSelect}
                  style={{ cursor: "pointer", paddingRight: "8px" }}
                //   src={paginationDropdownIcon}
                />
              )}
            >
              {this.props.pagination.rowsPerPageOptions.map(
                (val: number) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                )
              )}
            </Select>
          </div>
          <div className={classes.paginationNavigation}>
            <div className={classes.paginationOfResults}>
              {this.props.tableInputs.apiData.length} of{" "}
              {this.props.pagination.totalLength} Results
            </div>
            <div className={classes.paginationButtonsContainer}>
              <Button
                className={`${classes.paginationButtons} ${this.props.pagination.currentPage === 0
                  ? ""
                  : classes.onHoverBtn
                  }`}
                onClick={() => this.onPageChange("previous")}
                disabled={this.props.pagination.currentPage === 0}
                variant="contained"
              >
                <ArrowBackIosIcon
                  className={`${classes.paginationBackArrow} ${this.props.pagination.currentPage === 0
                    ? classes.paginationBtnDisabled
                    : classes.paginationBtnEnabled
                    }`}
                />
              </Button>
              <div>
                {this.props.pagination.currentPage + 1 > 10
                  ? this.props.pagination.currentPage + 1
                  : "0" + (this.props.pagination.currentPage + 1)}
              </div>
              <Button
                className={`${classes.paginationButtons} ${this.props.pagination.currentPage ===
                  Math.floor(
                    this.props.pagination.totalLength /
                    this.props.pagination.rowsPerPage
                  )
                  ? ""
                  : classes.onHoverBtn
                  }`}
                onClick={() => this.onPageChange("next")}
                disabled={
                  this.props.pagination.currentPage ===
                  Math.floor(
                    this.props.pagination.totalLength /
                    this.props.pagination.rowsPerPage
                  )
                }
                variant="contained"
              >
                <ArrowForwardIosIcon
                  className={`${this.props.pagination.currentPage ===
                    Math.floor(
                      this.props.pagination.totalLength /
                      this.props.pagination.rowsPerPage
                    )
                    ? classes.paginationBtnDisabled
                    : classes.paginationBtnEnabled
                    }`}
                />
              </Button>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  onPageChange(value: string) {
    if (value === "previous") {
      this.props.handlePageChange("", this.props.pagination.currentPage - 1);
    } else if (value === "next") {
      this.props.handlePageChange("", this.props.pagination.currentPage + 1);
    }
  }
}
// Customizable Area Start
const webStyle = {
  TableCell: { borderRight: "1px solid #01949A" },
  divRoot0: { display: "flex" },
  divRoot1: {
    display: "flex",
    backgroundColor: "#01949A",
    height: "50px",
    position: "sticky",
    marginTop: "19px",
  },
  divRoot2: { marginTop: "9px", width: "7rem", height: "2rem", fill: "white" },
  divRoot3: { color: "white", margin: "13px 0px 0px -30px" },
  divRoot4: {
    color: "white",
    backgroundColor: "#01949A",
    border: "1px solid white",
    marginLeft: "60vw",
    marginTop: "0.4vw",
  },
  divRoot5: { height: "67vh", overflow: "scroll" },
  divRoot22: { width: "78%", margin: "15px" },
  tableRoot: { display: "flex" },
  tabRoots: { height: "90.7vh" },
  divRoot: { backgroundColor: "#01949A", height: "7%" },
};
export default withStyles(styles)(TableData);
// Customizable Area End
