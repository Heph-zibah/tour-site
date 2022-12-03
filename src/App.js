import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
import Tours from '../src/Components/Tours/Tours';
import Review from '../src/Components/Review/Review';
import Faq from '../src/Components/FAQ/Faq';
import Footer from '../src/Components/Footer/Footer';
import Tour from './Components/Tour/Tour';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<main className='container'>
				<Tours />
				<Tour />
				<Review />
				<Faq />
			</main>
			<Footer />
		</div>
	);
}

export default App;
