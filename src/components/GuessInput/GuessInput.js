import React, { useState } from 'react';

function GuessInput({ addGuessToList, disabled }) {
    const [guess, setGuess] = useState('');

    const handleGuessChange = event => {
        setGuess(event.target.value.toUpperCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        addGuessToList(guess);
        setGuess('');
    };

    return (
        <form className='guess-input-wrapper' onSubmit={handleSubmit}>
            <label htmlFor='guess-input'>Enter guess:</label>
            <input
                disabled={disabled}
                id='guess-input'
                type='text'
                value={guess}
                onChange={handleGuessChange}
                maxLength={5}
                pattern='[A-Z]{5}'
            />
        </form>
    );
}

export default GuessInput;
