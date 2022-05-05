import addInvoice from "./addInvoice";
import viewStatus from "./viewStatus";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  addinvoice: addInvoice,
  viewStatus: viewStatus,
});
export default allReducer;
