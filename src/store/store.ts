import { createStore } from 'redux'

function counter(state = 0, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
function counter1(state = 0, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)
const store1 = createStore(counter1)

store.subscribe(() => console.log(store.getState()))
store1.subscribe(() => console.log(store1.getState()))
console.log(store === store1);

export { store, store1 }