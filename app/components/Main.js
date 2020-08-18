import React, { useState } from "react";
import uuid from "react-native-uuid";
import Note from "./Note";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Main() {
  const [noteArray, setNoteArray] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim() !== "") {
      let d = new Date();
      setNoteArray([
        ...noteArray,
        {
          date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
          note: noteText,
          noteId: uuid.v4(),
        },
      ]);
      setNoteText("");
    }
  };

  const deleteNote = (id) => {
    setNoteArray(noteArray.filter((noteItem) => noteItem.noteId !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notes App</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {noteArray.map((noteItem, key) => (
          <Note
            key={key}
            noteKey={key}
            noteItem={noteItem}
            deleteMethod={() => deleteNote(noteItem.noteId)}
          />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          value={noteText}
          onChangeText={(noteText) => setNoteText(noteText)}
          style={styles.textInput}
          placeholder="Add note..."
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        ></TextInput>
      </View>

      <TouchableOpacity onPress={addNote} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    padding: 26,
    marginTop: 30,
    color: "#fff",
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#E91E63",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
