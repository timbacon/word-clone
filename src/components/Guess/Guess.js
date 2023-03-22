import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import { answer } from '../Game';

function Guess({ value = '' }) {
    const charStatuses = checkGuess(value, answer);

    return (
        <p className='guess'>
            {range(5).map((_, index) => (
                <span
                    key={index}
                    className={
                        charStatuses?.[index]
                            ? `cell ${charStatuses[index]?.status}`
                            : 'cell'
                    }
                >
                    {charStatuses?.[index]?.letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
