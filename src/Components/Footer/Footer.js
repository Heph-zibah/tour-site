import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
	return (
		<>
			<footer className='container'>
				<div className='footer__top--container'>
					<div>
						<h2>travel.</h2>
						<p>
							Our mission is to make everyone able to feel the attachment back to
							nature by providing an unforgettable experience
						</p>
					</div>
					<div className='footer__links'>
						<ul>
							<h5>about</h5>
							<li>about us</li>
							<li>features</li>
							<li>news & blog</li>
						</ul>
						<ul>
							<h5>movement</h5>
							<li>what travel</li>
							<li>support us</li>
						</ul>
						<ul>
							<h5>company</h5>
							<li>why travel</li>
							<li>capital</li>
							<li>security</li>
						</ul>
						<ul>
							<h5>support</h5>
							<li>FAQs</li>
							<li>support center</li>
							<li>contact us</li>
						</ul>
					</div>
				</div>
				<div className='footer__bottom--container'>
					<p>
						&copy; <a href='https://github.com/Heph-zibah'>Oluwatosin Daramola. </a>
						All Rights Reserved
					</p>
					<ul>
						<li>Terms & Agreement</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
