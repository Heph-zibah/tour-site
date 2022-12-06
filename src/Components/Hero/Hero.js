import React from 'react';
import '../Hero/Hero.css';
import { GoBook } from 'react-icons/go';
import tours from '../Tours/ToursData';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<>
			<header>
				<div className='container header__container'>
					<h1>
						live your <span>adventure</span>
					</h1>
					<p>
						Don't wait until tomorrow. Discover your adventure now and feel the
						sensation of closeness to nature around you.
					</p>
					<button>
						<Link to={`/Tour/${tours.id}`}>
							<GoBook className='icon' /> book now
						</Link>
					</button>
				</div>
			</header>
		</>
	);
};

export default Hero;
