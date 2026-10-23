import { Image, StyleSheet, Text, View } from "react-native";

export default function CardListClients({item}) {
  const photoDefault = 'https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png';
    return (
        <View style={styles.cardClients}>
            <View>
                <Image style={styles.photoClient} source={{ uri: item.avatar ? item.avatar : photoDefault }} />
            </View>
            <View style={styles.infoClient}  >
                <Text>Documento: {item.document}</Text>
                <Text>Nombre: {item.fullName}</Text>
                <Text>Dirección: {item.location}</Text>
                <Text>Telefono: {item.phone}</Text>
                <Text>Estado: {item.status ? 'Activo' : 'Inactivo'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cardClients: {
        flexDirection: 'row',
        border: '1px solid gray',
        borderRadius: '12px',
        padding: '7px',
        alignItems: 'center',
        marginTop: '8px'
    },

    photoClient: {
        width: '100px',
        height: '100px',

    },

    infoClient: {
    }
})