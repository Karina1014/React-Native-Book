import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../assets/styles/signup.styles"; // Asegúrate de que la ruta sea correcta

const Signup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Crear cuenta</Text>
          <Text style={styles.subtitle}>Ingresa tus datos para registrarte</Text>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="usuario123" placeholderTextColor="#888" style={styles.input} />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="correo@example.com" placeholderTextColor="#888" style={styles.input} keyboardType="email-address" />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="••••••••" placeholderTextColor="#888" style={styles.input} secureTextEntry />
            </View>
          </View>
        </View>

        {/* Botón de registro */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        {/* Pie de página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
