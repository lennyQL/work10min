import React, { useState, useEffect, useContext } from 'react';
import { SiteContext } from '../App'; 

const ClickCounter = () => {
  const { state, dispatch } = useContext(SiteContext);
  const [count, setCount] = useState(state.INIT_COUNT);

  useEffect(() => {
    const title = document.title;
    document.title += ` ${count} click`;
    dispatch({
      type: 'UPDATE',
      payload: count
    });
    return () => {
      document.title = title;
    };
  },[count]);

  return (
    <div>
      <p>Your click : {count}</p>
      <ClickButton
        text="Plus one"
        onClick={() => setCount(increaseCount(count))}
      />
      <ClickButton
        text="Minus one"
        onClick={() => setCount(decreaseCount(count))}
      />
      <ClickButton
        text="Clear"
        onClick={() => setCount(initCount(count, state.INIT_COUNT))}
      />
    </div>
  );
};

type ButtonProps = {
  text: string,
  onClick: () => void
}

const ClickButton: React.VFC<ButtonProps> = ({text, onClick}) => {

  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const increaseCount = (count: number) => {
  if (count < 20) {
    return count + 1;
  }
  return count;
};

const decreaseCount = (count: number) => {
  if (count > 0) {
    return count - 1;
  }
  return count;
};

const initCount = (count: number, init: number) => count = init;


export default ClickCounter;