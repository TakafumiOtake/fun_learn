/* eslint-disable react/no-array-index-key */
import React from 'react';

function AnswerButton({
  answer,
  onClick,
}) {
  return (
    <div className="answer-button">
      <button type="button" className="button" data-answer={answer} onClick={onClick}>{answer}</button>
    </div>
  );
}

function ButtonSpace() {
  return (<div className="answer-button" />);
}

function AnswerButtons({ answers, onClick }) {
  const maxLength = answers.reduce((m, a) => Math.max(m, a.length), 0);
  return (
    <div className="answer-buttons">
      {answers.map((as, i) => (
        <div key={i} className="answer-button-row">
          {[...as, ...Array(maxLength - as.length).fill(null)]
            .map((a, j) => (a !== null
              ? <AnswerButton key={a} onClick={onClick} answer={a} />
              : <ButtonSpace key={`space_${j}`} />))}
        </div>
      ))}
    </div>
  );
}

export default AnswerButtons;
