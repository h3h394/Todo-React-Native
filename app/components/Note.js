import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Note({ noteKey, deleteMethod, noteItem }) {
  return (
    <View style={styles.note} key={noteKey}>
      <Text style={styles.noteText}>{noteItem.date}</Text>
      <Text style={styles.noteText}>{noteItem.note}</Text>
      <TouchableOpacity onPress={deleteMethod} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>D</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
    marginTop: 6,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: "white",
  },
});
