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
                <ListItems className="list-group-item">
                    John Snow
                </ListItems>
                <ListItems className="list-group-item">
                    Brandon Stark
                </ListItems>
                <ListItems className="list-group-item">
                    Geremy
                </ListItems>
            </List>
        );
    }
}