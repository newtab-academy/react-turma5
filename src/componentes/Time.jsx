import React from 'react';
import Jogadores from './Jogadores'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <h1>TIME</h1>
            <Jogadores nome="Tafarel" />
            <Jogadores nome="Tafarel2" />
            <Jogadores nome="Tafarel3" />
        </div>
        )
    }