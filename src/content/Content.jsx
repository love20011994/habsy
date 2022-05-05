import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Content.css";
import Sidebar from "./sidebar/Sidebar";

import Dashboard from "./routingComp/dashboard/Dashboard";
import Company from "./routingComp/Company";
import Report from "./routingComp/Report";
import SendInvoice from "./routingComp/dashboard/routing/SendInvoice";

function Content() {
  const [sidebar, setSidebar] = useState(false);
  const fnSidebar = () => {
    if (sidebar == false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };
  return (
    <BrowserRouter>
      <div className="content-div">
        <div className="content row w-100 col-12">
          <div className={sidebar ? "sidebars" : "sidebar-disable"}>
            <Sidebar />
          </div>
          <div className={sidebar ? "content-inner" : "content-disable"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              onClick={() => fnSidebar()}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/report" element={<Report />} />
              <Route path="/company" element={<Company />} />
              <Route path="/dashboard/sentinvoice" element={<SendInvoice />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Content;
