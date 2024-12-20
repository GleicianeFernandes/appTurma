import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Turmas</Text>
      <Text style={styles.subtitle}>Jogue com sua Turma</Text>
      <Button
        title="Turmas A"
        onPress={() => navigation.navigate('Turma')}
      />
      <Button
        title="Turmas B"
        onPress={() => navigation.navigate('Turma')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 10,
    marginBottom: 20,
  },
});
