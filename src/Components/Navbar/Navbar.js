import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { TiThMenuOutline } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};
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

					<button onClick={handleClick}>
						<TiThMenuOutline className='nav__icon' />
					</button>
				</div>
				<div className='mobile__link'>
					<div className='mobile__header'>
						<h1 className='logo'>travel.</h1>
						<FaTimes className='nav__icon' />
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
