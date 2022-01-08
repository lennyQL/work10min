import React, {useReducer, createContext, Dispatch} from 'react';
import './App.css';
import ClickCounter from './ui/ClickCounter';
import ClickList from './ui/ClickList';

type StateType = {
  INIT_COUNT: number,
  count: number;
}

type ContextType = {
  state: StateType;
  dispatch: Dispatch<any>;
};

const initState: StateType = {
  INIT_COUNT: 10,
  count: 0
};

const reducer = (
  state: StateType,
  action: { type: string; payload: number; }
) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export const SiteContext = createContext({} as ContextType);

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>

      <SiteContext.Provider value={{ state, dispatch }}>
        <ClickCounter />
        <ClickList />
      </SiteContext.Provider>
   
    </div>
  );
}

export default App;
