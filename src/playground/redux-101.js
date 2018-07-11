import { createStore } from 'redux';

// Action Generators

// const add = ({ a, b }, c) => a + b + c;

// console.log(add({ a:1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	'type': 'DECREMENT',
	decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
	'type': 'SET',
	count
});


const resetCount = () =>  ({
	type: 'RESET'
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			}
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'RESET':
			return {
				count: 0
			}
		case 'SET':
			return {
				count: action.count
			}
		default:
			return state;
	}
};

const store = createStore(

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// unsubscribe(); // Para de printar as mudancas

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());


store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));


store.dispatch(resetCount());

store.dispatch(setCount({ count: 5 }));
