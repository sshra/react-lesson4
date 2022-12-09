import {useState} from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';

export const FunctionalComponent = ({min, max}) => {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('Result');
  const [count, setCount] = useState(0);
  const [randomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  const handleSumbit = e => {
    e.preventDefault();

    setCount(prevCount => prevCount + 1);

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Input number from ${min} to ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} is greater then needed.`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} is less then needed.`;
      }

      return `You are winner, The Number is ${userNumber}`;
    });
  };

  const handleChange = e => {
    setUserNumber(e.target.value);
  };

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSumbit}>
        <label className={style.label} htmlFor='user_number'>
          Tries {count}
        </label>
        <input
          value={userNumber}
          onChange={handleChange}
          className={style.input}
          type='number'
          id='user_number' />
        <button className={style.btn}>Guess</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

