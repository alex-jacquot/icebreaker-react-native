import React from "react";
import { View, Image, StyleSheet } from "react-native";
import QuestionComponent from "../components/question/QuestionComponent";

const QuestionScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/ice.jpg")} style={styles.logo} />

      {/* Interface with RandomQuestionComponent in landscape mode */}
      <View style={styles.interfaceContainer}>
        <QuestionComponent />
      </View>

      {/* Other components or content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  interfaceContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
});

export default QuestionScreen;