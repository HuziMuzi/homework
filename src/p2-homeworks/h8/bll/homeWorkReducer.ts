import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: TypesActions): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            if (action.payload === 'up') {
                return newState.sort((a: UserType, b: UserType) => b.age - a.age)
            } else {
                return newState.sort((a: UserType, b: UserType) => a.age - b.age)
            }
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

type TypesActions = sortUpACType | checkAgeACType

type sortUpACType = ReturnType<typeof sortAC>
type checkAgeACType = ReturnType<typeof checkAgeAC>

export const sortAC = (sortType: string) => {
    return {
        type: 'sort',
        payload: sortType
    } as const
}

export const checkAgeAC = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const
}