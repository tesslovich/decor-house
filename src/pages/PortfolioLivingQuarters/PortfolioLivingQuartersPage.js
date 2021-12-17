import react from "react";
import PreviewPortfolioQuarters from "./previewPortfolioQuarters/previewPortfolioQuarters";
import OurWorks from './OurWorks/OurWorks';
import BoxPortfolio from '../../components/BoxPortfolio/BoxPortfolio';

const PortfolioLivingQuartersPage = () => {
	return (
		<>
			<PreviewPortfolioQuarters></PreviewPortfolioQuarters>
			<OurWorks></OurWorks>
			<BoxPortfolio></BoxPortfolio>
		</>
	)
}

export default PortfolioLivingQuartersPage;