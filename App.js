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

import AppLoading from "expo-app-loading"

//redux
import { Provider, useSelector,useDispatch } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./src/redux"
import { ThemeProvider } from "styled-components"
import { resetAction } from "./src/redux/modules/settings/actions"


function AppContent() {
	const { theme } = useSelector((state) => state.settings)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(resetAction())
	}, [])

	console.log(theme.colors)
	let [fontsLoaded] = useFonts({
		"regular": Inter_400Regular,
		"medium": Inter_500Medium,
		"semiBold": Inter_600SemiBold,
		"bold": Inter_700Bold
	})

	if (fontsLoaded) {
		return (
			<NavigationContainer theme={theme}>
				<ThemeProvider theme={theme}>
					<StatusBar />
					<Navigation />
				</ThemeProvider>
			</NavigationContainer>
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