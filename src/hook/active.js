
import { useReducer, useCallback, useEffect} from 'react';

const POP = 'POP';
const PUSH = 'PUSH';
const RESET = 'RESET';
const RESTORE = 'RESTORE'

const initialState = {
    history: [],
    present: null,
  };

const reducer = (state = initialState, action) => {
  const { history, present} = state;
  switch (action.type) {
    case POP: {
      const present =   history[history.length - 1];
      const newPast = history.slice(0, history.length - 1);
      return {
        history: newPast,
        present: present
      };
    }
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
        let newHistory = [...history, present]
        if(newHistory.length > 5) newHistory = newHistory.slice(0,4);
        return {
            history: newHistory,
            present: newPresent,
          };
      }
      else {
          return {
            history: [...history],
            present: newPresent,
          }
      }

    }
    case RESET: {
      const  newPresent  = action.payload;

      return {
        history: [],
        present: newPresent
      };
    }
    default:
  }
};

const useHistory = () => {
  const preState = JSON.parse(localStorage.getItem('rvn-client-history')) || initialState;
  const [state, dispatch] = useReducer(reducer, {
    ...preState
  });
  useEffect(() => {
    localStorage.setItem('rvn-client-history', JSON.stringify(state));
  }, [state]);
  const canPOP = state.history.length !== 0;
  const pop = useCallback(() => {
    if (canPOP) {
      dispatch({ type: POP });
    }
  }, [canPOP]);
  const push = useCallback(
    newPresent => dispatch({ type: PUSH, payload: newPresent })
  ,[]);
  const reset = useCallback(
    newPresent => dispatch({ type: RESET, payload: newPresent })
  ,[]);

  return [state, { reset, pop, push, canPOP }];
  
};

export default useHistory;