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

export default class ScreenRoot extends Component {
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

          {/* --------------- AAProject ---------------  */}
          <Route path="/aacard" element={<AACard />} />
          <Route path="/aaservice" element={<AAScrvice />} />

          {/* --------------- DSProject ---------------  */}
          <Route path="/dstoast" element={<HotToast />} />
          <Route path="/dslogin" element={<EmailAccountLoginBlock />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
}
