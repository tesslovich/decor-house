import './HowWeWork.scss';
import Photo from '../../../images/gallery/aboutUsImg.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

function HowWeWork() {
	return (
		<section className='how-we-work'>
			<SectionTitle>Как мы работаем?</SectionTitle>
			<div className='how-we-work__wrapper'>
				<img className='how-we-work__img' src={Photo} alt='Фото декора'></img>
				<p className='how-we-work_-description'>Студия дизайна DELUXE HOUSE уже более 10 лет выполняет услуги по ремонту и отделочным работам квартир, домов и коммерческих помещений.<br /><br />
					Мы ремонтируем квартиры, делаем отделку офисов, домов в Астане (Нур-Султане) на высоком профессиональном уровне и не затягиваем оговоренные сроки. Для нас очень важно сдавать в эксплуатацию качественно выполненные объекты, поэтому мы всегда стремимся к совершенству в ходе исполнения своих обязательств.
					В нашей команде только профессионалы высокого уровня квалификации. Мы делает тщательный отбор своих специалистов, для которых ответственность всегда стоит на первом месте.
					Перед началом ремонта мы всегда оговариваем сроки по каждому из этапов и предупреждаем о возможных проблемах после тщательного осмотра помещения нашими техническими специалистами.<br /><br />
					Накопив богатый опыт в работе с помещениями самого разного назначения и сложности, нам удалось сформировать очень сильную команду профессионалов самой высокой квалификации по ремонту и отделке.<br /><br />
					Менеджмент ведения всех этапов и бизнесс-процессов был нами хорошо выстроен и отточен. Если Вы цените свое пространство, время, нервы и бюджет, то Вы будете на верном пути, обращаясь в нашу компанию.</p>
			</div>
		</section>
	)
}

export default HowWeWork;