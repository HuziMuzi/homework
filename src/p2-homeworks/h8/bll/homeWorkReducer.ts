import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: TypesActions): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === 'up' ? newState : newState.reverse()
            // if (action.payload === 'up') {
            //     return newState.sort((a: UserType, b: UserType) => b.name > a.name)
            // } else {
            //     return newState.sort((a: UserType, b: UserType) => a.name - b.name)
            // }

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