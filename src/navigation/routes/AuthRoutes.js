import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//screens
import Home from "../../screens/Home"
import Map from "../../screens/Map"

//components
import { Icon } from "../../components"

const Tab = createBottomTabNavigator()
export default function AuthRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home"
                    } else if (route.name === "Map") {
                        iconName = focused ? "map" : "map"
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ title: "Início", headerShown: false }} />
            <Tab.Screen name="Map" component={Map} options={{ title: "Mapa" }} />
        </ Tab.Navigator>
    )
}