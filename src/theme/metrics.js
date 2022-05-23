import { Platform } from "react-native";

export default {
    padding: 16,
    ...Platform.select({
        web: { headerHeight: 160 },
        android: { headerHeight: 220 },
        ios: { headerHeight: 220 }
    })
}