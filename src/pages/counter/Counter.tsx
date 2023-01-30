import { decrement, increment } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


const Button = styled.button`
  color: orange;
`

import React from 'react';
import type { RootState } from '../../app/store';

export const Counter = () => {

  const count = useSelector(
    (st: RootState) => st.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};
