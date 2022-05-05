const addInvoice = (state = false, action) => {
  switch (action.type) {
    case "false":
      return true;

    default:
      return false;
  }
};
export default addInvoice;
