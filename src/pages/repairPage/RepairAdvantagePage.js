import React from "react";
import RepairAdvantage from './RepairAdvantage/RepairAdvantage';
import SuccessfulProjects from './SuccessfulProjects/SuccessfulProjects';
import PaymentOrder from './PaymentOrder/PaymentOrder';
import RepairTime from './RapairTime/RapairTime';
import Rates from './Rates/Rates';
import HowWeWork from './HowWeWork/HowWeWork';
import Guarantee from './Guarantee/Guarantee';
import InfoAboutWork from './InfoAboutWork/InfoAboutWork';


const RepairAdvantagePage = () => {
	return (
		<>
			<RepairAdvantage></RepairAdvantage>
			<SuccessfulProjects></SuccessfulProjects>
			<PaymentOrder></PaymentOrder>
			<RepairTime></RepairTime>
			<Rates></Rates>
			<HowWeWork></HowWeWork>
			<Guarantee></Guarantee>
			<InfoAboutWork></InfoAboutWork>
		</>
	)
}

export default RepairAdvantagePage;