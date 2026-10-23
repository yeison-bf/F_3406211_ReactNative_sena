import { useState } from 'react';
import { Button, FlatList, Image, Modal, Pressable, Text, TextInput } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import BotonFlotante from './components/botonFlotante';
import CardListClients from './components/clients/cardListClients';

export default function App() {

  // constante para abrir el modal
  const [visibleModal, setVisibleModal] = useState(false);

  // Funcio para abrir o cerrar el modal
  const openCloseModal = () => setVisibleModal(!visibleModal)

  // Constate para el listado de los datos
  const [listClients, setListClients] = useState([])

  // Datos para almacenar los registros de cada input
  const [document, setDocument] = useState("")
  const [fullName, setFullName] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")


  const saveClientInfo = ()=>{
    let user = {
      document: document,
      fullName:fullName,
      location: location,
      phone:phone,
      status: true,
      avatar: ""
    }
    setListClients([...listClients,user])
    setDocument("")
    setFullName("")
    setLocation("")
    setPhone("")

  }
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Text style={styles.headerName}>NOMBRE DEL USUARIO</Text>
      </View>
      <View style={styles.containerListClients}>
        <FlatList
          data={listClients}
          ListEmptyComponent={() => (<Text>Estoy vacia</Text>)}
          renderItem={({ item }) => (
            <CardListClients item={item} />
          )}
        >
        </FlatList>


        <BotonFlotante label="+" posicion="right" openModal={openCloseModal} />
      </View>
      <Modal
        visible={visibleModal}
        animationType='slide'
      >
        <View style={styles.containerModal}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>Nuevo Cliente</Text>
            <Pressable onPress={() => setVisibleModal(!visibleModal)} style={styles.btnCloseModal}>
              <Text style={styles.btnCloseModal}>X</Text>
            </Pressable>
          </View>
          <View style={styles.bodyModal}>
            <Text>Formulario de registro de cliente</Text>
            <View>
              <Text>Documento de identidad</Text>
              <TextInput
              style={styles.inputs}
                maxLength={10}
                keyboardType='numeric'
                onChangeText={setDocument}
                value="W"
              />

              <Text>Nombre completo</Text>
              <TextInput
              style={styles.inputs}
                keyboardType='numeric'
                onChangeText={setFullName}
                value={fullName}
              />

              <Text>Dirección</Text>
              <TextInput
              style={styles.inputs}
                keyboardType='numeric'
                onChangeText={setLocation}
                value={location}
              />

              <Text>Telefono</Text>
              <TextInput
              style={styles.inputs}
                keyboardType='numeric'
                onChangeText={setPhone}
                value={phone}
              />

              <Button style={styles.btnNewForm} title='GAURDAR REGISTRO' onPress={saveClientInfo}></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  header: {
    height: '80px',
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '20px'
  },
  headerName: {
    color: 'white',
    fontSize: '1.2em'
  },
  titleModal: {
    fontSize: '1.5em',
    color: 'white',
    fontWeight: 'bold'
  },
  btnCloseModal: {
    color: 'white',
    fontWeight: 'bold'
  },
  containerListClients: {
    flex: 1,
    padding: '15px',
    gap: '8px'
  },


  // Diseño del modal
  containerModal: {
    flex: 1,
  },
  headerModal: {
    height: '80px',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '15px',
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  bodyModal: {
    padding: '20px',
  },



  // Diseños del formulario
  inputs:{
    border:'1px solid',
    height:'40px',
    paddingLeft: '20px',
    borderRadius: '10px'
  },
  btnNewForm:{
    position:'absolute',
    bottom:'20px'
  }

});