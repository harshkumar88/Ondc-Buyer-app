import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import HorizontalCard from "../../Components/Cards/HorizontalCard/index";
import { ONDC_URL } from "../../Handlers/config";
import { get_data_without_token } from "../../Handlers/networkhandler";

const StoreList = () => {
  const windowHeight = Dimensions.get("window").height;
  const [storeDetails, setStoreDetails] = useState([]);
  const [next, setNext] = useState(true);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const flatListRef = useRef(null);

  useEffect(() => {
    getStoreDetails();
  }, []);

  const getStoreDetails = async (lat, lng) => {
    let url = `${ONDC_URL}/bap/stores/v1/?latitude=28.43951170&longitude=77.05458900&page=1`;

    const res = await get_data_without_token(url);
    if (res) {
      const data = res?.data;
      setStoreDetails(data);
      setNext(res?.has_next);
      setPage(res?.page);
      setLoader(false);
      //   flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const getMoreStoreDetails = async () => {
    if (!next) {
      return;
    }
    let url = `${ONDC_URL}/bap/stores/v1/?latitude=28.43951170&longitude=77.05458900&page=${page}`;

    const res = await get_data_without_token(url);
    if (res) {
      const data = res?.data;
      setStoreDetails((prevState) => [...prevState, ...data]); // Concatenate new data
      setNext(res?.has_next);
      setPage(res?.page);
      //   flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const renderItem = ({ item }) => <HorizontalCard content={item} />;

  const renderFooter = () => (
    <View style={{ alignItems: "center" }}>
      {next ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : storeDetails.length === 0 ? (
        <View>
          <Text style={{ textAlign: "center" }}>Couldn't find any store</Text>
        </View>
      ) : (
        <Text>Yay! You have seen it all</Text>
      )}
    </View>
  );

  return loader ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View
      style={{
        height: windowHeight * 0.81, // Set the height to 90% of window height
      }}
    >
      <FlatList
        ref={flatListRef}
        data={storeDetails}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={getMoreStoreDetails}
        onEndReachedThreshold={0} // Adjust as per your requirement
        ListFooterComponent={renderFooter}
        ListEmptyComponent={<ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  );
};

export default StoreList;
