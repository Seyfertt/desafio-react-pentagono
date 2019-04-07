export function setNumber(number) {
    return {
        type: 'SET_NUMBER',
        payload: { number }
    }
}

export function clear() {
    return {
        type: 'CLEAR'
    }
}

export function calculateDots(number) {
    return {
        type: 'CALCULATE_DOTS',
        payload: { number }
    }
}