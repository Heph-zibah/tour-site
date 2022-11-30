import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { FaMinus } from 'react-icons/fa';
import '../FAQ/Faq.css';

const SingleFaq = ({ title, text }) => {
	const [info, setInfo] = useState(false);
	return (
		<div className='faq__content'>
			<div className='faq__info'>
				<h6>{title}</h6>
				<button onClick={() => setInfo(!info)}>
					{!info ? <GoPlus /> : <FaMinus />}
				</button>
			</div>
			{info && <p>{text}</p>}
		</div>
	);
};

export default SingleFaq;
