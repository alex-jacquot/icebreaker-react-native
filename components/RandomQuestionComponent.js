import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import questionsData from '../data/questions.json';

export default function RandomQuestionComponent() {
  const [randomQuestion, setRandomQuestion] = useState('');

  useEffect(() => {
    // Load a random question
    const randomIndex = Math.floor(Math.random() * questionsData.length);
    setRandomQuestion(questionsData[randomIndex].question);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{randomQuestion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});
