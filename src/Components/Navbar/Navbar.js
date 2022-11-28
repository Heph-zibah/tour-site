import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { TiThMenuOutline } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<>
			<nav>
				<div className='nav__container container'>
					<h1 className='logo'>travel.</h1>
					<div className='nav__link'>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Tours</li>
							<li>FAQs</li>
							<li>Contact</li>
						</ul>
					</div>

					<button onClick={() => setNav(!nav)}>
						{nav ? (
							<TiThMenuOutline className='nav__icon' />
						) : (
							<FaTimes className='nav__icon' />
						)}
					</button>
				</div>
				<div className={!nav ? 'mobile__link show' : 'mobile__link'}>
					<div className='mobile__header'>
						<h1 className='logo'>travel.</h1>
					</div>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Tours</li>
						<li>FAQs</li>
						<li>Contact</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
