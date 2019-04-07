import { combineReducers, createStore } from 'redux'

import appReducer from './common/AppReducer'
import shapeReducer from './common/ShapeReducer'

const reducers = combineReducers({
    app: appReducer,
    shape: shapeReducer
})

const store = createStore(reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store