function Question({
  question,
  dispatch,
  answer,
  points,
  index,
  numQuestions,
  maxPossiblePoints,
}) {
  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="progress">
        <progress value={index + 1} max={numQuestions}></progress>
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> /{maxPossiblePoints}
        </p>
      </div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              hasAnswered
                ? index === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswered && index + 1 < numQuestions && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      )}

      {hasAnswered && index + 1 === numQuestions && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'finished' })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default Question;
