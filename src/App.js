import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero';
import Tour from '../src/Components/Tour/Tour';
import Review from '../src/Components/Review/Review';
import Faq from '../src/Components/FAQ/Faq';
import Footer from '../src/Components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Tour />
			<Review />
			<Faq />
			<Footer />
		</div>
	);
}

export default App;
