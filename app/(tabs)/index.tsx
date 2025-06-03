import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "../../assets/styles/home.styles"; // Asegúrate de que esta ruta es correcta

// Importar imágenes locales
const images = {
  book1: require("../../assets/images/book1.png"),
  book2: require("../../assets/images/book2.png"),
  avatar1: require("../../assets/images/avatar1.png"),
  avatar2: require("../../assets/images/avatar1.png"),
};

export default function Home() {
  const [books, setBooks] = useState([
    {
      id: 1,
      user: {
        username: "juan123",
        profileImage: images.avatar1,
      },
    image: images.book1,
    title: "Don Quijote",
    caption: "Un viaje hacia el conocimiento.",
    date: "1 junio 2025",
  },
  {
    id: 2,
    user: {
      username: "maria456",
      profileImage: images.avatar2,
    },
    image: images.book2,
    title: "Viaje al centro de la tierra",
    caption: "Reflexiones y relatos de vida.",
    date: "2 junio 2025",
    },
  ]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.listContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home tab</Text>
        <Text style={styles.headerSubtitle}>Explora los libros compartidos</Text>
      </View>

      {books.map((item) => (
        <View key={item.id} style={styles.bookCard}>
          <View style={styles.bookHeader}>
            <View style={styles.userInfo}>
              <Image source={item.user.profileImage} style={styles.avatar} />
              <Text style={styles.username}>{item.user.username}</Text>
            </View>
          </View>

          <View style={styles.bookImageContainer}>
            <Image source={item.image} style={styles.bookImage} resizeMode="cover" />
          </View>

          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
