import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, InputGroup, FormControl, Button, Jumbotron } from 'react-bootstrap'

import { MyNavbar } from './MyNavbar'
import { setNumber, calculateDots } from './AppActions'

import style from './App.scss'

class App extends Component {
    constructor() {
        super()

        this.setNumber = this.setNumber.bind(this)
    }

    setNumber() {
        let number = Math.abs(parseInt(document.getElementById('number').value))
        number = isNaN(number) ? 1 : number
        this.props.setNumber(number)
        this.props.calculateDots(number)
        this.props.history.push("/resultado")
    }

    render() {
        return (
            <Fragment>
                <MyNavbar />
                <Container className={[style.app, style.container].join(' ')}>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h1>Digite um número inteiro para determinar quantos pontos existem em um pentágono.</h1>
                                <p>
                                    Essa versão do app renderiza apenas as opções apresentadas na imagem enviada por e-mail (Desafio Celebryts _FrontEnd.png).
                                </p>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        id='number'
                                        type='text'
                                        defaultValue={this.props.app.number}
                                        placeholder="Digite o número inteiro aqui (sugestões: 1, 2, 3 e 4) :)"
                                        aria-label="Digite o número inteiro aqui (sugestões: 1, 2, 3 e 4) :)"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary" onClick={this.setNumber}>Calcular pontos</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return { app: state.app }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setNumber, calculateDots }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)