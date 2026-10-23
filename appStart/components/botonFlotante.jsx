import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BotonFlotante({label, posicion, openModal}) {
    return (
        <Pressable
            style={[styles.boton, posicion == 'right' ? styles.positionRight : styles.positionLeft]}
            onPress={openModal}
        >
            <Text style={styles.botonText}>{label}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    boton: {
        width: '60px',
        backgroundColor: 'black',
        height: '60px',
        borderRadius: '50%',
        alignItems: 'center',
        position: 'absolute',
        bottom: '20px',
    },
    botonText: {
        color: 'white',
        fontSize: '2.5em'
    },

    positionRight:{
        right: '20px'
    },
    positionLeft:{
        left: '20px'
    },
})