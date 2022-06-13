import React, { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
} from "@expo-google-fonts/inter"
import Navigation from "./src/navigation"
import { NavigationContainer } from "@react-navigation/native"
import 'react-native-gesture-handler'
import AppLoading from "expo-app-loading"

//redux
import { Provider, useSelector, useDispatch } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./src/redux"
import { ThemeProvider } from "styled-components/native"
import { resetAction, switchThemeAction } from "./src/redux/modules/settings/actions"

import moment from "moment"
import 'moment/min/locales'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
moment.updateLocale('pt-br')

function AppContent() {
	const { theme } = useSelector((state) => state.settings)
	const dispatch = useDispatch()

	useEffect(() => {
		const hour = moment(new Date()).format("h")
		const ampm = moment(new Date()).format("A")

		if (hour >= 12 && hour <= 8 && ampm === "AM") {
			dispatch(switchThemeAction("night"))
		} else if (hour >= 6 && hour <= 11 && ampm === "PM") {
			dispatch(switchThemeAction("night"))
		} else {
			dispatch(switchThemeAction(""))
		}
	}, [])

	let [fontsLoaded] = useFonts({
		"regular": Inter_400Regular,
		"medium": Inter_500Medium,
		"semiBold": Inter_600SemiBold,
		"bold": Inter_700Bold
	})

	if (fontsLoaded) {
		return (
			<GestureHandlerRootView style={{ flex: 1 }}>
				<NavigationContainer theme={theme}>
					<ThemeProvider theme={theme}>
						<StatusBar />
						<Navigation />
					</ThemeProvider>
				</NavigationContainer>
			</GestureHandlerRootView>
		)
	} else {
		return <AppLoading />
	}
}

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContent />
			</PersistGate>
		</Provider>
	)
}