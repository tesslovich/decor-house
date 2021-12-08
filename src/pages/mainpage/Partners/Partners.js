import { data } from './partnersLogo';
import './Partners.scss';

function Partners() {
	return (
		<section className='partners'>
			<h2 className='partners__title fontGaramond'>Наши уважаемые партнеры, которые остались довольны  сотрудничеством с нами</h2>
			<ul className='partners__list'>
				{data.map((item, index) => {
					return (
						<li className='partners__item' key={index}>
							<img className='partners-item__picture' src={item.picture}></img>
						</li>
					)
				})}
			</ul>
		</section>
	)
}

export default Partners;