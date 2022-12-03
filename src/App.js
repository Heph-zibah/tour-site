import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tour from './Components/Tour/Tour';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='Tour/:userId' element={<Tour />} />
			</Routes>
		</div>
	);
}

export default App;
