import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginVertical: 10,
  },
  img_container: {
    flex: 0.5,
    paddingHorizontal: 1, // Adjust based on your design
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#ebe9e9",
    borderWidth: 1,
  },
  img: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ebe9e9",
  },
  info_container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "2%", // Adjust based on your design
    paddingVertical: "0%", // Adjust based on your design
  },
  rating_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  delivery_star: {
    color: "#313131",
    fontSize: 15,
  },
  flex_center: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
    fontSize: 13,
  },

  flex_center_address: {
    overflow: "hidden",
    fontSize: 11,
    color: "#7e7c7c", // Assuming this is the color for addresses
    flexShrink: 1,
    lineHeight: 14, // Adjust based on your design
  },
  subs_color: {
    color: "#7e7c7c",
  },
  yellow_star: {
    color: "#ffc700",
    fontSize: 15,
  },
  orange_star: {
    color: "#ff954c",
    fontSize: 15,
  },
  red_star: {
    color: "rgb(197, 79, 79)",
    fontSize: 13,
  },
  red_offer: {
    color: "rgb(233, 82, 82)",
    fontSize: 12,
  },
  border_dashed: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginVertical: 2,
  },
  circle_icon: {
    fontSize: 6,
    color: "#e0e0e0",
  },
  // Add any additional styles or media queries here if needed
});

export default styles;
