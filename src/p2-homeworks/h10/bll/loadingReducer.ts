import {loadingType} from "../HW10";

const initState: loadingType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionsType): loadingType => { // fix any
    switch (action.type) {
        case 'TOGGLE-LOADING': {
            let newLoading = !action.payload.isLoading
            return {...state, isLoading: action.payload.isLoading}
        }
        default: {
            return state
        }
    }
}

type ActionsType = loadingACType
type loadingACType = {
    type: 'TOGGLE-LOADING',
    payload: { isLoading: boolean }
}
export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: 'TOGGLE-LOADING',
        payload: {
            isLoading
        }
    }
} // fix any