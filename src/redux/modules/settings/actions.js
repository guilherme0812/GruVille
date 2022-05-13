import types from "./types"

export function switchThemeAction() {
    return { type: types.THEME_SWITCH }
}

export function resetAction() {
    return { type: types.RESET }
}