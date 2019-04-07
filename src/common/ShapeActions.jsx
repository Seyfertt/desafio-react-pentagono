export function renderPentagon(number, dots) {
    return {
        type: 'RENDER_PENTAGON',
        payload: {
            number, dots
        }
    }
}