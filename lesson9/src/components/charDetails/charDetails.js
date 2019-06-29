import React, {Component} from 'react';
import GotService from '../../services/gotService';

import styled from 'styled-components';

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
const Title = styled.h4`
`

const List = styled.ul`
`

const ListItem = styled.li`
`

const CharListTitle = styled.span`
    font-weight: bold;
`

const CharList = styled.span`
`

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
    }

    render() {

        if (!this.state.char) {
            return <span className="select-error">Please select character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <CharDetailsBlock className="char-details rounded">
                <Title>{name}</Title>
                <List className="list-group list-group-flush">
                    <ListItem className="list-group-item d-flex justify-content-between">
                        <CharListTitle className="term">Gender</CharListTitle>
                        <CharList>{gender}</CharList>
                    </ListItem>
                    <ListItem className="list-group-item d-flex justify-content-between">
                        <CharListTitle className="term">Born</CharListTitle>
                        <CharList>{born}</CharList>
                    </ListItem>
                    <ListItem className="list-group-item d-flex justify-content-between">
                        <CharListTitle className="term">Died</CharListTitle>
                        <CharList>{died}</CharList>
                    </ListItem>
                    <ListItem className="list-group-item d-flex justify-content-between">
                        <CharListTitle className="term">Culture</CharListTitle>
                        <CharList>{culture}</CharList>
                    </ListItem>
                </List>
            </CharDetailsBlock>
        );
    }
}