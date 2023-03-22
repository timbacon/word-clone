import React from 'react';
import { answer } from '../Game';

function SadBanner() {
    return (
        <div className='sad banner'>
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        </div>
    );
}

export default SadBanner;
