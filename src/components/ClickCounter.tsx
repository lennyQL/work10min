import React, { useState, useEffect } from 'react';

type Props = {
  count: number
}

const ClickCounter = (props: Props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    const title = document.title;
    document.title += ` ${count} click`;
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
        onClick={() => setCount(initCount(count, props.count))}
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