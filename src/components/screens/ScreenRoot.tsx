import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./HTProject/Card";
import ItemCardDesign from "./HTProject/ItemCardDesign";
import Address from "./HTProject/Address";
import MDCProductDesc from "./HTProject/MDCProductDesc";
import TakeTest from "./DVProject/TakeTest";
import EventDesc from "./DVProject/EventDesc";
import AACard from "./AAProject/AACard";
import HotToast from "./DSProject/HotToast";
import AAScrvice from "./AAProject/AAScrvice";
import EmailAccountLoginBlock from "./DSProject/DSLoginRes";
import EmailAccountRegistration from "./DSProject/DSSignUp";
import IndustrialPageWeb from "./AAProject/AAServicePage";
import DSAgentGroup from "./DSProject/DSAgentGroup";
import Exective from "./DVProject/Exective";
import ExampleDialog from "./DSProject/DSForm";
import ASideBar from "./AProject/ASideBar";
import AdminSection from "./AProject/AdminSection";
import EnhancedTable from "./AProject/table";
import TableData from "./AProject/MyTable";
import MoboTable from "./AProject/MoboTable";
// import ListItemComp from "./DSProject/ListItemComp";

export default class ScreenRoot extends Component {
  handleSort = (column: any, sortOrder: any) => {
    return [column, sortOrder];
  };
  handleFavIconClicked = (idx: any) => {};
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* --------------- HTProject ---------------  */}
          <Route path="/card" element={<Card />} />
          <Route path="/itemcart" element={<ItemCardDesign />} />
          <Route path="/address" element={<Address />} />
          <Route path="/productdesc" element={<MDCProductDesc />} />

          {/* --------------- DVProject ---------------  */}
          <Route path="/test" element={<TakeTest />} />
          <Route path="/evdesc" element={<EventDesc />} />
          <Route path="/dvexe" element={<Exective />} />

          {/* --------------- AAProject ---------------  */}
          <Route path="/aacard" element={<AACard />} />
          <Route path="/aaservice" element={<AAScrvice />} />
          <Route path="/aaservicepage" element={<IndustrialPageWeb />} />

          {/* --------------- DSProject ---------------  */}
          <Route path="/dstoast" element={<HotToast />} />
          <Route path="/dslogin" element={<EmailAccountLoginBlock />} />
          <Route path="/dssignup" element={<EmailAccountRegistration />} />
          <Route path="/dsagent" element={<DSAgentGroup />} />
          <Route path="/dsform" element={<ExampleDialog />} />
          {/* <Route path="/dslist" element={<ListItemComp />} /> */}

          {/* --------------- AProject ------------------- */}
          <Route path="/admin" element={<AdminSection />} />
          <Route path="/table" element={<EnhancedTable />} />
          <Route path="/mobo" element={<MoboTable />} />
          {/* <Route path="/mytable" element={<TableData navigation={'this.props.navigation'}
            tableLink='Projects'
            data-testid="containerTable"
            pagination={{currentPage:1,rowsPerPageOptions:[1],totalLength:1,rowsPerPage:1}}
            handlePageChange={()=>{}}
            handleChangeRowsPerPage={()=>{}}
            onFavIconClick={(index: number) =>
              this.handleFavIconClicked(index)
            }
            handleSort={(column, sortOrder) =>
              this.handleSort(column, sortOrder)
            }
            tableInputs={{apiData:'', colSpanList:'',columsList:'',columnSep:''}}
            id={""} />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
