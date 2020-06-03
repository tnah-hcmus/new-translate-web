//load state từ json
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reddit-app-712');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 
  //ghi state vào json
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reddit-app-712', serializedState);
    } catch {
      // ignore write errors
    }
  };