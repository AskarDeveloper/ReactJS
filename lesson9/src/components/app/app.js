import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/';

import styled from 'styled-components';

const ToggleBtn = styled.button`
    margin-bottom: 30px;
    padding: 10px 10px;
    background-color: #0e4399;
    border-radius: 4px;
    border: none;
    font-weight: bold;
`

export default class App extends Component {

    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
    
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render () {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <ToggleBtn
                                onClick={this.toggleRandomChar}>Toggle random character</ToggleBtn>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
}