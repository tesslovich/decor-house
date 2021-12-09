import './Production.scss'
import LogoIconBig from '../../../images/icon/logoIcon2.svg';
import { data } from './socialIcon';
import eventBus from '../../../helpers/eventBus';

function Production() {
	const handleClick = () => {
		eventBus.dispatch('openMobileModal');
	}
	return (
		<section className='production'>
			<div className='production__wrapper--social social'>
				<p className='social__subtitle'>СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРА</p>
				<ul className='social__wrapper-icon'>
					{data.map((item, index) => {
						return (
							<li key={index}>
								<a className='social__icon social__icon--inst' href='#'>
									<img src={item.logo}></img>
								</a>
							</li>
						)
					})}
				</ul>
			</div>
			<div className='production__wrapper--content'>
				<h2 className='production__title fontGaramond'>РОСКОШНЫЙ ДИЗАЙН ИНТЕРЬЕРА В НУР-СУЛТАНЕ</h2>
				<p className='prodction__subtitle'>Мы создаем уникальные проекты любой сложности на высоком уровне качества!</p>
				<button type='button' className='production__price' onClick={handleClick}>Расчет стоимости</button>
				<img className='production__logo' src={LogoIconBig}></img>;
			</div>
		</section>
	)
}

export default Production;