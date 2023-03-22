import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResults({ guessList = [] }) {
    return (
        <div className='guess-results'>
            {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
                <Guess key={index} value={guessList[index]} />
            ))}
        </div>
    );
}

export default GuessResults;
