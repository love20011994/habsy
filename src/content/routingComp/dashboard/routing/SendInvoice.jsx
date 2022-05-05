// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./DashRouting.css";
// import SearchIcon from "../../../../navbar/search-icon.svg";
// import Datas from "../../../../datas/Data.json";
// import Send_invoice from "./send_invoice/AddInvoice";
// import { useDispatch, useSelector } from "react-redux";
// import ViewStatus from "./view_status/ViewStatus";
// import Calender from "../../../../calender/Calender";

// function SendInvoice() {
//   const [search, setSearch] = useState("");
//   const [changes, setChanges] = useState(true);
//   const [status, setStatus] = useState("");
//   const [addInvoice, setAddinvoice] = useState(false);
//   const[invoiceData,setinvoiceData]=useState("")
//   useEffect(() => {
//     if (search == "") {
//       setChanges(true);
//     } else {
//       setChanges(false);
//     }
//   }, [search]);
//   const isClicked = useSelector((state) => state.addinvoice);
//   const dispatch = useDispatch();
//   const ViewStat = useSelector((state) => state.viewStatus);
//   const checkbox = (val) => {
//     if (val.checked === true) {
//       var getDocument = document.getElementsByClassName("checked");
//       for (let i = 0; i < getDocument.length; i++) {
//         getDocument[i].checked = false;
//       }
//       val.checked = true;
//       setAddinvoice(true);
//       dispatch({ type: "true" });
//       setinvoiceData(Datas[val.value])
//     } else {
//       val.checked = false;
//       setAddinvoice(false);
//     }
//   };

//   return (
//     <>
//       <div className="SendInvoice-div ">
//         <div className="breedcrums mt-1">
//           <p>
//             <Link
//               to="/"
//               style={{ textDecoration: "none", color: "black", padding: 0 }}
//             >
//               {" "}
//               Dashboard
//             </Link>{" "}
//             / Invoice Recieved
//           </p>
//         </div>
//         <div className="row w-100">
//           <div className="col-6 ">
//             {" "}
//             <h5>Send Invoice</h5>
//           </div>
//           <div className="col-6 p-0 d-flex justify-content-end">
//             <Calender />
//           </div>
//         </div>

//         <div className=" row w-100 m-0 col-12 d-inline-flex SendInvoice-head">
//           <div className="col-lg-6 col-md-5 col-sm-12 SendInvoice-inner">
//             <button type="button">Invoice</button>
//             <button type="button">Penalty</button>
//           </div>
//           <div className=" col-lg-6 col-md-7 col-sm-12 right-inner-head">
//             <div className="search-box ">
//               <input
//                 className=""
//                 type="text"
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                 }}
//               />
//               <img src={SearchIcon} alt="search-icon" />
//               {changes && <p>Search</p>}
//             </div>
//             <button className="Eq-btn">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-sliders2"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
//                 />
//               </svg>
//             </button>

//             <button
//               onClick={() => dispatch({ type: "false" })}
//               className="new-rule-btn"
//             >
//               {addInvoice ? `Add Invoice`:`New invoice`}
//             </button>
//           </div>
//         </div>
//         <div className="mb-5 ">
//           <table className="mt-2 table table-property  table-stripped table-borderless">
//             <thead>
//               <tr>
//                 <th>All</th>
//                 <th>No</th>
//                 <th>Order Id</th>
//                 <th>Order details</th>
//                 <th>Due date</th>
//                 <th>Invoice amount</th>
//                 <th>Split Invoices</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Datas &&
//                 Datas.map((val, index) => (
//                   <tr className="table-rows" key={index}>
//                     <td style={{ width: "30px" }}>
//                       <input
//                         type="checkbox"
//                         onChange={(e) => checkbox(e.target)}
//                         className="checked"
//                         value={index}
//                       />
//                     </td>
//                     <td style={{ width: "30px" }}>{val.id}</td>
//                     <td style={{ width: "50px" }}>{val.orderId}</td>
//                     <td>{val.orderDetails}</td>
//                     <td>{val.dueDate}</td>
//                     <td>
//                       ₹ <span className="text-dark">{val.invoiceAmount}</span>
//                     </td>
//                     <td className="text-dark">{val.splitInvoice}</td>
//                     <td className="view-status ">
//                       <div className="row">
//                         <div className="p-2 col-2">
//                           <p style={{ backgroundColor: val.statusColor }}> </p>
//                         </div>{" "}
//                         <div className="link-view col-10">
//                           <p
//                             onClick={() => {
//                               dispatch({ type: "open" });
//                               setStatus(val.id);
//                             }}
//                           >
//                             view status
//                           </p>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {isClicked ?  <Send_invoice  Datas={invoiceData}/> : ""}
//       {ViewStat ? <ViewStatus id={status} /> : ""}
//     </>
//   );
// }

