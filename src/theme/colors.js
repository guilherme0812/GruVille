import { DefaultTheme, DarkTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#8280FF",
        secondary: "#5D78BD",
        text: "#000000",
        textAlt: "#505050",
        textContrast: "#ffffff",
        card: "#ffffff",
        shadow: "#0000001A",
        background: "#FFFFFF",
        backgroundDot: "#f2f2f2"
    }
}