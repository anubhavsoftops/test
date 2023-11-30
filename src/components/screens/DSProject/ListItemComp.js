// import { Box, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
// import React, { Component } from 'react'

// export default class ListItemComp extends Component {
//   render() {
//     return (
//         <Box style={styles.accordians}>
//         <List component="nav">
//           {navigationList.map((item, index) => {
//             if (item.list && item.list.length > 0) {
//               return (
//                 <>
//                   <ListItem
//                     button
//                     data-test-id='openAccordian'
//                     style={styles.navigation_item}
//                     onClick={() =>
//                       this.openAccordian(index)
//                     }
//                     key={`key-${item.title}-${index}`}
//                   >
//                     <ListItemText style={styles.navigation_link} primary={item.title} disableTypography={true} />
//                   </ListItem>
//                   <Collapse
//                     timeout="auto" unmountOnExit in={this.state.openListIndex === index}
//                   >
//                     {item.list.map((link, index) => (
//                       <List key={`key-${link.title}-${index}`} disablePadding>
//                         <ListItem
//                           button
//                           style={{
//                             ...(this.pathname ===
//                               link.href &&
//                               styles.navigation_item_active),
//                             ...styles.navigation_item_nested,
//                           }}
//                           href={link.href}
//                           component="a"
//                         >
//                           <ListItemText
//                             disableTypography={true}
//                             primary={link.title}
//                             style={{
//                               ...(this.pathname ===
//                                 link.href &&
//                                 styles.active_link),
//                               ...styles.navigation_link,
//                             }}
//                           />
//                         </ListItem>
//                       </List>
//                     ))}
//                   </Collapse>
//                 </>
//               );
//             }
//             return (
//               <ListItem button key={item.title} style={styles.navigation_item}>
//                 <ListItemText style={styles.navigation_link} disableTypography={true} primary={item.title} />
//               </ListItem>
//             );
//           })}
//         </List>
//       </Box>
//     )
//   }
// }



// navigationList = [
//     {  title: 'Account settings',list: []},
//     {
//       title: 'User management',
//       list: [
//         { 
//           title: 'Agents', 
//           href: '/user-management/agents'
//         },
//         { 
//           title: 'Roles', 
//           href: '/user-management/roles' 
//         },
//         { 
//           title: 'Departments', 
//           href: '/user-management/departments' 
//         },
//         {
//           title: 'Department Fields',
//           href: '/user-management/department-fields',
//         },
//         { 
//           title: 'Requesters', 
//           href: '/user-management/requesters' 
//         },
//         {
//            title: 'User Fields', 
//            href: '/user-management/user-fields'
//         },
//         { 
//           title: 'CAB', 
//           href: '/user-management/cab' 
//         },
//         { 
//           title: 'Agent groups', 
//           href: '/user-management/agent-groups' 
//         },
//         {
//           title: 'Requester groups',
//           href: '/user-management/requester-groups',
//         },
//       ],
//     },
//     { title: 'Channels', list: [],},
//     { title: 'Service management', list: [],},
//     { title: 'Automation and productivity', list: []},
//     { title: 'Asset management',list: []},
//     { title: 'IT operations management',list: [],},
//     { title: 'Project and workload management', list: [] },
//   ];
const styles= {
  container: {
    height: "100%",
    margin: "15px 15px 15px 300px",
    paddingBottom: "25px",
    fontFamily: "Manrope",
  },

  breadcrumb_wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  morevert_wrapper: {
    background: "#e6deed",
    borderRadius: "5px"
  },

  morevert_span: {
    width: "36px",
    height: "36px",
  },

  morevert_icon: {
    width: "24px",
    height: "24px",
    color: "black",
    padding: "5px"
  },

  heading: {
    color: "#33354D",
    fontSize: "30px",
    marginTop: "10px",
    lineHeight: "40px",
    fontWeight: "bold",
  },

  arrow_wrapper: {
    marginTop: "60px",
    marginBottom: "50px",
  },

  arrow_btn_wrapper: {
    display: "flex",
    gap: "5px"
  },

  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    borderRadius: "100px",
    height: "28px",
    border: "1px solid #E6DEED",
    cursor: "pointer",
    backgroundColor: "white",
  },

  arrow_icon: {
    width: "20px",
    color: "#33354D",
    height: "20px",
  },

  label_heading: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  info_color: {
    color: "#8760A9"
  },

  search_wrapper: {
    position: "relative",
    marginBottom: "32px"
  },

  rolesListWrapper: {
    display: "flex",
    gap: "20px"
  },

  roleListBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "37px",
  },

  roleListHeading: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  scrollable_wrapper: {
    overflowY: "scroll",
    maxHeight: "455px"
  },

  card_heading: {
    color: "#33354D",
    fontSize: "20px",
    fontFamily: "Manrope",
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "normal",
  },

  role_count: {
    lineHeight: "19px",
    fontWeight: "bold",
    fontSize: "14px",
  },

  rolesList: {
    flex: "1",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 8px 32px 0px rgba(135, 96, 169, 0.16), 0px 4px 8px 0px rgba(135, 96, 169, 0.13)",
    alignSelf: "flex-start",
  },

  create_button: {
    padding: "10px 16px",
    color: "#33354D",
    backgroundColor: "#E6DEED",
    fontFamily: "Manrope",
    fontWeight: "bolder",
    fontSize: "16px",
    letterSpacing: "0em",
    lineHeight: "16px",
    textTransform: "initial",
    borderRadius: "4px",
  },

  accordians: {
    boxShadow: "0px 4px 8px 0px #8760A921",
    flexBasis: "30%",
    padding: "4px",
    borderRadius: "8px",
  },

  navigation: {
    fontFamily: "Manrope",
    fontSize: "14px",
    lineHeight: "19px",
  },

  input: {
    fontFamily: "Manrope",
    width: "100%",
    border: "1px solid #e6deed",
    height: "40px",
    padding: "10px 10px 10px 40px",
    fontSize: "16px",
    borderRadius: "10px",
  },

  search_icon: {
    width: "24px",
    color: "#33354D",
    height: "24px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "10px",
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
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Manrope",
    letterSpacing: "0em",
    lineHeight: "22px",
    color: "#33354D",
  },

  active_link: {
    color: "white",
  },

  addButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "42px",
  }

};