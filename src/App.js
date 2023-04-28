import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Olympics games are held after every?',
			answerOptions: [
				{ answerText: '6 years', isCorrect: false },
				{ answerText: '3 years', isCorrect: false },
				{ answerText: '4 years', isCorrect: true },
				{ answerText: '5 years', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the Founder of Facebook?',
			answerOptions: [
				{ answerText: 'Elon mask', isCorrect: false },
				{ answerText: 'Mark Zuckerberg', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Jeff Bezos', isCorrect: false },
			],
		},
		{
			questionText: 'How many days are there in a leap year?',
			answerOptions: [
				{ answerText: '366', isCorrect: true },
				{ answerText: '364', isCorrect: false },
				{ answerText: '365', isCorrect: false },
				{ answerText: '367', isCorrect: false },
			],
		},
		{
			questionText: 'which is the smallest state of india?',
			answerOptions: [
				{ answerText: 'Rajasthan', isCorrect: false },
				{ answerText: 'Uttar pradesh', isCorrect: false },
				{ answerText: 'Punjab', isCorrect: false },
				{ answerText: 'Goa', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}