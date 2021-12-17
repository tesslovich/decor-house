import React, { useState } from 'react';
import './Rates.scss';
import { ratesData } from './ratesData';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


function Rates() {
	return (
		<section className='rates'>
			<SectionTitle>Линейка тарифов</SectionTitle>
			<div className='rates__wrapper'>
				{ratesData.map((item, index) => {
					return (
						<div key={index}>
							<div className='rates__card'>
								<div className='card-title__wrapper'>
									<span>Пакет</span>
									<h3 className='rates__title-card'>{item.title}</h3>
								</div>
								<p className='rates__description'>{item.description}</p>
								<span className='rates__square'>{item.square}</span>
								<p className='rates__subtitle'>{item.subtitle}</p>
								<p className='rates__job-descriptions'>{item.jobDescriptions.map((innerItem) => {
									return (
										<span className='job-descriptions__element'>{innerItem}</span>
									)
								})}</p>
								<button className='card__btn'>Заказать тариф</button>
							</div>
						</div>
					)
				})}
			</div>

		</section>
	)
}

export default Rates;
