import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import HappyBanner from '../HappyBanner/HappyBanner';
import Keyboard from '../Keyboard/Keyboard';
import SadBanner from '../SadBanner/SadBanner';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guessList, setGuessList] = useState([]);
    const [complete, setComplete] = useState(false);

    const addGuessToList = guess => {
        const nextList = [...guessList, guess];
        setGuessList(nextList);
        if (guess === answer) {
            setComplete('success');
            return;
        }
        if (nextList.length === NUM_OF_GUESSES_ALLOWED) {
            setComplete('fail');
        }
    };

    return (
        <>
            <GuessResults guessList={guessList} />
            <GuessInput
                addGuessToList={addGuessToList}
                disabled={complete !== false}
            />
            <Keyboard latestGuess={guessList.at(-1)} />
            {complete === 'success' && (
                <HappyBanner numGuesses={guessList.length} />
            )}
            {complete === 'fail' && <SadBanner />}
        </>
    );
}

export default Game;
