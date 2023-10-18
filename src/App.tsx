import React from "react";
import TaskRoot from "./components/TaskRoot";
import ParkingRoot from "./components/parkingapp/ParkingRoot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterRoot from "./components/register/RegisterRoot";
import Card from "./components/screens/Card";
import ScreenRoot from "./components/screens/ScreenRoot";

function App() {
  return (
    <>
      {/* <TaskRoot/> */}
      {/* <ParkingRoot/> */}
      {/* <RegisterRoot /> */}
      <ScreenRoot/>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
