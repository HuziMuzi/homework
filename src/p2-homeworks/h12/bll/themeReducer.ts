const initState = {
    variant : 'some'
};

export type initStateType = {
    variant: string
}

export const themeReducer = (state = initState, action: changeThemeC): initStateType => { // fix any
    switch (action.type) {
        case 'SET-THEME': {
            return {...state, variant: action.variant}
        }
        default: return state;
    }
};


type changeThemeC = ReturnType<typeof changeThemeC>

export const changeThemeC = (variant: string): any => {
    return {
        type : 'SET-THEME',
        variant
    }
}; // fix any