import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RandomQuestionComponent from './components/RandomQuestionComponent';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('./assets/ice.jpg')} style={styles.logo} />

      {/* Interface with RandomQuestionComponent in landscape mode */}
      <View style={styles.interfaceContainer}>
        <RandomQuestionComponent />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
      </View>

      {/* Other components or content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  interfaceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
