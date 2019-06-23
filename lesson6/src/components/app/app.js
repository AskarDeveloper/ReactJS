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
                {label: "Going to learn React", important: false, like: false, id: "vfdsfd"},
                {label: "That is so good", important: false, like: false, id: "sdwasd"},
                {label: "I need a break...", important: false, like: false, id: "wqesd"}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

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
        if (body) {
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    onToggle(id, key) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            let newItem;
            if (key === 'like') {
                newItem = {...old, like: !old.like}
            } else if (key === 'important') {
                newItem = {...old, important: !old.important};
            }

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <StyledAppBlock>
                 <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                 <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect} />
                 </div>
                 <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggle={this.onToggle}
                    />
                 <PostAddForm
                    onAdd={this.addItem} />
            </StyledAppBlock>
         )
    }
}