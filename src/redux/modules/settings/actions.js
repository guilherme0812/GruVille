import types from "./types"

export function switchThemeAction(payload) {
    return { type: types.THEME_SWITCH, payload }
}

export function resetAction() {
    return { type: types.RESET }
}