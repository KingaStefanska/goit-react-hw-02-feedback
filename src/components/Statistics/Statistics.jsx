import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={css.good}>Good: {good}</div>
      <div className={css.neutral}>Neutral: {neutral}</div>
      <div className={css.bad}>Bad: {bad}</div>
      <div className={css.option}>Total: {total}</div>
      <div className={css.positive}>
        Positive Feedback: {positivePercentage}%
      </div>
    </>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
