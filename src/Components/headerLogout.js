
import { View, StyleSheet, Text, Pressable } from "react-native"
import { useDispatch, useSelector, } from 'react-redux';
import { terminarSesion } from "../store/slices/usuarioSlice";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderLogout = () => {
    const dispatch = useDispatch();
    const { nombre } = useSelector(state => state.usuario)
    const handlePressLogout = () => {
        dispatch(terminarSesion());
    }
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Bienvenido(a): {nombre}</Text>
            <Pressable onPress={handlePressLogout}>
                <FontAwesome5 name='sign-out-alt' size={40} color={'#fff'}></FontAwesome5>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#069A8E',
        padding: 5,
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20
    },
    text: {
        flex: 3,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: "center",
    },
})

export default HeaderLogout;