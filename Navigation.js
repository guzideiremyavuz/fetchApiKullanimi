import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/Home';
import Profile from './screens/Profile';



const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="home" 
            component={Home}
            options={{
                title:"Anasayfa"
            }}
             />
            <Stack.Screen 
            name="profile" 
            component={Profile} 
            options={{
                title:"Anasayfa"
            }} />
            

        </Stack.Navigator>
    )
}