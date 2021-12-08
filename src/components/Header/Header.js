import React from 'react';
import './Header.scss';
import logo from '../../images/icon/logoIcon.svg'
import { ReactComponent as PhoneIcon } from '../../images/icon/phoneIcon.svg';


function Header() {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<img className='header__logo' src={logo}></img>
				<nav className='header__main-nav main-nav'>
					<ul className='main-nav__list'>
						<li className='main-nav__item'>
							<a className='main-nav__item-link' href='#'>Услуги</a>
						</li>
						<li className='main-nav__item'>
							<a className='main-nav__item-link' href='#'>Ремонт</a>
						</li>
						<li className='main-nav__item'>
							<a className='main-nav__item-link' href='#'>Портфолио</a>
						</li>
						<li className='main-nav__item'>
							<a className='main-nav__item-link' href='#'>О нас</a>
						</li>
						<li className='main-nav__item'>
							<a className='main-nav__item-link' href='#'>Статьи</a>
						</li>
						<li className='main-nav__item'>
							<a className='main-nav__item-link' href='#'>Контакты</a>
						</li>
					</ul>
				</nav>
				<span className='header__contact-tel'>
					<PhoneIcon className='contact-tel__icon' />
					8 (700) 300-03-40
				</span>
			</div>
		</header>
	)
}

export default Header;