import React from 'react'

const INITIAL_STATE = {
    html: ''
}

const renderPentagon = (color = 'blue', angle = 180.0, size = 60, _step = 2, fix = -18) => {
    let numberOfSides = 5
    let Xcenter = 250
    let Ycenter = 250
    let step = _step * Math.PI / numberOfSides
    let shift = (Math.PI / angle) * fix
    let render = []

    for (let i = 0; i <= numberOfSides; i++) {
        let curStep = i * step + shift;
        render.push( 
            <circle key={i}
                cx={(Xcenter + size * Math.cos(curStep))} 
                cy={(Ycenter + size * Math.sin(curStep))}
                r="20" 
                fill={color} 
                stroke="black" 
                strokeWidth="3" />
        )
    }

    return render
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RENDER_PENTAGON':
            let html = []

            switch (action.payload.dots) {
                case 1:
                    html.push('')
                break
                case 6:
                    html.push(renderPentagon('red'))
                break
                case 16:
                    html.push(renderPentagon('blue'))
                    html.push(renderPentagon('red', 180.0, 120))
                    html.push(renderPentagon('red', -180.0, 98))
                break
                case 31:
                    html.push(renderPentagon('blue'))
                    html.push(renderPentagon('blue', 180.0, 120))
                    html.push(renderPentagon('blue', -180.0, 98))

                    html.push(renderPentagon('red', 180.0, 180, 2, -18))
                    html.push(renderPentagon('red', -320.0, 150, 8, -5))
                    html.push(renderPentagon('red', 320.0, 150, 2, 60))
                break
                default:
                    html = ''
            }

            return { ...state, html: html }
        default:
            return state
    }
}