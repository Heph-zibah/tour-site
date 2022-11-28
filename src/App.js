import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
import Tours from '../src/Components/Tours/Tours';
import Review from '../src/Components/Review/Review';
import Faq from '../src/Components/FAQ/Faq';
import Footer from '../src/Components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Tours />
			<Review />
			<Faq />
			<Footer />
		</div>
	);
}

export default App;
