import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

    let elements = posts.filter(item => typeof item === 'object');

    elements = elements.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem 
                    label={item.label}
                    important={item.important}
                    onDelete={() => onDelete(item.id)} />
            </li>
        )
    });

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;