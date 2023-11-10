import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import {Home} from "./Home";
import ReactPlayerComponent from "./ReactPlayer";
import ContextEx from "./ContextEx";

const queryClient = new QueryClient();
export const ROOT:React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fetch" element={<ReactPlayerComponent />} />
            <Route path="/context" element={<ContextEx />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </>
  );
};
