import React from "react";

const AnswerSec = ({ messages }) => {
  return (
    <div className="answerDiv">
      <div className="answerSubDiv">
        <hr className="hrLine" />
        <div className="answerContainer">
          {messages.map((value, index) => {
            return (
              <div className="answerSection" key={index}>
                <p className="question">{value.input}</p>
                <p className="answer">{value.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnswerSec;
