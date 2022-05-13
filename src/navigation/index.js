import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import AuthRoutes from "./routes/AuthRoutes"

const Tab = createBottomTabNavigator()
export default function Navigation() {
    return <AuthRoutes />
}