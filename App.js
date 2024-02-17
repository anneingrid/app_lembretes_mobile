import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from "react-native-paper";


export default function App() {
  const [counter, setCounter] = useState(0);
  const onIncrementarClick = () => {
    setCounter(counter + 1);
  }
  const onResetarClick = () => {
    setCounter(0);
  }
  const onDecrementarClick = () => {
    setCounter(counter - 1);
  }
  return (
    // <View style={styles.container}>
    //   <Text style={styles.counter_display}>{counter}</Text>
    //   <Button
    //     style={styles.button_incrementar}
    //     onPress={onIncrementarClick}
    //     title="Incrementar"
    //   ></Button>

    //   <Button
    //     style={styles.button_incrementar}
    //     onPress={onResetarClick}
    //     title="Resetar"
    //   ></Button>
      
    //   <Button
    //     style={styles.button_incrementar}
    //     onPress={onDecrementarClick}
    //     title="Decrementar"
    //   ></Button>
    // </View>

    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge" style={styles.counter_display}>
        {counter}
      </Text>
      <Text variant="bodyLarge" style={styles.body_display}>
        Pressione o botão abaixo para incrementar o contador.
      </Text>
      <Button onPress={onIncrementarClick} icon="plus" mode="contained">
        Incrementar
      </Button>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Cochin',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_incrementar: {
    backgroundColor: '#329da8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
