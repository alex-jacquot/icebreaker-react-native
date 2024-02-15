import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useQuestionManager from "../../hooks/useQuestionManager";
import { useState } from "react";

const QuestionComponent = () => {
  const { getNextQuestion } = useQuestionManager();
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleNextQuestion = () => {
    const nextQuestion = getNextQuestion();
    setCurrentQuestion(nextQuestion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleNextQuestion}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Change background color to white
    paddingHorizontal: 20, // Add horizontal padding
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#333", // Change text color to dark gray
  },
  buttonContainer: {
    backgroundColor: "#007BFF",
    paddingVertical: 12, // Adjust padding
    paddingHorizontal: 20, // Adjust padding
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default QuestionComponent;
