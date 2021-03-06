import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import AboutUsPicture from '../../../images/gallery/aboutUsImg.png';
import Button from '../../../components/Button/Button';
import SliderDecorImg from '../../../images/svg/sliderDecorText.svg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


import './AboutUs.scss';

function AboutUs() {
	const NextArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className='leftarrow'
				onClick={onClick}
			/>
		);
	}
	const PrevArrow = (props) => {
		const { className, onClick } = props;
		return (
			<div
				className='rightarrow'
				onClick={onClick}
			/>
		);
	}
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};

	return (
		<section className='aboutus'>
			<SectionTitle className='aboutus__title'>Лучшие решения, актуальный<br /> дизайн, непревзойденное качество<br /> — все это о нашей студии</SectionTitle>
			<div className='aboutus__wrapper'>
				<Slider {...settings}>
					<div>
						<div className='aboutus-slider__wrapper'>
							<div className='aboutus-description__picture'>
								<img className='aboutus-description__img' src={AboutUsPicture} alt='Картинка слайдера' width='550' height='608'></img>
							</div>
							<div className='aboutus-description__wrapper'>
								<p className='aboutus-description__text'>С 2011 года было нами было разработано уже множество успешных проектов. Мы проектируем подробные проекты дизайна интерьеров помещений любой сложности и не боимся сложных задач.
									Дизайн-проект может включать в себя перепланировку, рабочие чертежи, 3D-визуализацию, а также дополнителнительные услуги: авторский надзор, подбор материалов, смету и другое на Ваше личное усмотрение.
									<br />
									<br />
									Мы работаем с помещениями любого типа и назначения: квартиры, коттедж, загородный дом, кафе или ресторан, офис, гостиница или бизнес-центр, бутик и многое другое.
									<br />
									<br />
									Мы не упустим ни один квадратный сантиметр, учтем все Ваши пожелания, добавим свои свежие идеи, познакомим с секретами интерьерных решений, скоординируем в ремонте и поможем создать в Вашем помещении утонченную роскошь!
								</p>
								<div className='aboutus-description__advantage advantage'>
									<div className='advantage__wrapper advantage__age'>
										<span className='advantage__age--text-one'>Более</span>
										<span className='advantage__age--text-two'>10</span>
										<span className='advantage__age--text-thri'>лет<br /> на рынке</span>
									</div>
									<div className='advantage__successful-projects'>
										<span className='advantage__successful-projects--text-one'>Более</span>
										<span className='advantage__successful-projects--text-two'>200</span>
										<span className='advantage__successful-projects--text-thri'>успешных проектов</span>
									</div>
									<div className='advantage__positive-reviews'>
										<span className='advantage__positive-reviews--text-one'>Более</span>
										<span className='advantage__positive-reviews--text-two'>300</span>
										<span className='advantage__positive-reviews--text-thri'>положительных отзывов</span>
									</div>
									<div className='slider__decor-text'>
										<span className='slider__decor-span fontGwendolyn'>Мы создаем прекрасное!</span>
										<img className='slider__decor-img' src={SliderDecorImg}></img>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='aboutus-slider__wrapper'>
							<div className='aboutus-description__picture'>
								<img className='aboutus-description__img' src={AboutUsPicture} alt='Картинка слайдера' width='550' height='608'></img>
							</div>
							<div className='aboutus-description__wrapper'>
								<p className='aboutus-description__text'>С 2011 года было нами было разработано уже множество успешных проектов. Мы проектируем подробные проекты дизайна интерьеров помещений любой сложности и не боимся сложных задач.
									Дизайн-проект может включать в себя перепланировку, рабочие чертежи, 3D-визуализацию, а также дополнителнительные услуги: авторский надзор, подбор материалов, смету и другое на Ваше личное усмотрение.
									<br />
									<br />
									Мы работаем с помещениями любого типа и назначения: квартиры, коттедж, загородный дом, кафе или ресторан, офис, гостиница или бизнес-центр, бутик и многое другое.
									<br />
									<br />
									Мы не упустим ни один квадратный сантиметр, учтем все Ваши пожелания, добавим свои свежие идеи, познакомим с секретами интерьерных решений, скоординируем в ремонте и поможем создать в Вашем помещении утонченную роскошь!
								</p>
								<div className='aboutus-description__advantage advantage'>
									<div className='advantage__wrapper advantage__age'>
										<span className='advantage__age--text-one'>Более</span>
										<span className='advantage__age--text-two'>10</span>
										<span className='advantage__age--text-thri'>лет<br /> на рынке</span>
									</div>
									<div className='advantage__successful-projects'>
										<span className='advantage__successful-projects--text-one'>Более</span>
										<span className='advantage__successful-projects--text-two'>200</span>
										<span className='advantage__successful-projects--text-thri'>успешных проектов</span>
									</div>
									<div className='advantage__positive-reviews'>
										<span className='advantage__positive-reviews--text-one'>Более</span>
										<span className='advantage__positive-reviews--text-two'>300</span>
										<span className='advantage__positive-reviews--text-thri'>положительных отзывов</span>
									</div>
									<div className='slider__decor-text'>
										<span className='slider__decor-span fontCorinthia'>Мы создаем прекрасное!</span>
										<img className='slider__decor-img' src={SliderDecorImg}></img>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='aboutus-slider__wrapper'>
							<div className='aboutus-description__picture'>
								<img className='aboutus-description__img' src={AboutUsPicture} alt='Картинка слайдера' width='550' height='608'></img>
							</div>
							<div className='aboutus-description__wrapper'>
								<p className='aboutus-description__text'>С 2011 года было нами было разработано уже множество успешных проектов. Мы проектируем подробные проекты дизайна интерьеров помещений любой сложности и не боимся сложных задач.
									Дизайн-проект может включать в себя перепланировку, рабочие чертежи, 3D-визуализацию, а также дополнителнительные услуги: авторский надзор, подбор материалов, смету и другое на Ваше личное усмотрение.
									<br />
									<br />
									Мы работаем с помещениями любого типа и назначения: квартиры, коттедж, загородный дом, кафе или ресторан, офис, гостиница или бизнес-центр, бутик и многое другое.
									<br />
									<br />
									Мы не упустим ни один квадратный сантиметр, учтем все Ваши пожелания, добавим свои свежие идеи, познакомим с секретами интерьерных решений, скоординируем в ремонте и поможем создать в Вашем помещении утонченную роскошь!
								</p>
								<div className='aboutus-description__advantage advantage'>
									<div className='advantage__wrapper advantage__age'>
										<span className='advantage__age--text-one'>Более</span>
										<span className='advantage__age--text-two'>10</span>
										<span className='advantage__age--text-thri'>лет<br /> на рынке</span>
									</div>
									<div className='advantage__successful-projects'>
										<span className='advantage__successful-projects--text-one'>Более</span>
										<span className='advantage__successful-projects--text-two'>200</span>
										<span className='advantage__successful-projects--text-thri'>успешных проектов</span>
									</div>
									<div className='advantage__positive-reviews'>
										<span className='advantage__positive-reviews--text-one'>Более</span>
										<span className='advantage__positive-reviews--text-two'>300</span>
										<span className='advantage__positive-reviews--text-thri'>положительных отзывов</span>
									</div>
									<div className='slider__decor-text'>
										<span className='slider__decor-span fontCorinthia'>Мы создаем прекрасное!</span>
										<img className='slider__decor-img' src={SliderDecorImg}></img>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Slider>
				<div className='aboutus__buttons'>
					<Button className='aboutus__button--first' to='/AboutUsPage'>О нас</Button>
					<Button>Наши услуги</Button>
				</div>
			</div>
		</section>
	)
}

export default AboutUs;