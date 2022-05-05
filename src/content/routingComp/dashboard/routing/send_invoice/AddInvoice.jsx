// import React, { useEffect, useState } from "react";
// import "./Send_invoice.css";
// import CancelIcon from "./cancel-icon.svg";
// import { useDispatch } from "react-redux";
// import UploadIcon from "./upload-icon.svg";
// function Send_invoice() {
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div className="sidebar-div">
//         <div className="sidebar row">
//           <div className="header col-12 row w-100 m-0 ">
//             <h4 className="col-10 p-0">Add Invoice</h4>
//             <div className="col-1 cancel-icon p-0">
//               <img
//                 onClick={() => dispatch({ type: "true" })}
//                 src={CancelIcon}
//                 alt="cancel-icon"
//               />
//             </div>
//           </div>
//           <br />
//           <div className=" col-12 bill-details">
//             <table className="table-borderless">
//               <tbody className="bill-details-tbody">
//                 <tr>
//                   <th>GST NO</th>
//                 </tr>
//                 <tr>
//                   <th>Company name</th>
//                 </tr>
//                 <tr>
//                   <th>Invoice</th>
//                 </tr>
//                 <tr>
//                   <th>Date</th>
//                 </tr>
//                 <tr>
//                   <th>Order Number</th>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="product-detail">
//             <table className="table-borderless">
//               <thead>
//                 <tr className="head-product-detail">
//                   <td>Unit price</td>
//                   <td>Qty</td>
//                   <td>Net amount</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <input className="unit-in" type="text" />
//                   </td>
//                   <td>
//                     <input className="qty-in" type="text" />
//                   </td>
//                   <td>
//                     <input className="net-in" type="text" />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="tax-table">
//             <table className="table-borderless">
//               <thead>
//                 <tr className="tax-head">
//                   <td>Tax type</td>
//                   <td>Tax Rate</td>
//                   <td>Tax Amount</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="tax-name">CGST</td>
//                   <td>
//                     <input type="text" className="rate-in" />
//                   </td>
//                   <td>
//                     <input type="text" className="amount-in" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="  tax-name">SGST</td>
//                   <td>
//                     <input type="text" className="rate-in" />
//                   </td>
//                   <td>
//                     <input type="text" className="amount-in" />
//                   </td>
//                 </tr>
//                 <tr className="mt-4">
//                   <td className="tax-name">IGST</td>
//                   <td>
//                     <input type="text" className="rate-in" />
//                   </td>
//                   <td>
//                     <input type="text" className="amount-in" />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="bill-amount">
//             <label>Total Amount</label>
//             <br />
//             <input type="text" />
//           </div>
//           <div className="mt-3 row w-100 upload">
//             <label className="col-6 input-file">
//               <img src={UploadIcon} alt="UploadIcon" />
//               <p>Upload invoice</p>{" "}
//               <input type="file" style={{ display: "none" }} />
//             </label>
//             <div className="col-6 ">
//               {" "}
//               <p>Format to upload in PDF</p>
//             </div>
//           </div>
//           <div className="actions">
//             <button>Submit</button>
//             <button>Cancel</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Send_invoice;


