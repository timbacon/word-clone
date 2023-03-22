import React from 'react';
import { checkGuess } from '../../game-helpers';
import { answer } from '../Game';

const keyRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard({ latestGuess = '' }) {
    const latestStatus = checkGuess(latestGuess, answer);
    return (
        <div className='keyboard-wrapper'>
            {keyRows.map((row, index) => (
                <div className='keyboard-row' key={index}>
                    {row.map(key => {
                        const { status } =
                            latestStatus?.find(lg => lg.letter === key) || {};
                        return <Key key={key} value={key} status={status} />;
                    })}
                </div>
            ))}
        </div>
    );
}

function Key({ value, status }) {
    return (
        <div className={status ? `keyboard-key ${status}` : 'keyboard-key'}>
            {value}
        </div>
    );
}

export default Keyboard;
