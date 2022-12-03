import React, { useState } from 'react';
import '../Tour/Tour.css';
import datas from '../Tours/ToursData';
import { BsFillStarFill } from 'react-icons/bs';

const Tour = () => {
	const [readMore, setReadMore] = useState(false);
	return (
		<>
			<section className='container'>
				{datas.map((data) => {
					const { id, img, price, title, rate, text } = data;
					return (
						<div key={id} className='tour__content'>
							<div className='tour__img'>
								<img src={img} alt={title} />
								<div className='tour__title'>
									<h1>{title}</h1>
									<div className='tour__btns'>
										<button className='tour__btn back'>Back</button>
										<button className='tour__btn book'>Book Now</button>
									</div>
								</div>
							</div>
							<div className='tour__info'>
								<h4>
									<strong>$</strong>
									{price}
									<span>/person</span>
								</h4>
								<p>
									<BsFillStarFill className='rate__icon' />
									{rate}
								</p>
							</div>
							<p className='tour__text'>
								{readMore ? text : `${text.substring(0, 1000)}... `}
								<button onClick={() => setReadMore(!readMore)}>
									{readMore ? 'Show less' : 'Read more'}
								</button>
							</p>
							<div>
								<button className='tour__btn text'>book now</button>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Tour;