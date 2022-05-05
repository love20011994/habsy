import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import DashIcon from "./asset/dashboard.svg";
import CompanyIcon from "./asset/company.svg";
import ReportIcon from "./asset/report.svg";

function Sidebar() {
  const [dash, setDash] = useState(false);
  const [report, setReport] = useState(false);
  const [company, setCompany] = useState(false);
  const [count, setCount] = useState(0);
  const ActiveLink = () => {
    var path = window.location.pathname;
    switch (path) {
      case "/report":
        return setDash(false), setReport(true), setCompany(false);

      case "/company":
        return setDash(false), setReport(false), setCompany(true);

      default:
        return setDash(true), setReport(false), setCompany(false);
    }
  };
  useEffect(() => {
    ActiveLink();
  }, [count]);

  return (
    <ul className="unorder-list">
      <Link className="link-route" onClick={() => setCount(count + 1)} to="/">
        <li className={dash ? "list-active" : "list-disable"}>
          <img
            src={DashIcon}
            style={{ width: "16px", height: "16px" }}
            alt="dash-icon"
          />
          <p>Dashboard</p>
        </li>
      </Link>{" "}
      <Link
        className="link-route"
        onClick={() => setCount(count + 1)}
        to="/report"
      >
        <li className={report ? "list-active" : "list-disable"}>
          <img
            src={ReportIcon}
            style={{ width: "16px", height: "16px" }}
            alt="report-icon"
          />
          <p>Report</p>
        </li>
      </Link>{" "}
      <Link
        className="link-route"
        onClick={() => setCount(count + 1)}
        to="/company"
      >
        <li className={company ? "list-active" : "list-disable"}>
          <img
            src={CompanyIcon}
            style={{ width: "16px", height: "16px" }}
            alt="company-icon"
          />
          <p>Company</p>
        </li>
      </Link>
    </ul>
  );
}

export default Sidebar;
