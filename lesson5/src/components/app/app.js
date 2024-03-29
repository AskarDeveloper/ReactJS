import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: transparent;
`

export class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.htmlId = idGenerator();
    }

    render() {
        const { children, ...rest } = this.props;
        return (
            <label htmlFor={this.htmlId}>
                <input id={this.htmlId} type="radio" {...rest} />
                <div className="fake-radio" />
                {children}
            </label>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                4546,
                {label: "Going to learn React", important: true, id: "vfdsfd"},
                {label: "That is so good", important: false, id: "sdwasd"},
                {label: "I need a break...", important: false, id: "wqesd"}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <StyledAppBlock>
                 <AppHeader/>
                 <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                 </div>
                 <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem} />
                 <PostAddForm
                    onAdd={this.addItem} />
            </StyledAppBlock>
         )
    }
}