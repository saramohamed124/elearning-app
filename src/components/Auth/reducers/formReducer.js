import { ACTION_TYPES } from "../constants/ActionTypes";

// Form Reducer
export const formReducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_FIELD:
            return {...state, [action.field]: action.value};
        case ACTION_TYPES.SET_FOCUS:
            return {...state, isFocus: {...state.isFocus, [action.field]: action.isFocus}};    
        case ACTION_TYPES.SET_VALIDATY:
            return {...state, isValid: {...state.isValid, [action.field]: action.isValid}};    
        case ACTION_TYPES.SET_SUCCESS:
            return {...state, success: action.success, error: '', loading: false};
        case ACTION_TYPES.SET_ERROR:
            return {...state, error: action.error, success: '', loading: false};
        case ACTION_TYPES.SET_LOADING:
            return {...state, loading: action.loading};
        default:
            return state;
    }
}