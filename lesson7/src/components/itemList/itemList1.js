import React, {Component} from 'react';
import styled from 'styled-components';

const List = styled.ul`
    cursor: pointer;
`;

const ListItems = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <List>
                <ListItems>
                    John Snow
                </ListItems>
                <ListItems>
                    Brandon Stark
                </ListItems>
                <ListItems>
                    Geremy
                </ListItems>
            </List>
        );
    }
}