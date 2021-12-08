import './Production.scss'
import { ReactComponent as InstIcon } from '../../../images/icon/instIcon.svg';
import { ReactComponent as VkIcon } from '../../../images/icon/vkIcon.svg';
import { ReactComponent as FbIcon } from '../../../images/icon/fbIcon.svg';
import { ReactComponent as PinterestIcon } from '../../../images/icon/pinterestIcon.svg';
import LogoIconBig from '../../../images/icon/logoIcon2.svg';
import { data } from './socialIcon';


function Production() {
	return (
		<section className='production'>
			<div className='production__wrapper--social social'>
				<p className='social__subtitle'>СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРА</p>
				<ul className='social__wrapper-icon'>
					{data.map((item, index) => {
						return (
							<li key={index}>
								<a className='social__icon social__icon--inst' src={item.logo} href='#'>
								</a>
							</li>
						)
					})}

					{/* <a className='social__icon social__icon--inst' href='#'>
						<InstIcon />
					</a>
					<a className='social__icon social__icon--vk' href='#'>
						<VkIcon />
					</a>
					<a className='social__icon social__icon--fb' href='#'>
						<FbIcon />
					</a>
					<a className='social__icon social__icon--pint' href='#'>
						<PinterestIcon />
					</a> */}
				</ul>
			</div>
			<div className='production__wrapper--content'>
				<h2 className='production__title fontGaramond'>РОСКОШНЫЙ ДИЗАЙН ИНТЕРЬЕРА В НУР-СУЛТАНЕ</h2>
				<p className='prodction__subtitle'>Мы создаем уникальные проекты любой сложности на высоком уровне качества!</p>
				<button type='button' className='production__price'>Расчет стоимости</button>
				<img className='production__logo' src={LogoIconBig}></img>;
			</div>
		</section>
	)
}

export default Production;