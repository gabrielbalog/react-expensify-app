import { createStore } from 'redux';

// Action Generators

// const add = ({data} => data.a + data.b); // Mesma coisa que o codigo abaixo

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
// 1. Reducers are pure functions -> Significa nao utilizar variaveis fora da funcao
// a nao ser as que sao requiridas na chamada da funcao
// 2. Never change state or action

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

const store = createStore(countReducer);

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
