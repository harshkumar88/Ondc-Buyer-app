import React from "react";
import { Text } from "react-native";

function Label(props) {
  const { content, style } = props;
  return <Text className={style}>{content}</Text>;
}

export default Label;
