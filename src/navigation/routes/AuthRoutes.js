import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//screens
import Home from "../../screens/Home"
import Map from "../../screens/Map"
import Profile from "../../screens/Profile"

//components
import { Icon } from "../../components"
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator()
export default function AuthRoutes() {
    const { theme } = useSelector((state) => state.settings)
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home"
                    } else if (route.name === "Map") {
                        iconName = focused ? "map" : "map"
                    } else if (route.name === "Profile") {
                        iconName = focused ? "user" : "user"
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ title: "Início", headerShown: false }} />
            <Tab.Screen name="Map" component={Map} options={{ title: "Mapa", headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ title: "Perfil", headerShown: false }} />
        </ Tab.Navigator>
    )
}