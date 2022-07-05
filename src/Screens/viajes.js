import { StyleSheet, View, Text } from "react-native";
import {HeaderLogout} from "../Components/indexComponents";

function Viaje(props) {

    return (
        <View style={styles.container}>
            <HeaderLogout/>
            <Text style={{fontSize:30, color:'#000'}}>Gastos de Viaje</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:'#0f0'
    },
    
})

export default Viaje;