import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";

export default function MyList() {
  return (
    <View style={styles.bungkus}>
      <Header />

      <View
        style={{
          width: "100%",
          backgroundColor: "#EBEEF1",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            margin: 12,
            padding: 12,
            width: "40%",
            borderColor: "#B9C3C1",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <MaterialIcons
            name="content-paste"
            size={72}
            style={{ marginVertical: 8 }}
          />
          <Text style={{ color: "green", fontWeight: "bold" }}>All Task</Text>

          <Text style={{ color: "#455D63" }}>9 items</Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            width: "40%",
            borderColor: "#B9C3C1",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <MaterialIcons
            name="directions-run"
            size={72}
            style={{ marginVertical: 8 }}
          />
          <Text style={{ color: "green", fontWeight: "bold" }}>Personal</Text>

          <Text style={{ color: "#455D63" }}>9 items</Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            width: "40%",
            borderColor: "#B9C3C1",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <MaterialIcons name="work" size={72} style={{ marginVertical: 8 }} />
          <Text style={{ color: "green", fontWeight: "bold" }}>Work</Text>

          <Text style={{ color: "#455D63" }}>No Items</Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            width: "40%",
            borderColor: "#B9C3C1",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <MaterialIcons
            name="add"
            size={72}
            style={{ marginVertical: 8 }}
            color="green"
          />
          <Text style={{ fontWeight: "bold" }}>Add List</Text>

          <Text style={{ color: "#455D63" }}>9 items</Text>
        </View>
      </View>

      <Text>ini my list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bungkus: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 24,
    width: "100%",
  },
});
