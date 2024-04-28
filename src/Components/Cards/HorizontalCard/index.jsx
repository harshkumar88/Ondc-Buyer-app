import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles.js"; // Adjust the styles as per React Native StyleSheet
import Label from "../../utils/Label";
import Icon from "react-native-vector-icons/Ionicons"; // Or any other icon library you prefer
const HorizontalCard = (props) => {
  const { content } = props;

  const handleNavigation = () => {
    // Implement navigation logic for React Native here
  };

  return (
    <TouchableOpacity onPress={handleNavigation}>
      <View style={styles.card_container}>
        <View style={styles.img_container}>
          {/* Use React Native's Image component */}
          <Image
            source={{
              uri:
                content?.store?.images[0] ||
                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
            }} // Assuming the image source is a URI
            style={styles.img} // Adjust styles as per React Native StyleSheet
          />
        </View>
        <View style={styles.info_container}>
          <Label content={content?.store?.name} style={"label_overflow"} />
          <Label
            content={content?.store?.short_desc}
            style={"label_overflow_small"}
          />
          <View style={styles.rating_container}>
            <View style={styles.flex_center}>
              <Text>{content?.store?.rating}</Text>
            </View>
            <View style={styles.flex_center}>
              <Text style={styles.subs_color}>{content?.store?.consumers}</Text>
            </View>
          </View>
          <View style={styles.rating_container}>
            <Text style={styles.flex_center_address}>
              {content?.store?.address?.state}
            </Text>
            <Text style={styles.flex_center_address}>
              {content?.store?.address?.locality}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
