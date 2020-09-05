import React from "react";
import { Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View
      style={{
        borderColor: "#B9C3C1",
        borderBottomWidth: 1,
        width: "100%",
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "#455D63",
        }}
      >
        My List
      </Text>
      <MaterialIcons name="more-horiz" size={32} color="#455D63" />
    </View>
  );
}
