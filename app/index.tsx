import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/welcome.png")} // Pon tu imagen aquí
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.9)"]}
          style={styles.gradient}
        />
      </View>

      <Text style={styles.title}>¡Bienvenido a ProjectV2!</Text>
      <Text style={styles.subtitle}>
        La mejor app para gestionar tu contenido y mucho más.
      </Text>

        {/* <Link href="/(auth)/login">Login</Link>

         */}
      <TouchableOpacity style={styles.button}>
        <Link href="/(auth)/login" style={styles.buttonText}>
          Iniciar Sesión
        </Link>
      </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.signupButton]}>
                  <Link href="/(auth)/signup" style={[styles.buttonText, styles.signupText]}>
                    Crear Cuenta
                  </Link>
                </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  imageWrapper: {
    width: width,
    height: width * 0.6,
    position: "relative",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2e78b7",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  signupButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2e78b7",
  },
  signupText: {
    color: "#2e78b7",
  },
});
