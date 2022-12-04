import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect } from 'react'
import App, { AppContext } from '../App';
import Board from './Board';

function Letter({ letterPos, attemptVal }) {

    const { board, correctWord, currAttempt, setDisabledLetters, disabledLetters} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord[letterPos] === letter
    const almost = !correct && letter !== "" && correctWord.includes(letter)

    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter])
        }
    }, [currAttempt.attempt])

    return (
        <div className="letter" id={letterState}>
            {" "}
            {letter}
        </div>
    )
}

export default Letter