function AnswerButton({
                          answer,
                          onClick,
                      }) {
    return (<div className="answer-button">
        <div className="button" data-answer={answer} onClick={onClick}>{answer}</div>
    </div>);
}

function ButtonSpace() {
    return (<div className="answer-button" />);
}

function AnswerButtons({answers, onClick}) {

    const maxLength = answers.reduce((m, a) => Math.max(m, a.length), 0);
    return (
        <div className="answer-buttons">
            {answers.map((as, i) => (
                <div key={i} className="answer-button-row">
                    {[...as, ...Array(maxLength - as.length).fill(null)]
                        .map((a, i) => a !== null ?
                            <AnswerButton key={a} onClick={onClick} answer={a} />
                            : <ButtonSpace key={`space_${i}`} />
                        )}
                </div>
            ))}
        </div>
    );
}

export default AnswerButtons;