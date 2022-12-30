import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import QuizContext from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
    const navigate = useNavigate();
    const context = useContext(QuizContext);
    const [questionNo, setQuestionNo] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const { questions, setQuestions } = context;
    function clearRadioButtons() {
        var ele = document.querySelectorAll("input[type=radio]");
        for (var i = 0; i < ele.length; i++) {
            ele[i].checked = false;
        }
    }



    const nextButton = () => {
        if (questionNo === 9) {
            console.log(score);
            navigate(`/result/${score}`)

        }
        if (questionNo !== 10) {
            if (selectedAnswer != null) {
                if (selectedAnswer === 0) {
                    setScore((prev) => prev + 1);
                }
                setQuestionNo((prev) => prev + 1)
                clearRadioButtons();
                setSelectedAnswer(null)
            }
        }
    }

    return (
        <div className='contain'>
            {
                questions && questions.results?
                    (
                        <Container>
                            <Card style={{ width: '58rem' }}>
                                <CardHeader>Quiz App </CardHeader>
                                <Card.Body>

                                    <Card.Text>
                                        Q.{questionNo + 1} ) {questions.results&&questions.results[questionNo].question}
                                    </Card.Text>

                                    <div className='row'>
                                        <div className='col-6'>

                                            <input type='radio' name='quiz' id="0" value={questions.results[questionNo].correct_answer[0]
                                            } className='option' onClick={(e) => { setSelectedAnswer(0) }} />
                                            {questions.results[questionNo].correct_answer[0]}
                                        </div>
                                        <div className='col-6'>

                                            <input type='radio' className='option' name='quiz' onClick={(e) => setSelectedAnswer(1)} />
                                            {questions.results[questionNo].incorrect_answers[0]}

                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-6'>

                                            <input type='radio' className='option' name='quiz' onClick={(e) => setSelectedAnswer(2)} />
                                            {questions.results[questionNo].incorrect_answers[1]}

                                        </div>
                                        <div className='col-6'>

                                            <input type='radio' className='option' name='quiz' onClick={(e) => setSelectedAnswer(3)} />
                                            {questions.results[questionNo].incorrect_answers[2]}


                                        </div>
                                    </div>
                                    <div className='row mt-3' >


                                        <div className='col-6 text-center'>
                                            <Button variant="primary" onClick={nextButton}>Next</Button>
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>

                        </Container>

                    ) : (
                    <div className='result'> 
                        <h1 className='text-white' >Loading....</h1>
                        </div>
                        )
            }

        </div>
    )
}

export default Quiz