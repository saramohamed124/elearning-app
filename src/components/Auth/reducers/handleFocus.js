import { ACTION_TYPES } from "../constants/ActionTypes"

export const handleFocus = (dispatch, field, value) => {
    dispatch({ type: ACTION_TYPES.SET_FOCUS, field, isFocus: value})
}