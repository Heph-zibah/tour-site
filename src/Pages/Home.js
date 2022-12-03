import React from 'react';
import Faq from '../Components/FAQ/Faq';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Review from '../Components/Review/Review';
import Tours from '../Components/Tours/Tours';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<main className='container'>
				<Tours />
				<Review />
				<Faq />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
