import './PreliminaryInformation.scss';
import DollarIcon from '../../../images/svg/dollarIconPreInfo.svg';
import ManIcon from '../../../images/svg/manIconPreInfo.svg';
import DecorIcon from '../../../images/svg/decorIconPreInfo.svg';
import StyleIcon from '../../../images/svg/styleIconPreInfo.svg';
import Advantage from '../../../components/Advantage/Advantage';

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
					<Advantage></Advantage>
				</div>
			</div>
		</section>
	)
}


export default PreliminaryInformation;