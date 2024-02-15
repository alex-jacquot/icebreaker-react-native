import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToQuestionScreen = () => {
    navigation.navigate('Question');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/ice.jpg")} style={styles.logo} />

      {/* Button to navigate to QuestionScreen */}
      <Button
        title="Start"
        onPress={handleNavigateToQuestionScreen}
      />
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
});

export default MenuScreen;
