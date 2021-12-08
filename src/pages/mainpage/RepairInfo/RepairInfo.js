import './RepairInfo.scss';
import { data } from './howToStart';

function RepairInfo() {
	return (
		<section className='repair-info'>
			<div className='repair-info__wrapper'>
				<h2 className='repair-info__title fontGaramond'>Всего 6 шагов, 3 дня и вы можете приступать к ремонту</h2>
				<ul className='repair-info__list'>
					{data.map((item, index) => {
						return (
							<li className='repair-info__item' key={index}>
								<img className='item__picture' src={item.picture} alt='иконка'></img>
								<h3 className='item__title fontBold'>{item.title}</h3>
								<p className='item__description'>{item.description}</p>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default RepairInfo;