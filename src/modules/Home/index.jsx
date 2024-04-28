import { StyleSheet, View, Image, TextInput } from "react-native";
import ondcLogo from "../../../assets/png/ondc_registered_logo.png";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import StoreList from "../StoreList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <View style={styles.home_container}>
      <View style={styles.logo_container}>
        <Image source={ondcLogo} style={styles.logo} />
      </View>

      <View style={styles.search_bar}>
        <EvilIcons name="search" size={27} color="black" />

        <TextInput
          style={styles.search}
          value={searchQuery}
          onChange={handleQueryChange}
          placeholder="Search Items"
        />
      </View>

      <StoreList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: "5%",
    width: "100%",
  },
  logo_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 70,
  },

  search_bar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderStyle: "solid",
    paddingLeft: 8,
    paddingVertical: 1,
    borderRadius: 20,
    width: "100%",
  },
  search: {
    fontSize: 15,
    width: "80%",
    paddingVertical: 3,
  },
});
