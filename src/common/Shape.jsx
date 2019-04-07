import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import { MyNavbar } from './MyNavbar'
import style from './App.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { renderPentagon } from './ShapeActions'
import { clear } from './AppActions'

class Shape extends Component {
    constructor() {
        super()

        this.goToHome = this.goToHome.bind(this)
    }

    goToHome() {
        this.props.clear()
        this.props.history.push('/')
    }

    componentDidMount() {
        if (this.props.app.number < 1)
                this.props.history.push('/')
        else
            this.props.renderPentagon(this.props.app.number, this.props.app.dots)
    }
    
    render() {
        return (
            <Fragment>
                <MyNavbar />
                <Container className={[style.shape, style.container].join(' ')}>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h1>Desenhamos especialmente para você :P</h1>
                                <h2>{this.props.app.dots} {this.props.app.dots == 1 ? 'ponto' : 'pontos'}</h2>
                                
                                <div className="pentagon">
                                    <svg viewBox="0 0 500 500">
                                        <circle cx="250" cy="250" r="20" fill="blue" stroke="black" strokeWidth="3" />
                                        {this.props.shape.html}
                                    </svg>
                                </div>

                                <Button variant="primary" size="lg" onClick={this.goToHome}>Começar de novo ;)</Button>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return { 
        app: state.app,
        shape: state.shape
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ renderPentagon, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Shape)