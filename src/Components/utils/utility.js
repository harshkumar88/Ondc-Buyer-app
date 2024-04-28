const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "4px",
    padding: "0px 1px", // Adjust the padding here (top/bottom padding 0px, left/right padding 8px)
    backgroundColor: "#ffffff",
    backgroundImage: "linear-gradient(to bottom, #fff, #f3f5f7)",
    border: state.isFocused ? "1px solid #66afe9" : "1px solid #ccc",
    boxShadow: state.isFocused ? "0 0 0 1px #66afe9" : "none",
    transition: "border-color 0.2s ease",
    "&:hover": {
      border: state.isFocused ? "1px solid #66afe9" : "1px solid #ccc",
    },
    fontFamily: "Arial, sans-serif", // Set font family
    fontSize: "14px", // Set font size
    color: "#333", // Set text color
    background: "#ffffff",
    textTransform: "capitalize", // Capitalize text
    maxHeight: "80px", // Maximum height for scrolling
    overflowY: "auto", // Enable vertical scrolling
    outline: "none", // Hide outline on click
  }),
  indicatorSeparator: () => ({ display: "none" }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif", // Set font family
    fontSize: "14px", // Set font size
    color: "#333", // Set text color
    ".Select-arrow-zone": {
      // Hide the divider between arrow and select
      display: "none",
    },
    textTransform: "capitalize", // Capitalize text
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "200px", // Adjust the maximum height here
    overflowY: "auto",
  }),
};

export { customStyles };
