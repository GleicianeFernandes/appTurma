
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Turma() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Turma</Text>
      <Text style={styles.subtitle}>crie uma turma para adicionar pessoas</Text>

      <TextInput style={styles.txtIn}>Nome da turma</TextInput>

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
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 20,
  },
  txtIn:{
    fontSize: 10,
  }
});
