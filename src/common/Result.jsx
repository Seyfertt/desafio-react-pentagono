import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Jumbotron, Button, Alert } from 'react-bootstrap'
import { MyNavbar } from './MyNavbar'
import style from './App.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { clear } from './AppActions'

class Result extends Component {
    constructor() {
        super()

        this.goToPentagon = this.goToPentagon.bind(this)
        this.goToHome = this.goToHome.bind(this)
    }

    componentDidMount() {
        if (this.props.app.number < 1)
            this.props.history.push('/')
    }

    goToPentagon() {
        this.props.history.push('/pentagono')
    }

    goToHome() {
        this.props.clear()
        this.props.history.push('/')
    }

    render() {

        let button, alert

        if (this.props.app.dots <= 31)
            button = <Button variant="success" size="lg" onClick={this.goToPentagon}>Visualizar o pentágono</Button>
        else {
            button = <Button variant="warning" size="lg" onClick={this.goToHome}>Começar de novo :)</Button>

            alert = <Alert dismissible variant="danger">
                        <Alert.Heading>Ops! Renderização indisponível!</Alert.Heading>
                        <p>
                            Estamos aprimorando nosso algoritmo para gerar {this.props.app.dots} pontos.
                            <br/><strong><u>Experimente um número de 1 a 4, será bem mais legal ;)</u></strong>
                        </p>
                    </Alert>
        }

        return (
            <Fragment>
                <MyNavbar />
                <Container className={[style.result, style.container].join(' ')}>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h2>Pronto, calculamos a quantidade de pontos para você ;)</h2>
                                <h1>{this.props.app.dots} {this.props.app.dots == 1 ? 'ponto' : 'pontos'}</h1>
                                {button}
                                {alert}
                                <p>O número digitado foi: <strong>{this.props.app.number}</strong></p>
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

const mapDispatchToProps = dispatch => bindActionCreators({ clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)