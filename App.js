import { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Button, Text, TextInput, Card  } from "react-native-paper";
import { } from 'react-native-paper';


export default function App() {
  const [lembrete, setLembrete] = useState([]);
  const [titulo, setTitulo] = useState([""]);
  const [info, setInfo] = useState([""]);
  const [lembretes, setLembretes] = useState([]);
 
  function adicionarNovoLembrete() {
    console.log(lembrete)
    const novoLembrete = {
      titulo: titulo,
      info: info
    };
    setLembretes([...lembretes, novoLembrete]);
    setLembrete("");
    setTitulo("");
    setInfo("");
  }

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/011/125/359/original/cute-alarm-clock-icon-png.png'
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 60, color: "#f69687", fontWeight: 'bold' }}>LEMBRETES</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 3, margin: 6 }}>
            <TextInput
              mode="outlined"
              label="Lembrete"
              value={titulo}
              onChange={value => setTitulo(value.target.value)}
            />
          </View>
          <View style={{ flex: 3, margin: 6 }}>
            <TextInput
              mode="outlined"
              label="Data"
              value={info}
              onChange={value => setInfo(value.target.value)}
            />
          </View>
        </View>

        <View style={{ flex: 1, marginTop: 30 }}>
          <Button mode="contained" onPress={adicionarNovoLembrete} style={{ backgroundColor: '#85d5f5', fontWeight: 'bold' }}>
            Adicionar lembrete
          </Button>
        </View>
      </View>
      <View>
        {lembretes.map((lembrete, index) => (
          <Card>
            <Card.Content>
              <Text variant="titleLarge">{lembrete.titulo}</Text>
              <Text variant="bodyMedium">{lembrete.info}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
}

