import React from "react";
import PagePreview from "../../components/PagePreview/PagePreview";
import PagePreviewPicture from '../../images/mainImg/previewPortfoloiQuarters.png';
import AboutUsVideo from './AboutUsVideo/AboutUsVideo';
import Advice from "./Advice/Advice";
import Description from './Description/Description';
import WhatWeDo from "./WhatWeDo/WhatWeDo";

const description = 'Мы не просто дизайн-студия, мы - команда талантливых людей, обладающих тонким чутьем, вкусом и большим опытом во главе с опытным и творческим руководителем. '

const AboutUsPage = () => {
	return (
		<>
			<PagePreview className='page-preview__description' description={description} picture={PagePreviewPicture}></PagePreview>
			<AboutUsVideo></AboutUsVideo>
			<Description></Description>
			<Advice></Advice>
			<WhatWeDo></WhatWeDo>
		</>
	)
}

export default AboutUsPage;