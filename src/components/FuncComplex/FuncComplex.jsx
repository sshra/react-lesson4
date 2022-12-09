import {useState} from 'react';
import style from './FuncComplex.module.css';
import PropTypes from 'prop-types';

export const FuncComplex = ({min, max}) => {
  const [state, setState] = useState({
    userNumber: '',
    count: 0,
    result: 'Result',
  });

  const [randomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  console.log('rn:' + randomNumber);
  const handleSumbit = e => {
    e.preventDefault();

    setState((prevState) => {
      let str = '';
      let count = prevState.count;

      if (!state.userNumber ||
        state.userNumber < min ||
        state.userNumber > max) {
        return {...prevState, result: `Input number from ${min} to ${max}`};
      }

      count++;

      if (state.userNumber > randomNumber) {
        str = `${state.userNumber} is greater then needed.`;
      } else if (state.userNumber < randomNumber) {
        str = `${state.userNumber} is less then needed.`;
      } else {
        str = `You are winner, the Number is ${state.userNumber},
        tries ${count}`;
      }

      return {...prevState, count, result: str};
    });
  };

  const handleChange = e => {
    setState({...state, userNumber: e.target.value});
  };

  return (
    <div className={style.game}>
      <p className={style.result}>{state.result}</p>
      <form className={style.form} onSubmit={handleSumbit}>
        <label className={style.label} htmlFor='user_number'>
          Tries {state.count}
        </label>
        <input
          value={state.userNumber}
          onChange={handleChange}
          className={style.input}
          type='number'
          id='user_number' />
        <button className={style.btn}>Guess</button>
      </form>
    </div>
  );
};

FuncComplex.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
