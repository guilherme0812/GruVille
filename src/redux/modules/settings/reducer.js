import produce from "immer"
import getTheme from "../../../theme"
import types from "./types"

const INITIAL_STATE = {
    theme: getTheme()
}

export default function settings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.THEME_SWITCH:
            return produce(state, draft => {
                state.theme.dark ? draft.theme = getTheme(false) : draft.theme = getTheme(true)
            })
        case types.RESET:
            return produce(state, (draft) => {
                draft.theme = INITIAL_STATE.theme
            })
        default:
            return state
    }
}