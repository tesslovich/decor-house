import './Footer.scss';
import { data } from '../../pages/mainpage/Production/socialIcon';
import Map from '../Map/Map';


function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__cantact-info'>
					<div className='footer__connection connection-tel'>
						<div className='connection__title'>Наш телефон</div>
						<span className='connection__tel'>8 (700) 300-03-40</span>
						<span className='connection__tel'>8 (778) 800-03-40</span>
					</div>
					<div className='coordinates__connection connection'>
						<div className='connection__title'>Наш адрес</div>
						<p className='connection__adress'>Республика Казахстан,010000, г. Нур-Султан, ул. Достык 13</p>
					</div>
					<div className='coordinates__connection connection'>
						<div className='connection__title'>Присоединяйтесь</div>
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
					<div className='coordinates__connection connection'>
						<div className='connection__title'>Написать на почту</div>
						<a className='connection__mail' href='dh.studio.kz@gmail.com'>dh.studio.kz@gmail.com</a>
					</div>
				</div>
				<div className='footer-coordinates__map'>
					<Map />
				</div>
			</div>
			<div className='footer__corporation'>
				<div className='footer__corporation-wrapper'>
					<span>Все права защищены.<br />© 2021 Политика конфидициальности</span>
					<span>Сайт разработан специально<br />от mywebstudio.kz</span>
				</div>
			</div>
		</footer>
	)
}


export default Footer;