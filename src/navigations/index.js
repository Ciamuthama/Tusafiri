import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from '../screens/homeScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShow: true }}>
                <Stack.Screen name='Home'  component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
     );
}

export default AppNavigation;