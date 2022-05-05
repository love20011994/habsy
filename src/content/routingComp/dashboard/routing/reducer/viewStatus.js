const viewStatus = (state = false, action) => {
  switch (action.type) {
    case "open":
      return true;

    default:
      return false;
  }
};
export default viewStatus;
