import React, { useState } from 'react';
import data from '../FAQ/FaqData';
import '../FAQ/Faq.css';
import SingleFaq from '../FAQ/SingleFaq';
import { BsFillPatchQuestionFill } from 'react-icons/bs';

const Faq = () => {
	const [faqs, setFaqs] = useState(data);
	return (
		<>
			<section className='container'>
				<div className='faq__container'>
					<h1>
						<BsFillPatchQuestionFill />
						frequently asked <span> questions</span>
						<BsFillPatchQuestionFill />
					</h1>
					<div>
						{faqs.map((faq) => {
							return <SingleFaq key={faq.id} {...faq} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
