import './Description.scss';
import DescriptionCard from '../../../images/svg/descriptionPageCard.svg';

function Description() {
	return (
		<section className='description'>
			<div className='description__header'>
				<p className='descripion__company'>DELUXE HOUSE — это одна из самых успешных студий дизайна интерьера в Астане с командой профессионалов, объединенная желанием создавать неповторимые роскошные интерьеры в Астане и за ее пределами.<br /><br />
					Мы работаем с интерьерами по всему Казахстану!
					Главная специализация студии — это дизайн квартир, домов и коммерческих помещений любого назначения. Задача компании — создание и реализация интерьеров, выделяющихся своим стилем и безупречным вкусом.<br /><br />
					Одним из самых немаловажных аспектов специфики нашей работы - отличное знание рынка, а значит, мы точно поможем сэкономить большой объем времени и средств!
				</p>
			</div>
			<div className='description__wrapper-picture'>
				<img className='picture-img' src={DescriptionCard}></img>
			</div>
			<div className='description__services'>
				<h2 className='services__title'>10 лет <br />успешной работы</h2>
				<p className='description__services-text'>Наша студия предлагает свои услуги на рынке дизайна интерьеров Астаны с 2011 года. За этот период нами было создано и реализовано уже более 200 проектов.<br /><br />
					У нас широкий ассортимент дизайн-услуг, и мы работаем с любыми помещениями, будь это квартира, коттедж, Торговый Центр, бутик, SPA, сауны, магазины, рестораны, кафе, бизнес-центры или офисы.<br /><br />
					Мы всегда точно знаем, что нужно нашим клиентам и можем предложить ему лучше, чем то, что он от нас ждет.
				</p>
			</div>
			<div className='description__footer'>
				<p className='description__footer-text'>В нашей студии работают настоящие профессионалы, которые искренне любят своё дело и увлеченно работают над каждым проектом. Все наши специалисы специалисты дипломированы и имеют немалый опыт в проектировании, визуализации, подбору материалов и ведению авторского надзора. Вы можете быть уверены за свой проект, с нами он будет в надежных руках!<br /><br />
					Для курирования и проразрачности работ, мы предоставляем круглосуточный онлайн-доступ к чатам, который создается отдельно на каждый проект.<br /><br />
					Мы учтем все стандарты и нормы, предусмотренные законодательством Республики Казахстан при проектировании помещений общественного назначения.<br /><br />
					Основное наше направление - это разработка проектов дизайна интерьера жилых и общественных помещений. С нашими работами Вы можете ознакомиться здесь.
				</p>
			</div>
		</section>
	)
}

export default Description;