import React from 'react'
import classes from './FinishedQuiz.css'

const FinishedQuiz = props => {
  return (
  <div className={classes.FinishedQuiz}>
    <ul>
      <li>
        <strong>1 </strong>
        QQQQQQQQQQQQ
        <i className={'fa fa-times'}/>
      </li>
      <li>
        <strong>2 </strong>
        WWWWWWWWWWWWWWW
        <i className={'fa fa-check'}/>
      </li>
    </ul>
    <p>Правильно 4 из 10</p>
    <button>Повторить</button>
  </div>
  )
}

export default FinishedQuiz