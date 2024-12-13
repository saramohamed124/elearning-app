import { ACTION_TYPES } from "../constants/ActionTypes"


export const handleChangeField = (dispatch, field, value) => { 
        dispatch({type: ACTION_TYPES.SET_FIELD, field, value})
}