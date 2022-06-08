import { lightTheme, nightTheme } from "./colors"
import metrics from "./metrics"

export default function getTheme(theme) {
    if (theme === "night") {
        return {
            ...nightTheme,
            metrics: metrics
        }
    } else {
        return {
            ...lightTheme,
            metrics: metrics
        }
    }
}