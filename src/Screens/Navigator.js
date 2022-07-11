import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Viaje, History, Proveedor, NoSync } from "../Screens/indexScreens";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const Navegador = (props) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    color = focused ? '#069A8E' : '#005555';
                    if (route.name === 'Gastos de Viaje') {
                        iconName = 'file-invoice-dollar'
                    } else if (route.name === 'Historial') {
                        iconName = 'history'
                    } else if (route.name === 'Solicitar Proveedor') {
                        iconName = 'user-plus';
                    } else if (route.name === 'No Sincronizado') {
                        iconName = 'sync';
                    }

                    return <FontAwesome5 name={iconName} size={30} color={color}></FontAwesome5>
                },
                tabBarActiveTintColor: '#069A8E',
                tabBarInactiveTintColor: '#005555',
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarStyle: { height: 70 },
                tabBarLabelStyle: { paddingBottom: 15 },
                tabBarIconStyle: { marginTop: 5 },
                headerShown:false,
                tabBarHideOnKeyboard:true
                
            })}

        >
            <Tab.Screen name='Gastos de Viaje' component={Viaje}></Tab.Screen>
            <Tab.Screen name='Historial' component={History}></Tab.Screen>
            <Tab.Screen name='Solicitar Proveedor' component={Proveedor}></Tab.Screen>
            <Tab.Screen name='No Sincronizado' component={NoSync}></Tab.Screen>
        </Tab.Navigator>
        
    )
}

export default Navegador;