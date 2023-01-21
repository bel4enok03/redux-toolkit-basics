import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount, multiplayByAmount } from './redux/counter';

function App() {
	const { value } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div>
			<p>Score: {value} </p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
			<button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
			<button onClick={() => dispatch(multiplayByAmount(5))}>*5</button>
		</div>
	);
}

export default App;
