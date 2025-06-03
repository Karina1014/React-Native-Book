import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import COLORS from "../../constants/colors";

export default function Create() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [savedTitle, setSavedTitle] = useState("");
  const [savedNote, setSavedNote] = useState("");

  const saveNote = () => {
    if (title.trim() !== "" || note.trim() !== "") {
      setSavedTitle(title);
      setSavedNote(note);
      setTitle("");
      setNote("");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: COLORS.background }}>
      <Text style={{ color: COLORS.textPrimary, marginBottom: 6 }}>Título:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Escribe título"
        placeholderTextColor={COLORS.placeholderText}
        style={{
          backgroundColor: COLORS.inputBackground,
          padding: 12,
          marginBottom: 15,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: COLORS.border,
          color: COLORS.textDark,
          fontSize: 16,
        }}
      />

      <Text style={{ color: COLORS.textPrimary, marginBottom: 6 }}>Nota:</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Escribe nota"
        placeholderTextColor={COLORS.placeholderText}
        multiline
        style={{
          backgroundColor: COLORS.inputBackground,
          padding: 12,
          height: 100,
          marginBottom: 15,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: COLORS.border,
          color: COLORS.textDark,
          fontSize: 16,
          textAlignVertical: "top",
        }}
      />

      <TouchableOpacity
        onPress={saveNote}
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          borderRadius: 12,
          alignItems: "center",
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 3,
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: "600", fontSize: 16 }}>
          Guardar
        </Text>
      </TouchableOpacity>

      {(savedTitle !== "" || savedNote !== "") && (
        <View
          style={{
            marginTop: 30,
            padding: 15,
            backgroundColor: COLORS.cardBackground,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.border,
          }}
        >
          <Text style={{ fontWeight: "bold", color: COLORS.textPrimary }}>
            Nota guardada:
          </Text>
          <Text style={{ marginTop: 10, color: COLORS.textDark, fontSize: 16 }}>
            Título: {savedTitle}
          </Text>
          <Text style={{ color: COLORS.textDark, fontSize: 16 }}>
            Nota: {savedNote}
          </Text>
        </View>
      )}
    </View>
  );
}
