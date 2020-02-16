import { ACTION } from "./actionTypes";

const initialState = {};

function doSomething(state) {
  return { ...state };
}

const actionMap = {
  [ACTION]: doSomething
};

export default function <%= componentName %>(state = initialState, action) {
  const method = actionMap[action.type];
  if (method) {
    return method(state, action);
  }

  return state;
}
