import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';

            //Вызов вывода в консоль списки книг, домов и персонажей по заданию №7
            const got = new GotService();

            got.getAllCharacters()
                .then(res => {
                    res.forEach((item) => console.log(item.name))
                });

            got.getCharacter(130)
                .then(res => console.log(res))

            got.getAllHouses()
                .then(res => {
                    res.forEach((item) => console.log(item.name))
                });

            got.getHouse(229)
                .then(res => console.log(res))

            got.getAllBooks()
                .then(res => {
                    res.forEach((item) => console.log(item.name))
                });

            got.getBook(11)
                .then(res => console.log(res))

const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
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
};

export default App;