import React, { useState } from 'react';

const FlashCard = (props) => {
    const [showQuestion, setShowQuestion] = useState(true);
    
    const switchState = () => {
        if (showQuestion) {
            setShowQuestion(false);
        } else {
            setShowQuestion(true);
        }
    }
    return (
        <div className={`flashcard ${props.difficulty}`}> 
            <button className={showQuestion ? "" : "flipped"} onClick={switchState}> 
                <span className={showQuestion ? "" : "text-flipped"}>
                    {showQuestion ? (
                        <>
                            <div>{props.question}</div>
                            {props.image && (
                            <img
                                src={props.image}
                                className="flashcard-image"
                            />
                            )}
                        </>
                    ) : (
                        <>
                            {props.answer}
                        </>
                    )}
                </span>
            </button>     
        </div>
    )
}
export default FlashCard;