import { createNativeStackNavigator } from "@react-navigation/native-stack";

// adicionar o resto das paginas
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Balance from "../pages/Balance";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }} // escondendo header
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Balance"
                component={Balance}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}