import React, { createContext, useContext } from "react";

import TaskRoot from "./components/TaskRoot";
import ParkingRoot from "./components/parkingapp/ParkingRoot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterRoot from "./components/register/RegisterRoot";
import Card from "./components/screens/HTProject/Card";
import ScreenRoot from "./components/screens/ScreenRoot";
import { ROOT } from "./components/functional /ROOT";

export const DataContext = createContext("");
function App() {
  return (
    <>
      <DataContext.Provider value={"anubhav"}>
        {/* <TaskRoot/> */}
        {/* <ParkingRoot/> */}
        {/* <RegisterRoot /> */}
        <ScreenRoot />
        {/* <ROOT /> */}

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
      </DataContext.Provider>
    </>
  );
}

export default App;
