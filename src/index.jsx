import React from 'react'
import ReactDOM from 'react-dom'
import App from './common/App'
import Result from './common/Result'
import Shape from './common/Shape'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/resultado" component={Result} />
                <Route path="/pentagono" component={Shape} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)