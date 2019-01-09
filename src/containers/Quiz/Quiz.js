import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо?',
        idx: 1,
        rightAnswerId: 2,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Зеленый', id: 3},
          {text: 'Крастный', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log(`Answer Id is ${answerId}`)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            idx={this.state.quiz[0].idx}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz