
import { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Pressable, Alert, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Buttons } from '../Components/indexComponents';
import { useDispatch } from 'react-redux'
import { iniciarSesion } from '../store/slices/usuarioSlice';


const Login = (props) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(true);

    const onPressHandle = async () => {
        try {
            const request = await fetch("http://190.109.203.183:9080/api/authentication", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserAccount: user,
                    Password: password,
                })
            })
            const result = await request.json();
            let data = result['Data'];
            let nombre = data['Nombre'];
            console.log(data['Message'])

            dispatch(iniciarSesion({ nombre }));

            if (result["Message"] != "Ok") {
                Alert.alert("No se pudo iniciar sesión");
            }

        } catch {
            if (user === '') {
                Alert.alert('Debe ingresar usuario')
            } else if (password === '') {
                Alert.alert('Debe ingresar su contraseña')
            } else if (password.length < 8) {
                Alert.alert('La contraseña deber ser minimo de 8 caracteres')
            } else {
                Alert.alert('Usuario o Contraseña incorrecta')
            }
        }
    }
    return (
        <View style={{ flex: 1 }}>

            <LinearGradient
                style={styles.container}
                colors={['#069A8E','#005555']}
            >
                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.imagen}
                />
                <Text style={styles.text}>Bienvenido(a)</Text>
                <View style={styles.containerinputs}>
                    <View style={styles.textInputAlign}>
                        <FontAwesome5
                            name='user'
                            style={styles.icons}
                            solid />
                        <TextInput
                            style={styles.input}
                            placeholder='Usuario'
                            placeholderTextColor={'#069A8E'}
                            onChangeText={(value) => setUser(value)}
                            value={user}
                        />
                    </View>
                    <View style={styles.textInputAlign}>
                        <FontAwesome5
                            name='key'
                            style={styles.icons}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Contraseña'
                            placeholderTextColor={'#069A8E'}
                            secureTextEntry={viewPassword}
                            onChangeText={(value) => setPassword(value)}
                            value={password}
                        />
                        <Pressable onPress={() => setViewPassword(!viewPassword)}>
                            <FontAwesome5
                                name={viewPassword ? 'eye' : 'eye-slash'}
                                style={styles.icons}
                                solid
                            />
                        </Pressable>
                    </View>
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <Buttons
                            title='Iniciar Sesion'
                            onPressFunction={onPressHandle}
                        />
                    </View>
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    containerinputs: {
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
        paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor:'#FFF8F3',
        borderRadius:10,

    },
    input: {
        flex: 3,
        padding: 5,
        marginLeft: 10,
        fontSize: 20,
        color:'#005555',
    },
    textInputAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 3,
        marginBottom: 15,
        backgroundColor: '#A1E3D8',
        maxWidth: 500,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderRadius: 8,
    },
    icons: {
        flex: 0,
        fontSize: 20,
        marginLeft: 5,
        color: '#005555',
    },
    text:{
        color:'#fff',
        fontSize:30,
        marginBottom:15,
        fontWeight:'bold',
    }
})

export default Login;