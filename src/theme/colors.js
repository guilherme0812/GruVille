import { DefaultTheme, DarkTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#5D8FBD",
        secondary: "#5D78BD",
        text: "#000000",
        textAlt: "505050",
        textLight: "#ffffff",
        card: "#ffffff",
        shadow: "#0000001A",
        background: "#ffffff",
    }
}