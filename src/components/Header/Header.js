import React from 'react';
import './Header.scss';
import logo from '../../images/icon/logoIcon.svg'
import { ReactComponent as PhoneIcon } from '../../images/icon/phoneIcon.svg';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<img className='header__logo' src={logo}></img>
				<nav className='header__main-nav main-nav'>
					<ul className='main-nav__list'>
						<li className='main-nav__item'>
							<NavLink className='main-nav__item-link' to='/serv' >Услуги</NavLink>
						</li>
						<li className='main-nav__item'>
							<NavLink className='main-nav__item-link' to='/RepairAdvantagePage'>Ремонт</NavLink>
						</li>
						<li className='main-nav__item'>
							<NavLink className='main-nav__item-link' to='/PortfolioLivingQuartersPage'>Портфолио</NavLink>
						</li>
						<li className='main-nav__item'>
							<NavLink className='main-nav__item-link' to='/AboutUsPage'>О нас</NavLink>
						</li>
						<li className='main-nav__item'>
							<NavLink className='main-nav__item-link' to='/ArticlesPage'>Статьи</NavLink>
						</li>
						<li className='main-nav__item'>
							<NavLink className='main-nav__item-link' to='/ContacsPage'>Контакты</NavLink>
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