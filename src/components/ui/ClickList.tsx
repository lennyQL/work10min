import React, { useState, useContext } from 'react';
import { SiteContext } from '../App';

const ClickList = () => {
  const { state } = useContext(SiteContext);
  const [items, setItems] = useState<number[]>([state.INIT_COUNT]);

  const pushItem = () => {
    setItems((prev) => [...prev, state.count]);
  };

  const listItems = items.map((item, index) =>
    <li
      key={index}
      onClick={pushItem}
    >
      {item}
    </li>
  );
  
  return (
    <>
      <ul>{ listItems }</ul>
    </>
  );
};

export default ClickList;
