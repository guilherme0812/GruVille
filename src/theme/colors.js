import { DefaultTheme, DarkTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#8280FF",
        secondary: "#DDDDDD",
        secondaryContrast: "#ffffff",
        text: "#000000",
        textAlt: "#505050",
        textContrast: "#ffffff",
        card: "#ffffff",
        shadow: "#000000",
        background: "#FFFFFF",
        backgroundDot: "#f2f2f2"
    }
}

export const nightTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary: "#504E99",
        secondary: "#C2C2C2",
        secondaryContrast: "#000000",
        text: "#ffffff",
        textAlt: "#C2C2C2",
        textContrast: "#ffffff",
        card: "#16162C",
        shadow: "#FFFFFF",
        background: "#0C0C18",
        backgroundDot: "#f2f2f2",
    }
}