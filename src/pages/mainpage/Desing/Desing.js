import React from "react";
import './Desing.scss';
import DesingBigFirst from '../../../images/desing/desingBigFirst.png';
import DesingSmallFirst from '../../../images/desing/desingSmallFirst.png';
import DesingBigSecond from '../../../images/desing/desingBigSecond.png';
import DesingSmallSecond from '../../../images/desing/desingSmallSecond.png';
import DesingBigThird from '../../../images/desing/desingBigThird.png';
import DesingSmallThird from '../../../images/desing/desingSmallThird.png';
import DesingBigFourth from '../../../images/desing/desingBigFourth.png';
import DesingSmallFourth from '../../../images/desing/desingSmallFourth.png';

function Desing() {
	return (
		<section className='desing'>
			<div className='desing__wrapper-size'>
				<div className='desing__wrapper'>
					<div className='desing__pictures-wrapper'>
						<img className='desing__pictures--big' src={DesingBigFirst} alt='Картинка дизайна'></img>
						<img className='desing__pictures--small' src={DesingSmallFirst} alt='Картинка дизайна'></img>
					</div>
					<div className='desing__description'>
						<p className='desing__description--span'>Коллекция</p>
						<h2 className='desing__description--title fontGaramond'>Экслюзивный Дизайн</h2>
						<p className='desing__description--text'>Каждый проект дизайна интерьера разрабатывается нами индивидуально для каждого заказчика. Мы не повторяем свои проекты и стараемся каждый проект делать непохожими на другие.<br />
							При разработке дизайна мы учитываем все пожелания своих клиентов и всегда рады предложить свежие идеи.</p>
					</div>
				</div>
				<div className='desing__wrapper'>
					<div className='desing__pictures-wrapper desing__pictures--grid'>
						<img className='desing__pictures--big' src={DesingBigSecond} alt='Картинка дизайна'></img>
						<img className='desing__pictures--small-left' src={DesingSmallSecond} alt='Картинка дизайна'></img>
					</div>
					<div className='desing__description desing__description--grid'>
						<p className='desing__description--span'>Коллекция</p>
						<h2 className='desing__description--title fontGaramond'>Профессиональный подход</h2>
						<p className='desing__description--text'>В нашей команде работают дипломированные специалисты с большим опытом. Нами было реализовано большое количество объектов, поэтому для нас основной ценностью является ответственный подход к своей работе.<br />
							Мы тщательно следим за тенденциями на рынке и всегда в курсе всех новинок.<br />
							Своих партнеров и подрядчиков мы всегда выбираем, исходя из их опыта и качества предоставляемых ими услуг.</p>
					</div>
				</div>
				<div className='desing__wrapper'>
					<div className='desing__pictures-wrapper'>
						<img className='desing__pictures--big' src={DesingBigThird} alt='Картинка дизайна'></img>
						<img className='desing__pictures--small' src={DesingSmallThird} alt='Картинка дизайна'></img>
					</div>
					<div className='desing__description'>
						<p className='desing__description--span'>Коллекция</p>
						<h2 className='desing__description--title fontGaramond'>Внимательное исполнение</h2>
						<p className='desing__description--text'>Команда опытных профессионалов хорошо знает, как провести авторский надзор, тщательно отслеживая каждый этап, м подобрать все необходимые материалы для того, что бы реализация объекта соответствовала проекту.<br />
							А отличное знание рынка отделочных материалов, оборудования, мебели и декора помогут Вам сэкономить время, нервы, и пожалуй самое главное - Ваш бюджет!</p>
					</div>
				</div>
				<div className='desing__wrapper qwerty'>
					<div className='desing__pictures-wrapper desing__pictures--grid'>
						<img className='desing__pictures--big' src={DesingBigFourth} alt='Картинка дизайна'></img>
						<img className='desing__pictures--small-left' src={DesingSmallFourth} alt='Картинка дизайна'></img>
					</div>
					<div className='desing__description desing__description--grid'>
						<p className='desing__description--span'>Коллекция</p>
						<h2 className='desing__description--title fontGaramond'>Точный расчет</h2>
						<p className='desing__description--text'>В нашей команде работают дипломированные специалисты с большим опытом. Нами было реализовано большое количество объектов, поэтому для нас основной ценностью является ответственный подход к своей работе.<br />
							Мы тщательно следим за тенденциями на рынке и всегда в курсе всех новинок.<br />
							Своих партнеров и подрядчиков мы всегда выбираем, исходя из их опыта и качества предоставляемых ими услуг.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Desing;