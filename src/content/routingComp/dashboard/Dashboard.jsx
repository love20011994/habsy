import React from "react";
import "../Routing.css";
import ListIcon from "../asset/listOrder-icon.svg";
import SentInIcon from "../asset/sendIn-icon.svg";
import PayableIcon from "../asset/payable-icon.svg";
import OverdueIcon from "../asset/overdue-icon.svg";
import AmountRecIcon from "../asset/amoutRec-icon.svg";
import RejectedIcon from "../asset/rejected-icon.svg";
import DisputeIcon from "../asset/dispute-icon.svg";
import PenaltyIcon from "../asset/penalty-icon.svg";
import { Link } from "react-router-dom";
import Calender from "../../../calender/Calender";

function Dashboard() {
  return (
    <>
      <div className="dash-div">
        <div className="w-100 row">
          <div className="col-6">
            <b>Dashboard</b>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Calender />
          </div>
        </div>
        <div className="dash-inner mt-3 ps-4 row w-100">
          <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
            <p className="icon-head">
              <img src={ListIcon} alt="list-order" />
              <span>List of Order</span>
            </p>
            <p className="head-inner m-0">
              Total <span>2123</span>
            </p>
            <p className="head-inner2 m-0">
              ₹ <span>12341233234</span>
            </p>
          </div>
          <Link
            style={{
              textDecoration: "none",
              padding: 0,
              width: "260px",
              height: "120px",
            }}
            className="me-3 mt-1 col-lg-3 col-md-6 col-sm-12 "
            to="/dashboard/sentinvoice"
          >
            <div className="dash-list p-3">
              <p className="icon-head">
                <img src={SentInIcon} alt="sentInvoice" />
                <span>Sent Invoice</span>
              </p>
              <p className="head-inner m-0">
                Total <span>2123</span>
              </p>
              <p className="head-inner2 m-0">
                ₹ <span>12341233234</span>
              </p>
            </div>
          </Link>
          <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
            <p className="icon-head">
              <img src={PayableIcon} alt="payable" />
              <span>Payable Amount</span>
            </p>
            <p className="head-inner m-0">
              Total <span>2123</span>
            </p>
            <p className="head-inner2 m-0">
              ₹ <span>12341233</span>
            </p>
          </div>
          <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
            <p className="icon-head">
              <img src={OverdueIcon} alt="overdue" />
              <span>OverDue</span>
            </p>
            <p className="head-inner m-0">
              Total <span>2123</span>
            </p>
            <p className="head-inner2 m-0">
              ₹ <span>12341233</span>
            </p>
          </div>
          <div className="dash-content-2">
            <h5>Due by Age Summary</h5>
            <p>Payment due days wise</p>
            <div className="day-wise ps-1 w-100  row">
              <div className="cards-day">
                <p>7 days</p>
                <p>
                  ₹ <span>1234234</span>
                </p>
              </div>
              <div className="cards-day">
                <p>15 days</p>
                <p>
                  ₹ <span>287313123</span>
                </p>
              </div>
              <div className="cards-day">
                <p>30 days</p>
                <p>
                  ₹ <span>01301</span>
                </p>
              </div>
              <div className="cards-day">
                <p>45 days</p>
                <p>
                  ₹ <span>12234445</span>
                </p>
              </div>

              <div className="cards-day">
                <p>60 days</p>
                <p>
                  ₹ <span>1200</span>
                </p>
              </div>
              <div className="cards-day">
                <p>90 days</p>
                <p>
                  ₹ <span>1237234</span>
                </p>
              </div>
              <div className="cards-day">
                <p>180 days</p>
                <p>
                  ₹ <span>122</span>
                </p>
              </div>
            </div>
          </div>
          <div className="dash-content-3 w-100 row">
            <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
              <p className="icon-head">
                <img src={AmountRecIcon} alt="AmountRecIcon" />
                <span>Amount Received</span>
              </p>
              <p className="head-inner m-0">
                Total <span>2123</span>
              </p>
              <p className="head-inner2 m-0">
                ₹ <span>12341233234</span>
              </p>
            </div>
            <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
              <p className="icon-head">
                <img src={RejectedIcon} alt="RejectedIcon" />
                <span>Rejected</span>
              </p>
              <p className="head-inner m-0">
                Total <span>2123</span>
              </p>
              <p className="head-inner2 m-0">
                ₹ <span>12341233234</span>
              </p>
            </div>
            <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
              <p className="icon-head">
                <img src={DisputeIcon} alt="DisputeIcon" />
                <span>Dispute</span>
              </p>
              <p className="head-inner m-0">
                Total <span>2123</span>
              </p>
              <p className="head-inner2 m-0">
                ₹ <span>12341233</span>
              </p>
            </div>
            <div className="me-3 p-3 mt-1 col-lg-3 col-md-6 col-sm-12 dash-list">
              <p className="icon-head">
                <img src={PenaltyIcon} alt="PenaltyIcon" />
                <span>Penalty</span>
              </p>
              <p className="head-inner m-0">
                Total <span>2123</span>
              </p>
              <p className="head-inner2 m-0">
                ₹ <span>12341233</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
