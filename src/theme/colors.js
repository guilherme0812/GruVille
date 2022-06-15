import { DefaultTheme, DarkTheme } from "@react-navigation/native"

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#8280FF",
        secondary: "#DDDDDD",
        secondaryContrast: "#000000",
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
        primary: "#6361C0",
        secondary: "#C2C2C2",
        secondaryContrast: "#000000",
        text: "#ffffff",
        textAlt: "#C2C2C2",
        textContrast: "#ffffff",
        card: "#303030",
        shadow: "#4B4B4B",
        background: "#181818",
        backgroundDot: "#303030",
    }
}