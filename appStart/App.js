import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text } from 'react-native';
import { Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import BotonFlotante from './components/botonFlotante';

export default function App() {

  const [count, setCount] = useState(0)
  
  const Sumar = () => setCount(count+1)
  const Restar = () => setCount(count-1)
  const Reinicio = () => setCount(0)
  return (
    <View style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.cabeceraNombre}>NOMBRE DEL USUARIO</Text>
      </View>
      <View style={styles.cuerpo}>
        <Text style={styles.cuerpoContador}>{count}</Text>
        <BotonFlotante label="+1" posicion="right" sumar={Sumar} reinicio={Reinicio} />
        <BotonFlotante label="-1" posicion="left" sumar={Restar}  reinicio={Reinicio}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  cabecera: {
    height: '100px',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabeceraNombre: {
    color: 'white',
    fontSize: '1.2em'
  },
  cuerpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cuerpoContador: {
    fontSize: '6em'
  },
  
  boton2: {

    width: '80px',
    backgroundColor: 'black',
    height: '80px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '20px',
    left: '20px'


  }
});