import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import { Entypo, Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName = "HomeTabs" screenOptions={{headerShown: false}}>
            <Stack.Screen name = "HomeTabs" component = {HomeTabs}/>
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator ();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle= {{backgroundColor:"grey"}}>
            <Tab.Screen 
                name="Home" 
                component = {HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}/>
            <Tab.Screen 
                name="Profile" 
                component = {HomeScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="person" size={24} color="black" />
                    )
                }}/>

        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Books" component={HomeScreen} />
            <HomeStack.Screen name="Book details" component={BookDetailsScreen} />
            <HomeStack.Screen name="User details" component={UserDetailsScreen} />
        </HomeStack.Navigator>
    )
}

export default RootNavigator;