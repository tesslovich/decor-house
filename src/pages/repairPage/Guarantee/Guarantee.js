import React from 'react';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import SliderPicture from '../../../images/guarantee/guaranteeSliderPictOne.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import './Guarantee.scss';


function Guarantee() {
	const NextArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className='guarantee-leftarrow'
				onClick={onClick}
			/>
		);
	}
	const PrevArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className='guarantee-rightarrow'
				onClick={onClick}
			/>
		);
	}
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		dotsClass: 'guarantee__dots',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};

	return (
		<section className='guarantee'>
			<SectionTitle className='guarantee__title'>Мы предоставляем гарантию 1 год на свои услуги, -<br /> гарантийное, а также постгарантийное обслуживание.</SectionTitle>
			<Slider {...settings}>
				<div >
					<div className='guarantee-slider__wrapper'>
						<img className='guarantee-slider__img' src={SliderPicture} alt='картинка слайдера'></img>
					</div>
				</div>
				<div >
					<div className='guarantee-slider__wrapper'>
						<img className='guarantee-slider__img' src={SliderPicture} alt='картинка слайдера'></img>
					</div>
				</div>
				<div >
					<div className='guarantee-slider__wrapper'>
						<img className='guarantee-slider__img' src={SliderPicture} alt='картинка слайдера'></img>
					</div>
				</div>
				<div >
					<div className='guarantee-slider__wrapper'>
						<img className='guarantee-slider__img' src={SliderPicture} alt='картинка слайдера'></img>
					</div>
				</div>
				<div >
					<div className='guarantee-slider__wrapper'>
						<img className='guarantee-slider__img' src={SliderPicture} alt='картинка слайдера'></img>
					</div>
				</div>
			</Slider>
		</section>
	)
}

export default Guarantee;