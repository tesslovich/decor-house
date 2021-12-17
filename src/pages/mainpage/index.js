import React from "react";
import Production from './Production/Production';
import Project from './Project/Project';
import AboutUs from './AboutUs/AboutUs';
import PreliminaryInformation from './PreliminaryInformation/PreliminaryInformation';
import Desing from './Desing/Desing';
import UsefulInfo from './UsefulInfo/UsefulInfo';
import RepairInfo from './RepairInfo/RepairInfo';
import Partners from './Partners/Partners';

const MainPage = () => {
	return (
		<>
			<Production></Production>
			<Project></Project>
			<AboutUs></AboutUs>
			<PreliminaryInformation></PreliminaryInformation>
			<Desing></Desing>
			<UsefulInfo></UsefulInfo>
			<RepairInfo></RepairInfo>
			<Partners></Partners>
		</>
	)
}

export default MainPage;