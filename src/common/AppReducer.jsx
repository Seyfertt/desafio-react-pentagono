const INITIAL_STATE = {
    number: null,
    dots: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_NUMBER':
            return { ...state, number: action.payload.number }
        case 'CLEAR':
            return { ...state, number: null, dots: 0 }
        case 'CALCULATE_DOTS':
            let dots = 1
            for (let i = 0; i < action.payload.number; i++)
                dots += i * 5;           
            return { ...state, dots: dots }
        default:
            return state
    }
}