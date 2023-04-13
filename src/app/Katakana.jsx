import React, { useCallback, useState, useMemo } from 'react';
import _ from 'lodash';
import Timer from '../component/Timer';
import AnswerButtons from '../component/AnswerButtons';
import Complete from './Complete';

const Katakana = [
  ['あ', 'ア'], ['い', 'イ'], ['う', 'ウ'], ['え', 'エ'], ['お', 'オ'],
  ['か', 'カ'], ['き', 'キ'], ['く', 'ク'], ['け', 'ケ'], ['こ', 'コ'],
  ['さ', 'サ'], ['し', 'シ'], ['す', 'ス'], ['せ', 'セ'], ['そ', 'ソ'],
  ['た', 'タ'], ['ち', 'チ'], ['つ', 'ツ'], ['て', 'テ'], ['と', 'ト'],
  ['な', 'ナ'], ['に', 'ニ'], ['ぬ', 'ヌ'], ['ね', 'ネ'], ['の', 'ノ'],
  ['は', 'ハ'], ['ひ', 'ヒ'], ['ふ', 'フ'], ['へ', 'ヘ'], ['ほ', 'ホ'],
  ['ま', 'マ'], ['み', 'ミ'], ['む', 'ム'], ['め', 'メ'], ['も', 'モ'],
  ['や', 'ヤ'], ['ゆ', 'ユ'], ['よ', 'ヨ'],
  ['ら', 'ラ'], ['り', 'リ'], ['る', 'ル'], ['れ', 'レ'], ['ろ', 'ロ'],
  ['わ', 'ワ'], ['を', 'ヲ'], ['ん', 'ン'],
];

const ITEM_PER_ROW = 5;

function Hiragana({
  onBack,
  questionsCount,
}) {
  const [start] = useState(new Date().getTime());
  const [questions, setQuestions] = useState(
    // question数だけランダムにカタカナを取得し、問題一覧を生成
    () => _.shuffle([...Katakana].slice(0, questionsCount)),
  );
  const [questionIdx, setQuestionIdx] = useState(
    // 問題の出題順を生成
    () => _.shuffle(Array(questionsCount).fill().map((e, i) => i)),
  );
  const [miss, setMiss] = useState(false);
  const correctIdx = questionIdx[0];

  const onAnswerClick = useCallback((e) => {
    const { answer } = e.currentTarget.dataset;
    if (questions[correctIdx][1] === answer) {
      // 次の問題へ
      setQuestionIdx((i) => i.slice(1));
      setQuestions((qs) => {
        const newQs = [...qs];
        newQs[correctIdx] = null;
        return newQs;
      });
      setMiss(false);
    } else {
      setMiss(true);
    }
  }, [correctIdx, questions]);

  const questionTable = useMemo(
    () => _.chunk(questions.map((q) => (q ? q[1] : null)), ITEM_PER_ROW),
    [questions],
  );

  if (questionIdx.length === 0) {
    return (
      <Complete start={start} onBack={onBack} />
    );
  }

  return (
    <div className="katakana content">
      <div className="header">
        <div className="back">
          <button type="button" className="button" onClick={onBack}>もどる</button>
        </div>
        <div className="timer">
          <Timer start={start} />
        </div>
      </div>
      <div className={`question ${miss ? 'miss' : ''}`}>{questions[correctIdx][0]}</div>
      <AnswerButtons answers={questionTable} onClick={onAnswerClick} />
    </div>
  );
}

export default Hiragana;
