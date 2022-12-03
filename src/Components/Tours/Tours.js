import React from 'react';
import tours from '../Tours/ToursData';
import '../Tours/Tours.css';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Tours = () => {
	// const [tourSite, setTourSite] = useState(tours);
	// const handleDelete = (id) => {
	// 	const newTour = tourSite.filter((tour) => tour.id !== id);
	// 	setTourSite(newTour);
	// };
	return (
		<>
			<section className='tours__container'>
				<h1>
					find <span>popular</span> destination
				</h1>
				<div className='tours__cards'>
					{tours.map((tour) => {
						const { img, title, price, id, rate } = tour;
						return (
							<div key={id} className='tours__card'>
								<div className='tours__info'>
									<img src={img} alt={title} className='tours__img' />
									<h3>{title}</h3>
									<div className='tours__price'>
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
									<div className='tours__btns'>
										<button className='tours__btn read'>
											<Link to={`/Tour/${id}`}>Read More</Link>
										</button>
										<button className='tours__btn interest'>not interested</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Tours;
