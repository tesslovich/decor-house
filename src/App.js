import React, { useState } from 'react';
import './App.scss';
import './styles/common.scss';
import { BrowserRouter as Router, Switch, Route, Link, Routes, NavLink } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modalphone from './components/Modalphone/Modalphone';
import eventBus from './helpers/eventBus';
import Modalthanks from './components/Modalthanks/Modalthanks';
import RepairAdvantagePage from './pages/repairPage/RepairAdvantagePage';
import MainPage from './pages/mainpage';
import AboutUsPage from './pages/aboutUs/aboutUsPage';
import PortfolioLivingQuartersPage from './pages/PortfolioLivingQuarters/PortfolioLivingQuartersPage'
import ArticlesPage from './pages/Articles/ArticlesPage';
import ContacsPage from './pages/Contacs/ContacsPage';


function App() {
	const [showModal, setShowModal] = useState(false);
	eventBus.on('openMobileModal', () => {
		setShowModal(true);
	})
	eventBus.on('closeModal', () => {
		setShowModal(false);
		setShowModalThanks(false);
	})
	const [showModalThanks, setShowModalThanks] = useState(false);
	eventBus.on('openModalThanks', () => {
		setShowModalThanks(true);
	})
	return (
		<Router>
			<Header></Header>
			{showModal && <Modalphone></Modalphone>}
			{showModalThanks && <Modalthanks></Modalthanks>}
			<Routes>
				<Route exact path='/' element={<MainPage />} />
				<Route exact path='/RepairAdvantagePage' element={<RepairAdvantagePage />} />
				<Route exact path='/AboutUsPage' element={<AboutUsPage />} />
				<Route exact path='/PortfolioLivingQuartersPage' element={<PortfolioLivingQuartersPage />} />
				<Route exact path='/ArticlesPage' element={<ArticlesPage />} />
				<Route exact path='/ContacsPage' element={<ContacsPage />} />
			</Routes>
			<Footer></Footer>
		</Router>
	);
}

export default App;
