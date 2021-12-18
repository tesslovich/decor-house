import React from "react";
import { data } from './AdvantageData';
import './Advantage.scss';

function Advantage() {
	return (
		<div className='advantage'>
			<ul className='advantage-list'>
				{data.map((item, index) => {
					return (
						<li className='advantage__card'>
							<img className='card__picture' src={item.picture}></img>
							<h3 className='card__title'>{item.title}</h3>
							<p className='card__description'>{item.description}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Advantage;