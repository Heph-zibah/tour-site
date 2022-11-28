import React, { useState } from 'react';
import '../Review/Review.css';
import reviews from '../Review/ReviewData';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { id, text, img, name, job } = reviews[index];
	const checkNumber = (number) => {
		if (number > reviews.length - 1) {
			return 0;
		}
		if (number < 0) {
			return reviews.length - 1;
		}
		return number;
	};
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	return (
		<>
			<section className='review__container'>
				<div className='review__header'>
					<h1>
						what tourists say <span>about us</span>
					</h1>
					<p>
						See and discover what tourists tell us about their jorney with us. We
						always listen to whatever experience they have to say.
					</p>
				</div>
				<div className='review__cards'>
					<div className='review__card' key={id}>
						<em>{text}</em>
						<div className='review__info'>
							<img src={img} alt={name} className='review__img' />
							<div className='review__info--div'>
								<strong>{name}</strong>
								<small>{job}</small>
							</div>
						</div>
						<div className='review__btns'>
							<button>
								<SlArrowLeft onClick={prevPerson} />
							</button>
							<button>
								<SlArrowRight onClick={nextPerson} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Review;
