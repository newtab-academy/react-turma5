import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const jogadores = ["Zetti", "Tafarel", "Neymar", "Ronaldinho"]

    return (
        <ul>
            {
              jogadores.map((jogador, index) =>
                <li>{jogador}</li>
            )}
        </ul>
    )
}