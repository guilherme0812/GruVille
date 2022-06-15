import { Platform } from "react-native";

export default {
    padding: 16,
    margin: 16,
    ...Platform.select({
        web: { headerHeight: 160, collapsedHeaderHeight: 110 },
        android: { headerHeight: 200, collapsedHeaderHeight: 110 },
        ios: { headerHeight: 220, collapsedHeaderHeight: 110 }
    })
}