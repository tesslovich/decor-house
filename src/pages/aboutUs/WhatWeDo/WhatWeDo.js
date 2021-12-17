import React from 'react';
import { data } from './DataWhatWeDo';
import './WhatWeDo.scss';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PhotoWhatWeDo from '../../../images/mainImg/whatWeDoPicture.png';

function WhatWeDo() {
	return (
		<section className='what-we-do'>
			<SectionTitle>Что мы делаем?</SectionTitle>
			<div className='what-we-do__wrapper'>
				<img src={PhotoWhatWeDo} className='what-we-do__picture'></img>
				<div className='what-we-do__description'>
					{data.map((item, index) => {
						return (
							<span className='fontGaramond'>{item.description}</span>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default WhatWeDo;