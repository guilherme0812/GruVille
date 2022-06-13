import { Platform } from "react-native";

export default {
    padding: 16,
    margin: 16,
    ...Platform.select({
        web: { headerHeight: 160, collapsedHeaderHeight: 120 },
        android: { headerHeight: 200, collapsedHeaderHeight: 120 },
        ios: { headerHeight: 220, collapsedHeaderHeight: 120 }
    })
}