import './PreliminaryInformation.scss';
import DollarIcon from '../../../images/svg/dollarIconPreInfo.svg';
import ManIcon from '../../../images/svg/manIconPreInfo.svg';
import DecorIcon from '../../../images/svg/decorIconPreInfo.svg';
import StyleIcon from '../../../images/svg/styleIconPreInfo.svg';

function PreliminaryInformation() {
	return (
		<section className='preinfo'>
			<div className='preinfo__wrapper'>
				<div className='preinfo__wrapper--book'>
					<div className='preinfo__info info'>
						<h2 className='info__title fontGaramond'>Мы всегда стремимся к совершенству во всех деталях!</h2>
						<p className='info__text'>Мы находимся в Астане (Нур-Султане), но работаем во всех городах Казахстана как удаленно, так и с выездом на замер и авторский надзор.
							<br />
							<br />
							Нами уже были реализованы проекты в г. Актау, Алматы, Павлодар, Шымкент, Жезказган, Караганды, Актобе, Тараз, Атырау и Петропавловск.
							<br />
							<br />
							Среди которых не только жилые дома и квартиры, но коммерческие помещения: рестораны, кафе, лаунж-бары, сауна и SPA, гостиницы и другое.</p>
					</div>
					<div className='prefinfo__advantage'>
						<ul className='prefinfo__advantage-list'>
							<li className='prefinfo__advantage-card card'>
								<img className='card__picture' src={DollarIcon}></img>
								<h3 className='card__title'>Цена и качетво лучшее соотношение</h3>
								<p className='card__description'>Для получения наиболее оптимального результата, при этом не потеряв больших средств, мы грамотно распределяем бюджет Заказчика еще на стадии проектирования.
									При этом Вы не потеряете в качестве!</p>
							</li>
							<li className='prefinfo__advantage-card card'>
								<img className='card__picture' src={ManIcon}></img>
								<h3 className='card__title'>КОНТРОЛИРУЕМ и координируем</h3>
								<p className='card__description'>Рабочие не будут Вас донимать своими вопросами. Мы берем под свой авторский контроль работу отделочной бригады.
									В итоге Вы сэкономите кучу времени и получите полностью соответствующий проекту интерьер</p>
							</li>
							<li className='prefinfo__advantage-card card'>
								<img className='card__picture' src={DecorIcon}></img>
								<h3 className='card__title'>КОМПЛЕКТУЕМ и декорируем</h3>
								<p className='card__description'>Мы отлично знаем рынок отделочных материалов, поставщиков мебели, освещения и других предметов интерьера.
									Мы подберем Вам все в соответствии с Вашим бюджетом!</p>
							</li>
							<li className='prefinfo__advantage-card card'>
								<img className='card__picture' src={StyleIcon}></img>
								<h3 className='card__title'>СТИЛЬНО И РОСКОШНО со вкусом </h3>
								<p className='card__description'>Мы разрабатываем стильные и неповторимые интерьеры с утонченной роскошью. Какой бы ни была задача, Вы всегда можете быть уверены, что наша работа Вас приятно удивит и очарует!</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}


export default PreliminaryInformation;