import React, { useEffect, useState } from "react";
import "./Send_invoice.css";
import CancelIcon from "./cancel-icon.svg";
import { useDispatch } from "react-redux";
import UploadIcon from "./upload-icon.svg";
import ViewIcon from "./view-icon.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Send_invoice(props) {
  const [datas, setDatas] = useState("");
  const [upload, setUpload] = useState("");
  const [view, setView] = useState(false);
  const [form, setForm] = useState(new FormData());
  const dispatch = useDispatch();
  useEffect(() => {
    setDatas(props.Datas);
  }, [props.Datas]);
  const closeFile = () => {
    setUpload("");
    setView(false);
  };

  const keydown = (val) => {
    if (val.key === "+") {
      return val.preventDefault();
    }
    if (val.key === "-") {
      return val.preventDefault();
    }
  };

  const Onchange = (val) => {
    switch (val.name) {
      case "tax-rate-cgst":
        form.append("invoice_cgst", val.value);
        form.append("contractid", 1);
        break;
      case "tax-amount-cgst":
        form.append("invoice_cgst_amount", val.value);
        break;
      case "tax-rate-sgst":
        form.append("invoice_sgst", val.value);
        break;
      case "tax-amount-sgst":
        form.append("invoice_sgst_amount", val.value);
        break;
      case "tax-rate-igst":
        form.append("invoice_igst", val.value);
        break;
      case "tax-amount-igst":
        form.append("invoice_igst_amount", val.value);
        break;
      case "gst-no":
        form.append("gst_number", val.value);
        break;
      case "company-name":
        form.append("company_name", val.value);
        break;
      case "invoice":
        form.append("invoice_number", val.value);
        break;
      case "date":
        form.append("invoice_date", val.value);
        break;
      case "order-number":
        form.append("order_number", val.value);
        break;
      case "file":
        form.append("invoice_document", val.files[0]);
        setUpload(val.files[0]);
        break;
      default:
        form.append("invoice_total_amount", val.value);
        form.append("invoice_discount", 2);
        break;
    }
  };

  const postApi = async () => {
    await axios
      .post("http://demosrvr2.optipacetech.com:8000/api/v1/invoices/", form)
      .then((resp) => {
        if (resp.status === 201) {
          console.log("sdsdsd", resp);
          toast.success("Invoice uploaded successfully");
          dispatch({ type: "true" });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to upload the Invoice");
        if (error.response.data !== "") {
          toast("Fill the fields correctly");
        }
      });
  };

  return (
    <>
      <div className="sidebar-div">
        <div className="uploaded-img">
          {upload && view ? (
            <iframe
              src={URL.createObjectURL(upload)}
              alt="upload"
              width="100%"
              height="100%"
            ></iframe>
          ) : (
            ""
          )}
        </div>
        <div className="sidebar row">
          <div className="header col-12 row w-100 m-0 ">
            <h4 className="col-10 p-0">Add Invoice</h4>
            <div className="col-1 cancel-icon p-0">
              <img
                onClick={() => dispatch({ type: "true" })}
                src={CancelIcon}
                alt="cancel-icon"
              />
            </div>
          </div>
          <br />
          <div className=" col-12  mt-2 bill-details">
            <table className="table-borderless">
              <tbody className="bill-details-tbody">
                <tr>
                  <th>GST NO </th>
                  <td>
                    <input
                      type="text"
                      name="gst-no"
                      defaultValue={datas.gstNo}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Company name</th>
                  <td>
                    <input
                      type="text"
                      name="company-name"
                      defaultValue={datas.companyName}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Invoice</th>
                  <td>
                    <input
                      type="text"
                      name="invoice"
                      defaultValue={datas.invoice}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="date"
                      name="date"
                      defaultValue={datas.date}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Order Number</th>
                  <td>
                    <input
                      type="number"
                      name="order-number"
                      defaultValue={datas.orderNo}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="product-detail">
            <table className="table-borderless">
              <thead>
                <tr className="head-product-detail">
                  <td>Unit price</td>
                  <td>Qty</td>
                  <td>Net amount</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="unit-in"
                      type="number"
                      name="unit-price"
                      defaultValue={datas.unitPrice}
                      min="0"
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                  <td>
                    <input
                      className="qty-in"
                      type="number"
                      name="quantity"
                      defaultValue={datas.quantity}
                      min="0"
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                  <td>
                    <input
                      className="net-in"
                      type="number"
                      name="net-amount"
                      defaultValue={datas.netAmount}
                      min="0"
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tax-table">
            <table className="table-borderless">
              <thead>
                <tr className="tax-head">
                  <td>Tax type</td>
                  <td>Tax Rate</td>
                  <td>Tax Amount</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tax-name">CGST</td>
                  <td>
                    <select
                      type="number"
                      className="rate-in"
                      name="tax-rate-cgst"
                      defaultValue={datas.cgstTaxRate}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    >
                      <option value={1}></option>
                      <option value={5}>5%</option>
                      <option value={12}>12%</option>
                      <option value={18}>18%</option>
                      <option value={28}>28%</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="amount-in"
                      name="tax-amount-cgst"
                      defaultValue={datas.cgstTaxamount}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="  tax-name">SGST</td>
                  <td>
                    <select
                      type="number"
                      name="tax-rate-sgst"
                      className="rate-in"
                      defaultValue={datas.sgstTaxRate}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    >
                      <option value={1}></option>
                      <option value={5}>5%</option>
                      <option value={12}>12%</option>
                      <option value={18}>18%</option>
                      <option value={28}>28%</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="amount-in"
                      name="tax-amount-sgst"
                      defaultValue={datas.sgstTaxamount}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
                <tr className="mt-4">
                  <td className="tax-name">IGST</td>
                  <td>
                    <select
                      type="number"
                      name="tax-rate-igst"
                      className="rate-in"
                      defaultValue={datas.igstTaxRate}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    >
                      <option value={1}></option>
                      <option value={5}>5%</option>
                      <option value={12}>12%</option>
                      <option value={18}>18%</option>
                      <option value={28}>28%</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="tax-amount-igst"
                      className="amount-in"
                      defaultValue={datas.igstTaxamount}
                      onKeyDown={(e) => keydown(e)}
                      onChange={(e) => Onchange(e.target)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bill-amount">
            <label>Total Amount</label>
            <br />
            <input
              type="number"
              name="total-amount"
              onKeyDown={(e) => keydown(e)}
              defaultValue={datas.totalAmount}
              onChange={(e) => Onchange(e.target)}
            />
          </div>
          <div className="row w-100 upload">
            {upload ? (
              <div className="view-file">
                <button
                  onClick={() => {
                    if (view === true) {
                      setView(false);
                    } else {
                      setView(true);
                    }
                  }}
                >
                  <img src={ViewIcon} alt="ViewIcon" />
                  <span>{view ? `Close` : `View`} uploaded file</span>
                </button>
                <span className="uploaded-file">
                  {upload.name}
                  <img
                    src={CancelIcon}
                    onClick={() => closeFile()}
                    alt="CancelIcon"
                  />
                </span>
              </div>
            ) : (
              <div>
                <label className="col-6 input-file">
                  <img src={UploadIcon} alt="UploadIcon" />
                  <p>Upload invoice</p>{" "}
                  <input
                    type="file"
                    name="file"
                    id="files"
                    accept=".pdf,.jpeg,.doc,.png,.jpg,.docx"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      Onchange(e.target);
                    }}
                  />
                </label>
                <div className="col-6 upload-invoice">
                  {" "}
                  <p>Format to upload in PDF,IMAGE,DOC.</p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-3 actions">
            <button
              onClick={() => {
                postApi();
              }}
            >
              Submit
            </button>

            <button onClick={() => dispatch({ type: "true" })}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Send_invoice;
