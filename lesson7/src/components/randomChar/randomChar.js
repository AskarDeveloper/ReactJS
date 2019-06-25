import React, {Component} from 'react';

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

    render() {

        return (
            <RandomCharBlock className="random-block rounded">
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomCharTerm className="term">Gender </RandomCharTerm>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomCharTerm className="term">Born </RandomCharTerm>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomCharTerm className="term">Died </RandomCharTerm>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <spRandomCharTerman className="term">Culture </spRandomCharTerman>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomCharBlock>
        );
    }
}
