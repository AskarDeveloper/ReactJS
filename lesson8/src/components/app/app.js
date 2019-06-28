import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

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
        showRandomChar: true
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}