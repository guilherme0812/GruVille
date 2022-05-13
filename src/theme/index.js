import { lightTheme } from "./colors"
import metrics from "./metrics"

export default function getTheme(dark) {
    return {
        ...lightTheme,
        metrics: metrics
    }
}