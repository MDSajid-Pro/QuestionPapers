import React, { useState } from "react";
import topics from "../data/topicsData";

const Quiz = () => {
  const [selectedTopic, setSelectedTopic] = useState("Indian Constitution");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [viewAllQuestions, setViewAllQuestions] = useState(false);
  const [startTime] = useState(Date.now());

  const handleAnswer = (option) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion] = option;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentQuestion < topics[selectedTopic].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setViewAllQuestions(false);
  };

  const handleViewQuestions = () => {
    setViewAllQuestions(true);
  };

  // Correct answer calculation
  const correctAnswersCount = answers.filter(
    (answer, index) => answer === topics[selectedTopic].questions[index].answer
  ).length;

  // Total score calculation
  const totalScore =
    answers.length > 0
      ? answers.reduce((score, answer, index) => {
          if (answer === topics[selectedTopic].questions[index].answer) {
            const questionMarks =
              topics[selectedTopic].questions[index].marks || 0; // Default to 0 if marks is undefined
            return score + questionMarks;
          }
          return score;
        }, 0)
      : 0;

  // Total marks calculation
  const totalMarks = topics[selectedTopic].questions.reduce(
    (total, question) => total + (question.marks || 0),
    0
  );

  // Percentage calculation
  const percentage = ((totalScore / totalMarks) * 100).toFixed(2);

  // Time calculation
  const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);

  return (
    <div className="flex flex-col lg:flex-row h-[95vh]">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-purple-700 text-white p-4 ">
        <h2 className="text-2xl font-bold mb-4">SUBJECTS</h2>
        <select
          onChange={handleTopicChange}
          className="p-2 border border-gray-300 rounded-md w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:cursor-pointer mb-4"
        >
          <option disabled selected className="text-gray-500">
            Choose a Subject
          </option>
          {Object.keys(topics).map((topic, index) => (
            <option
              key={index}
              value={topic}
              className="text-gray-700 hover:bg-gray-100"
            >
              {topic}
            </option>
          ))}
        </select>
        <ol className="italic m-4">
          <li>1. Please make sure you are answering all the questions.</li>
          <li>2. Each question carry 2 points.</li>
          <li>
            3. As soon as you submit the form you can check your score by
            clicking on view score button.
          </li>
          <li>4. This test is for your practice purpose.</li>
        </ol>
      </div>

      {/* Main content */}
      <div className="w-auto lg:w-3/4 p-8 bg-[#F0F0F0]">
        <h2 className="text-3xl font-bold mb-4">{selectedTopic}</h2>
        {showResults && !viewAllQuestions ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p className="text-lg">
              You answered {correctAnswersCount} out of{" "}
              {topics[selectedTopic].questions.length} questions correctly.
            </p>
            <p className="text-lg font-semibold pt-5 pb-5">
              Total Score: {totalScore} out of {totalMarks} Marks ({percentage}
              %)
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Your time: {timeTaken} seconds
            </p>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={handleViewQuestions}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Questions
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => window.location.reload()}
              >
                Restart Quiz
              </button>
            </div>
          </div>
        ) : viewAllQuestions ? (
          <div className="">
            <h2 className="text-2xl font-bold mb-4">All Questions Review</h2>
            <ul className="mt-4 overflow-y-scroll h-[530px]">
              {topics[selectedTopic].questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.answer;

                return (
                  <li key={index} className="mb-4">
                    <p className="font-semibold">
                      {index + 1}. {question.question}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                      {question.options.map((option, optionIndex) => {
                        const isOptionCorrect = option === question.answer;
                        const isOptionSelected = option === userAnswer;

                        return (
                          <div
                            key={optionIndex}
                            className={`p-2 rounded ${
                              isOptionCorrect
                                ? "bg-green-200" // Correct answer in green
                                : isOptionSelected
                                ? "bg-red-200" // Wrong answer in red
                                : "bg-gray-200"
                            }`}
                          >
                            {option}
                          </div>
                        );
                      })}
                    </div>
                    <p
                      className={isCorrect ? "text-green-600" : "text-red-600"}
                    >
                      Your answer: {userAnswer ? userAnswer : "No answer"}{" "}
                      {isCorrect ? "(Correct)" : "(Incorrect)"}
                    </p>
                    <p className="text-sm">
                      Marks: {isCorrect ? question.marks : 0}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Question {currentQuestion + 1} of{" "}
              {topics[selectedTopic].questions.length}
            </h2>
            <p className="text-lg mb-2">
              {currentQuestion + 1}.{" "}
              {topics[selectedTopic].questions[currentQuestion].question}
            </p>
            <p className="mb-4 text-end font-semibold">
              Marks: {topics[selectedTopic].questions[currentQuestion].marks}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {topics[selectedTopic].questions[currentQuestion].options.map(
                (option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswer(option)}
                    className={`p-2 rounded shadow-md ${
                      answers[currentQuestion] === option
                        ? "bg-purple-400"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded ${
                  currentQuestion === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={
                  currentQuestion === topics[selectedTopic].questions.length - 1
                }
                className={`px-4 py-2 rounded ${
                  currentQuestion === topics[selectedTopic].questions.length - 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
            {currentQuestion === topics[selectedTopic].questions.length - 1 && (
              <button
                onClick={handleSubmit}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit test
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
