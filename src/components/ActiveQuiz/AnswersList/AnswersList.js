import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    {props.answers.map((item, index) => {
      return (
        <AnswerItem
          answer={item} key={index}
          onAnswerClick={props.onAnswerClick}
        />
      )
    })}
  </ul>
)

export default AnswersList

