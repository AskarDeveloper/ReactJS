import React, {Component} from 'react';

import './post-list-item.css';
import styled from 'styled-components'
const Btn = styled.button`
    background-color: transparent
`

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggle, id, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return(
            <div className={classNames}>
                <span 
                  className="app-list-item-label" 
                  onClick={() => { onToggle (id, 'like')}}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <Btn 
                      type="button" 
                      className="btn-star btn-sm"
                      onClick={() => {onToggle (id, 'important')}}
                      >
                        <i className="fa fa-star"></i>
                    </Btn>
                    <Btn 
                      type="button" 
                      className="btn-trash btn-sm"
                      onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </Btn>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}