import './Project.scss';
import { data } from './photos';
import Button from '../../../components/Button/Button';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

function Project() {
	return (
		<section className='project'>
			<SectionTitle>Наши проекты</SectionTitle>
			<div className='project__gallery gallery'>
				{data.map((item, index) => {
					return (
						<div className='gallery__photo' key={index}>
							<div className='gallery__photo-wrapper'>
								<img className='gallery__photo-img' src={item.picture} alt='Фото наших проектов'></img>
							</div>
							<h3 className='gallery__photo-title fontGaramond'>{item.title}</h3>
							<p className='gallery__photo-subtitle fontGaramond'>{item.description}</p>
						</div>
					)
				})}
			</div>
			<div className='project__buttons'>
				<Button className='project__button--first'>Жилые помещения</Button>
				<Button>Коммерческие помещения</Button>
			</div>
		</section>
	)
}

export default Project;