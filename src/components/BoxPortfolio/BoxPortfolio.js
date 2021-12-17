import './BoxPortfolio.scss';
import BoxImage from '../../images/mainImg/boxImage.png';

function BoxPortfolio() {
	return (
		<section className='box-portfolio'>
			<div className='box-portfolio__picture'>
				<img className='box-portfolio__img' src={BoxImage}></img>
			</div>
			<div className='box-portfolio__inquiry'>
				<p className='box-portfolio__description fontGaramond'>Всех наших клиентов объединяет то, что они думают о будущем, идут впереди тенденций и предпочитают работать с лучшим!</p>
				<input className='inquiry__tel' type='tel' placeholder='+ 7 (___) ___ - __ - __'></input>
				<button className='inquiry__btn' type='button'>Отправить запрос</button>
			</div>
		</section>
	)
}

export default BoxPortfolio;