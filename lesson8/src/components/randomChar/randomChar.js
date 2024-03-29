import React, {Component} from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

    const RandomCharBlock = styled.div`
        background-color: #fff;
        padding: 25px 25px 15px 25px;
        margin-bottom: 40px;
        h4 {
            margin-bottom: 20px;
            text-align: center;
        }`

    const RandomCharTerm = styled.span`
    font-weight: bold;
    `

export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })

    }

    updateChar() {
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomCharBlock className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name} </h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm className="term">Gender </RandomCharTerm>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm className="term">Born </RandomCharTerm>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm className="term">Died </RandomCharTerm>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm className="term">Culture </RandomCharTerm>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}