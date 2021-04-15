
import { useReducer, useCallback, useEffect} from 'react';

const PUSH = 'PUSH';
const RESET = 'RESET';
const RESTORE = 'RESTORE';

const shallowSet = (x, newItem) => {
  const y = new Set()
  for (const item of x) y.add(item);
  if(newItem) y.add(newItem);
  return y
}

const initialState = {
    history: new Set(),
    present: null,
  };

const reducer = (state = initialState, action) => {
  const { history, present} = state;
  switch (action.type) {
    case RESTORE: {
      return {
        history: action.payload.history,
        present: action.payload.present
      }
    }
    case PUSH: {
      const  newPresent  = action.payload;
      if (newPresent === present) {
        return state;
      }
      if (present) {
        const newHistory = shallowSet(history, action.payload)
        return {
            history: newHistory,
            present: newPresent,
          };
      }
      else {
          return {
            history: shallowSet(history),
            present: newPresent,
          }
      }

    }
    case RESET: {
      const  newPresent  = action.payload;
      return {
        history: new Set(),
        present: newPresent
      };
    }
    default:
  }
};

const useHistory = () => {
  const preState = JSON.parse(localStorage.getItem('rvn-client-history')) || initialState;
  preState.history = shallowSet([], preState.present);
  const [state, dispatch] = useReducer(reducer, {
    ...preState
  });
  useEffect(() => {
    localStorage.setItem('rvn-client-history', JSON.stringify(state));
  }, [state]);
  const push = useCallback(
    newPresent => dispatch({ type: PUSH, payload: newPresent })
  ,[]);
  const reset = useCallback(
    newPresent => dispatch({ type: RESET, payload: newPresent })
  ,[]);

  return [state, { reset, push }];
  
};

export default useHistory;