// export default SendInvoice;




import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DashRouting.css";
import SearchIcon from "../../../../navbar/search-icon.svg";
import Datas from "../../../../datas/Data.json";
import Send_invoice from "./send_invoice/AddInvoice";
import { useDispatch, useSelector } from "react-redux";
import ViewStatus from "./view_status/ViewStatus";
import Calender from "../../../../calender/Calender";
import axios from "axios";

function SendInvoice() {
  const [search, setSearch] = useState("");
  const [changes, setChanges] = useState(true);
  const [status, setStatus] = useState("");
  const [addInvoice, setAddinvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState("");
  const [contract, setContract] = useState("");

  useEffect(() => {
    if (search == "") {
      setChanges(true);
    } else {
      setChanges(false);
    }
  }, [search]);
  const isClicked = useSelector((state) => state.addinvoice);
  const dispatch = useDispatch();
  const ViewStat = useSelector((state) => state.viewStatus);
  const checkbox = (val) => {
    if (val.checked === true) {
      var getDocument = document.getElementsByClassName("checked");
      for (let i = 0; i < getDocument.length; i++) {
        getDocument[i].checked = false;
      }
      val.checked = true;
      setAddinvoice(true);
      dispatch({ type: "true" });
      setInvoiceData(Datas[val.value]);
    } else {
      val.checked = false;
      setInvoiceData("");
      setAddinvoice(false);
    }
  };
  useEffect(() => {
    axios
      .get("http://demosrvr2.optipacetech.com:8000/api/v1/invoices/")
      .then((resp) => {
        console.log("get", resp.data);
        setContract(resp.data);
      });
  }, []);
  return (
    <>
      <div className="SendInvoice-div ">
        <div className="breedcrums mt-1">
          <p>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "black", padding: 0 }}
            >
              {" "}
              Dashboard
            </Link>{" "}
            / Invoice Recieved
          </p>
        </div>
        <div className="row w-100">
          <div className="col-6 ">
            {" "}
            <h5>Send Invoice</h5>
          </div>
          <div className="col-6 p-0 d-flex justify-content-end">
            <Calender />
          </div>
        </div>

        <div className=" row w-100 m-0 col-12 d-inline-flex SendInvoice-head">
          <div className="col-lg-6 col-md-5 col-sm-12 SendInvoice-inner">
            <button type="button">Invoice</button>
            <button type="button">Penalty</button>
          </div>
          <div className=" col-lg-6 col-md-7 col-sm-12 right-inner-head">
            <div className="search-box ">
              <input
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <img src={SearchIcon} alt="search-icon" />
              {changes && <p>Search</p>}
            </div>
            <button className="Eq-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-sliders2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
                />
              </svg>
            </button>

            <button
              onClick={() => dispatch({ type: "false" })}
              className="new-rule-btn"
            >
              {addInvoice ? `Add Invoice` : `New Invoice`}
            </button>
          </div>
        </div>
        <div className="mb-5 table-overflow">
          <table className="mt-2 table table-property  table-stripped table-borderless">
            <thead>
              <tr>
                <th>All</th>
                <th>No</th>
                <th>Order Id</th>
                <th>Order details</th>
                <th>Due date</th>
                <th>Invoice amount</th>
                <th>Split Invoices</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contract &&
                contract.map((val, index) => (
                  <tr className="table-rows" key={index}>
                    <td style={{ width: "30px" }}>
                      <input
                        type="checkbox"
                        onChange={(e) => checkbox(e.target)}
                        className="checked"
                        value={index}
                      />
                    </td>
                    <td style={{ width: "30px" }}>{index + 1}</td>
                    <td style={{ width: "50px" }}>{val.contractid.id}</td>
                    <td>{val.contractid.contract_description}</td>
                    <td>{val.contractid.end_date}</td>
                    <td>
                      ₹ <span className="text-dark">nill</span>
                    </td>
                    <td className="text-dark">{val.splitInvoice}</td>
                    <td className="view-status ">
                      <div className="row">
                        <div className="p-2 col-2">
                          <p style={{ backgroundColor: val.statusColor }}> </p>
                        </div>{" "}
                        <div className="link-view col-10">
                          <p
                            onClick={() => {
                              dispatch({ type: "open" });
                              setStatus(val.id);
                            }}
                          >
                            view status
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {isClicked ? <Send_invoice Datas={invoiceData} /> : ""}
      {ViewStat ? <ViewStatus id={status} /> : ""}
    </>
  );
}

export default SendInvoice;
