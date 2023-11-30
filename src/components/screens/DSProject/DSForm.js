import React from "react";

// Customizable Area Start
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Dialog,
  Box,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Menu,
  styled,
} from "@material-ui/core";
import {
  MoreVert,
  Search,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  InfoOutlined,
  KeyboardArrowDown,
} from "@material-ui/icons";

import { Field, Form, Formik } from "formik";

// Customizable Area End

export default class ExampleDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      businessHour: "g",
      showPlaceholder: true,
      setCurrency:'select value'
    };
  }

  // Customizable Area Start
  setShowPlaceholder = () => {
    this.setState({ showPlaceholder: false });
  };
  handleChange = (event) => {
  this.setState({ setCurrency: event.target.value });
    
  };
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <>
        <Box style={styles.container}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={styles.navigation}>
              Settings {">"} User management {">"} Department Fields
            </span>
            <Box style={{ borderRadius: "5px", background: "#e6deed" }}>
              <span style={{ width: "36px", height: "36px" }}>
                <MoreVert
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "black",
                    padding: "5px",
                  }}
                />
              </span>
            </Box>
          </Box>

          <Box
            style={{
              marginTop: "60px",
              marginBottom: "50px",
            }}
          >
            <Box style={{ display: "flex", gap: "5px" }}>
              <button style={styles.arrow}>
                <KeyboardArrowLeft style={styles.arrow_icon} />
              </button>
              <button style={styles.arrow}>
                <KeyboardArrowRight style={styles.arrow_icon} />
              </button>
            </Box>
            <Box style={styles.department_main_box}>
              <h1 style={styles.heading}>{"departmentLabel"}</h1>
              <InfoOutlined style={{ color: "#8760A9" }} />
            </Box>
          </Box>

          <Box style={{ marginBottom: "32px", position: "relative" }}>
            <Search style={styles.search_icon} />
            <Input
              disableUnderline={true}
              style={styles.input}
              placeholder={"Search..."}
            />
          </Box>
          <Box style={{ display: "flex", gap: "20px" }}>
            <Box style={styles.departmentsList}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "37px",
                }}
              >
                <Box style={styles.cardHead}>
                  <span style={styles.card_heading}>{"departmentLabel"}</span>
                  {this.state?.departmentsList?.length !== 0 && (
                    <span style={styles.department_count}>
                      ({this.state?.departmentsList?.length})
                    </span>
                  )}
                </Box>
                <Button style={styles.export_button}>{"exportBTN"}</Button>
              </Box>
              <Box>
                <TableContainer>
                  <Table size="medium">
                    <TableHead>
                      <TableRow>
                        <TableCell style={styles.department_label}>
                          {"departmentNameLabel"}
                        </TableCell>
                        <TableCell style={styles.department_label}>
                          {"departmentHeadLabel"}
                        </TableCell>
                        <TableCell style={styles.department_label}>
                          {"primeUserLabel"}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state?.departmentsList?.length > 0 &&
                        this.getTableData().map((department, i) => (
                          <TableRow hover key={`key-${department.id}-${i}`}>
                            <TableCell
                              component="th"
                              scope="row"
                              style={styles.truncatedText}
                            >
                              {department.department_name}
                            </TableCell>
                            <TableCell style={styles.truncatedText}>
                              {department.department_head}
                            </TableCell>
                            <TableCell style={styles.truncatedText}>
                              {department.prime_user}
                            </TableCell>
                          </TableRow>
                        ))}
                      {this.state?.departmentsList?.length <= 0 && (
                        <Typography>{"emptyDataMessage"}</Typography>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "42px",
                }}
              >
                <Button style={styles.create_button} data-test-id="openModal">
                  {"addNewDepartment"}
                </Button>
              </Box>
            </Box>
            <Box style={styles.accordians}>
              <List component="nav">
                {this.navigationList?.map((item, index) => {
                  if (item.list.length) {
                    return (
                      <>
                        <ListItem
                          button
                          key={`key-${item.title}-${index}`}
                          style={styles.navigation_item}
                          onClick={() => this.openAccordian(index)}
                          data-test-id="openAccordian"
                        >
                          <ListItemText
                            disableTypography={true}
                            primary={item.title}
                            style={styles.navigation_link}
                          />
                        </ListItem>
                        <Collapse
                          timeout="auto"
                          unmountOnExit
                          in={this.state.openListIndex === index}
                        >
                          {item.list.map((link, index) => (
                            <List
                              key={`key-${link.title}-${index}`}
                              disablePadding
                            >
                              <ListItem
                                style={{
                                  ...styles.navigation_item_nested,
                                  ...(this.pathname === link.href &&
                                    styles.navigation_item_active),
                                }}
                                href={link.href}
                                component="a"
                                button
                              >
                                <ListItemText
                                  style={{
                                    ...styles.navigation_link,
                                    ...(this.pathname === link.href &&
                                      styles.navigation_link_active),
                                  }}
                                  disableTypography={true}
                                  primary={link.title}
                                />
                              </ListItem>
                            </List>
                          ))}
                        </Collapse>
                      </>
                    );
                  }

                  return (
                    <ListItem
                      style={styles.navigation_item}
                      key={item.title}
                      button
                    >
                      <ListItemText
                        style={styles.navigation_link}
                        primary={item.title}
                        disableTypography={true}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>

        <Dialog
          open={this.state.showModal}
          fullWidth={true}
          maxWidth="lg"
          data-test-id="close-dialog"
        >
          <Box p={"1rem"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typography style={styles.table_heading}>
                {"createNewDepartmentBTN"}
              </Typography>
              <span
                style={{ height: "30px", width: "30px" }}
                onClick={() => this.handleModalOpen(false)}
                data-test-id="cancelIcon"
              ></span>
            </Box>

            <Formik
              initialValues={this.state?.initialValues}
              data-test-id="formikClickEvent"
            >
              {({ errors, touched }) => (
                <Form translate={undefined} style={styles.form_main_box}>
                  <h3>General</h3>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box>
                        <InputLabel
                          style={{ marginBottom: "5px" }}
                          htmlFor="department_name"
                        >
                          {"departmentNameLabel"}
                          <span style={{ color: "red" }}>*</span>
                        </InputLabel>
                        <Field
                          type="text"
                          name="department_name"
                          id="department_name"
                          as={TextField}
                          fullWidth
                          variant="outlined"
                          error={
                            touched.department_name && !!errors.department_name
                          }
                          helperText={
                            touched.department_name && errors.department_name
                          }
                          required
                        />
                      </Box>
                      <Box>
                        <InputLabel
                          style={{ marginBottom: "5px" }}
                          htmlFor="domains_for_department"
                        >
                          {"domainForDepartmentLabel"}
                        </InputLabel>
                        <Field
                          type="text"
                          name="domains_for_department"
                          id="domains_for_department"
                          as={TextField}
                          fullWidth
                          variant="outlined"
                          error={
                            touched.domains_for_department &&
                            !!errors.domains_for_department
                          }
                          helperText={
                            touched.domains_for_department &&
                            errors.domains_for_department
                          }
                        />
                      </Box>
                      <Box>
                        <InputLabel
                          style={{ marginBottom: "5px" }}
                          htmlFor="domains_for_department"
                        >
                          {"domainForDepartmentLabel"}
                        </InputLabel>
                        <Field
                          type="text"
                          name="domains_for_department"
                          id="domains_for_department"
                          as={TextField}
                          fullWidth
                          variant="outlined"
                          error={
                            touched.domains_for_department &&
                            !!errors.domains_for_department
                          }
                          helperText={
                            touched.domains_for_department &&
                            errors.domains_for_department
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      {/* <Box style={{height:'100%'}}> */}
                      <InputLabel
                        style={{ marginBottom: "5px" }}
                        htmlFor="domains_for_department"
                      >
                        {"domainForDepartmentLabel"}
                      </InputLabel>
                      <DescTextinput
                        // style={{height:'100%'}}
                        type="text"
                        name="domains_for_department"
                        id="domains_for_department"
                        as={TextField}
                        fullWidth
                        rows={10}
                        multiline
                        variant="outlined"
                        placeholder="select domain"
                        error={
                          touched.domains_for_department &&
                          !!errors.domains_for_department
                        }
                        helperText={
                          touched.domains_for_department &&
                          errors.domains_for_department
                        }
                      />
                      {/* </Box> */}
                    </Grid>
                  </Grid>
                  <Box style={{ width: "100%" }}>
                    <h3>Group Automation</h3>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel
                        style={{ marginBottom: "5px" }}
                        htmlFor="department_name"
                      >
                        {"Group Name "}
                        <span style={{ color: "red" }}>*</span>
                      </InputLabel>
                      <Field
                        type="text"
                        name="department_name"
                        placeholder="Enter Group Name"
                        id="department_name"
                        as={TextField}
                        fullWidth
                        variant="outlined"
                        error={
                          touched.department_name && !!errors.department_name
                        }
                        helperText={
                          touched.department_name && errors.department_name
                        }
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel
                        style={{ marginBottom: "5px" }}
                        htmlFor="department_name"
                      >
                        {"Group Name "}
                        <span style={{ color: "red" }}>*</span>
                      </InputLabel>
                      <Field
                        type="text"
                        name="department_name"
                        placeholder="Enter Group Name"
                        id="department_name"
                        as={TextField}
                        fullWidth
                        variant="outlined"
                        error={
                          touched.department_name && !!errors.department_name
                        }
                        helperText={
                          touched.department_name && errors.department_name
                        }
                        required
                      />
                    </Grid>
                    {/* <div>
                      <InputLabel>Choose an Agent</InputLabel>
                      <Field
                        type="text"
                        name="escalation_email"
                        id="escalation_email"
                        as={TextField}
                        fullWidth
                        select
                        variant="outlined"
                        onChange={(e)=>this.handleSelectChange(e)}
                        value={this.state.setCurrency}
                      >
                        {[
                          "All Services",
                          "Most Used",
                          "Contracts",
                          "Payments",
                          "Market",
                          "Voilations",
                        ].map((agent, index) => (
                          <option key={index} value={agent}>
                            {agent}
                          </option>
                        ))}
                      </Field>
                    </div> */}
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        // as={TextField}
                        select
                        fullWidth
                        label="Select"
                        value={this.state.setCurrency}
                        onChange={(e)=>this.handleChange(e)}
                        variant="outlined"
                      >
                        {[
                          "All Services",
                          "Most Used",
                          "Contracts",
                          "Payments",
                          "Market",
                          "Voilations",
                        ].map((option,idx) => (
                          <MenuItem key={idx} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </Grid>
                  <Box mt={"30px"} style={styles.modal_button_main_box}>
                    <Button
                      data-test-id="modal_Cancel_Btn"
                      type="reset"
                      style={styles.cancel_button}
                      onClick={() => this.handleModalOpen(false)}
                    >
                      {"cancelBTN"}
                    </Button>
                    <Button type="submit" style={styles.add_button}>
                      {"saveBTN"}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Dialog>
      </>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const styles = {
  container: {
    paddingBottom: "25px",
    height: "100%",
    margin: "15px 15px 15px 300px",
    fontFamily: "Manrope",
  },
  heading: {
    fontSize: "30px",
    marginTop: "10px",
    lineHeight: "40px",
    fontWeight: "bold",
    color: "#33354D",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    height: "28px",
    justifyContent: "center",
    borderRadius: "100px",
    border: "1px solid #E6DEED",
    width: "28px",
    cursor: "pointer",
    backgroundColor: "white",
  },
  arrow_icon: {
    width: "20px",
    height: "20px",
    color: "#33354D",
  },

  table_heading: {
    color: "#33354D",
    fontStyle: "normal",
    fontFamily: "Manrope",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "normal",
    marginBottom: "30px",
  },
  card_heading: {
    color: "#33354D",
    fontFamily: "Manrope",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  export_button: {
    fontFamily: "Manrope",
    fontWeight: "bolder",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#8760A9",
    letterSpacing: "0em",
    textTransform: "capitalize",
  },

  department_count: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "19px",
  },
  departmentsList: {
    borderRadius: "8px",
    flex: "1",
    alignSelf: "flex-start",
    padding: "16px",
    boxShadow:
      "0px 8px 32px 0px rgba(135, 96, 169, 0.16), 0px 4px 8px 0px rgba(135, 96, 169, 0.13)",
  },

  department: {
    display: "flex",
    alignItems: "center",
    gap: "26px",
    borderRadius: "8px",
    border: "1px solid #E6DEED",
    padding: "17px 12px",
    height: "58px",
  },

  department_label: {
    fontFamily: "Manrope",
    fontSize: "14px",
    color: "#A3A6C2",
  },

  create_button: {
    padding: "10px 16px",
    backgroundColor: "#E6DEED",
    color: "#33354D",
    fontFamily: "Manrope",
    fontWeight: "bolder",
    fontSize: "16px",
    letterSpacing: "0em",
    lineHeight: "16px",
    textTransform: "initial",
    borderRadius: "4px",
  },

  add_button: {
    padding: "10px 16px",
    backgroundColor: "#8760A9",
    fontSize: "16px",
    color: "#FFF",
    fontWeight: 600,
    fontFamily: "Manrope",
    lineHeight: "16px",
    letterSpacing: "0em",
    borderRadius: "4px",
    textTransform: "initial",
  },

  cancel_button: {
    padding: "10px 16px",
    fontSize: "16px",
    fontFamily: "Manrope",
    backgroundColor: "transparent",
    fontWeight: 600,
    color: "#8760A9",
    lineHeight: "16px",
    letterSpacing: "0em",
    borderRadius: "4px",
    textTransform: "initial",
  },
  accordians: {
    boxShadow: "0px 4px 8px 0px #8760A921",
    flexBasis: "30%",
    borderRadius: "8px",
    padding: "4px",
  },
  navigation: {
    fontFamily: "Manrope",
    fontSize: "14px",
    lineHeight: "19px",
  },

  search_icon: {
    height: "24px",
    width: "24px",
    position: "absolute",
    color: "#33354D",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
  },
  input: {
    fontFamily: "Manrope",
    width: "100%",
    height: "40px",
    border: "1px solid #e6deed",
    padding: "10px 10px 10px 40px",
    fontSize: "16px",
    borderRadius: "10px",
  },
  navigation_item: {
    borderRadius: "4px",
    padding: "9px, 20px, 9px, 16px",
  },

  navigation_item_nested: {
    borderRadius: "4px",
    padding: "9px 20px 9px 30px",
  },

  navigation_item_active: {
    color: "white",
    backgroundColor: "#8760A9",
  },

  navigation_link: {
    fontFamily: "Manrope",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#33354D",
    lineHeight: "22px",
    letterSpacing: "0em",
  },
  navigation_link_active: {
    color: "white",
  },
  form_main_box: {
    padding: "1rem",
  },
  cardHead: {
    alignItems: "center",
    display: "flex",
    gap: "5px",
  },
  department_main_box: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  modal_button_main_box: {
    gap: "1rem",
    float: "right",
    display: "flex",
  },
  truncatedText: {
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};
// Customizable Area End
const DescTextinput = styled(Field)({
  "&.MuiFormControl-fullWidth": {
    height: "91%",
  },
  "& .MuiInputBase-fullWidth": {
    height: "100%",
  },
  "& .MuiOutlinedInput-multiline": {
    padding:'10px 14px'
  },
});
