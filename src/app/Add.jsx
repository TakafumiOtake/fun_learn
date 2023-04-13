import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import Complete from './Complete';
import Timer from '../component/Timer';
import Gauge from '../component/Gauge';
import AnswerButtons from '../component/AnswerButtons';

const buttons = [
  new Array(10).fill().map((e, i) => String(i + 1)),
  new Array(8).fill().map((e, i) => String(i + 11)),
];

function Add({
  onBack,
}) {
  const [start] = useState(new Date().getTime());
  const [miss, setMiss] = useState(false);
  const [questions, setQuestions] = useState(() => {
    // 1桁の足し算全種類の問題生成
    const array = [];
    for (let i = 1; i < 10; i += 1) {
      for (let j = i; j < 10; j += 1) {
        array.push(_.shuffle([i, j]));
      }
    }
    return _.shuffle(array);
  });
  const [questionsCount] = useState(questions.length);

  const onNumberClick = useCallback((e) => {
    const { answer } = e.currentTarget.dataset;
    if (String(questions[0][0] + questions[0][1]) === answer) {
      setQuestions((q) => q.slice(1));
      setMiss(false);
    } else {
      setMiss(true);
    }
  }, [questions]);

  if (questions.length === 0) {
    return (
      <Complete start={start} onBack={onBack} />
    );
  }

  return (
    <div className="add content">
      <div className="header">
        <div className="back">
          <button type="button" className="button" onClick={onBack}>もどる</button>
        </div>
        <div className="timer">
          <Timer start={start} />
        </div>
      </div>
      <div><Gauge remain={questions.length} total={questionsCount} /></div>
      <div className={`question ${miss ? 'miss' : ''}`}>{`${questions[0][0]} + ${questions[0][1]}`}</div>
      <AnswerButtons answers={buttons} onClick={onNumberClick} />
    </div>
  );
}

export default Add;
