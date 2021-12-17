import './OurSocial.scss';
import { data } from '../../mainpage/Production/socialIcon';

function OurSocial() {
	return (
		<section className='our-social'>
			<div className='our-social__wrapper'>
				<div className='our-social__links'>
					<h3 className='our-social__links-title'>Мы в соцсетях</h3>
					<ul className='footer__social'>
						{data.map((item, index) => {
							return (
								<li key={index}>
									<a className='footer__social-icon' href='#'>
										<img src={item.logo}></img>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='our-social__description'>
					<h3 className='our-social__description-title'>Позвоните нам и получите ответы на все интересующие Вас вопросы!</h3>
					<p className='our-social__decor-content'>С глубоким уважением, Ваша студия интерьерного дизайна DELUXE HOUSE</p>
				</div>
			</div>
		</section>
	)
}

export default OurSocial;