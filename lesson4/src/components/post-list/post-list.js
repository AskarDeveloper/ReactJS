import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    let elements = posts.filter(item => typeof item === 'object');

    elements = elements.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem 
                label={item.label} 
                important={item.important} />
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;