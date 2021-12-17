import React, { useState } from 'react';
import './RapairTime.scss';
import { data } from './rapairTimeData';
import Button from '../../../components/Button/Button';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


function RapairTime() {
	const [tab, setTab] = useState('withoutDesing');
	return (
		<section className='repair-time'>
			<SectionTitle className='repair-time__title'>Сроки ремонта</SectionTitle>
			<div className='repair-time__repair-type'>
				<button type='button'>Ремонт без дизайна со стандартным ремонтом</button>
				<button type='button'>Ремонт с дизайна с нестандартным ремонтом</button>
			</div>
			<div className='repair-time__table table'>
				<div className='table__titles'>
					<div className='table__title'>Плошадь, м2</div>
					<div className='table__title'>Черновая отделка</div>
					<div className='table__title'>Предчистовая<br />(удучшенная черновая)</div>
					<div className='table__title'>Вторичное жилье с демонтжными работами</div>
				</div>
				{data[tab].map((item, index) => {
					return (
						<div key={index} className='table__content'>
							<div>{item.areaVolume}</div>
							<div>{item.rough}</div>
							<div>{item.improvedRoughing}</div>
							<div>{item.dismantlingWorks}</div>
						</div>
					)
				})}
			</div>
			<div className='project__buttons'>
				<Button className='project__button--first'>О нас</Button>
				<Button>Наши услуги</Button>
			</div>
		</section>
	)
}

export default RapairTime;