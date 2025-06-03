import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../../assets/styles/profile.styles"; // Asegúrate que la ruta sea correcta

// Imagen de perfil local
const avatar = require("../../assets/images/avatar.png");

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={avatar} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>Carlos Ruiz</Text>
          <Text style={styles.email}>carlos@gmail.com</Text>
          <Text style={styles.memberSince}>Miembro desde enero 2024</Text>
        </View>
      </View>
    </View>
  );
}
