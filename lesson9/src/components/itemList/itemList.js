import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';

import styled from 'styled-components';

const List = styled.ul`
    cursor: pointer;
`;

const ListItems = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    gotService = new GotService();
    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems = (arr) => {

        return arr.map( (item) => {

            const IdByUrl = parseInt(item.url.match(/\d+/));

            return (
                <ListItems 
                    key={IdByUrl}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(IdByUrl)}>
                        {item.name}
                </ListItems>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);
        
        return (
            <List className="item-list list-group">
                {items}
            </List>
        );
    }
}