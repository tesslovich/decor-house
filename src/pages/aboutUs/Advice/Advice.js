import React from 'react';
import { useState } from 'react';
import { data } from './DataAdvice';
import AccordionArrow from '../../../images/svg/accordionSvg.svg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Advice.scss';
// src={AccordionArrow}




function Advice() {
	const [selected, setSelected] = useState(true);
	const toogle = index => {
		if (selected === index) {
			return setSelected(true)
		}
		setSelected(index)
	}
	return (
		<section className='advice'>
			<SectionTitle>Полезные советы от нас</SectionTitle>
			<div className='accordion'>
				{data.map((item, index) => {
					return (
						<div className='advice-card' key={index}>
							<div className='advice-card__title-wrapper' onClick={() => toogle(index)}>
								<h3 className='advice-card__title fontGaramond'>{item.title}</h3>
								<span className='advice-card__toogle'>{selected === index ? '-' : '+'}</span>
							</div>
							<div className={selected === index ? 'advice-card__content-show' : 'advice-card__content'}>{item.description}</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Advice;