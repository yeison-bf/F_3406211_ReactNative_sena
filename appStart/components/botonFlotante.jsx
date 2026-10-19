import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BotonFlotante({label, posicion, sumar, reinicio}) {
    return (
        <Pressable
            style={[styles.boton, posicion == 'right' ? styles.positionRight : styles.positionLeft]}
            onPress={sumar}
            onLongPress={reinicio}
        >
            <Text style={styles.botonText}>{label}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    boton: {
        width: '80px',
        backgroundColor: 'black',
        height: '80px',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '20px',
    },
    botonText: {
        color: 'white',
        fontSize: '2em'
    },

    positionRight:{
        right: '20px'
    },
    positionLeft:{
        left: '20px'
    },
})