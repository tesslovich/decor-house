import PagePreview from "../../components/PagePreview/PagePreview";
import PrePhotoContact from '../../images/mainImg/PrePhotoContact.png';
import ForPartners from "./ForPartners/ForPartners";
import InstaBox from "./InstaBox/InstaBox";
import OurSocial from "./OurSocial/OurSocial";

const description = 'Если вы хотите узнать о ценах, об услугах, получить ответы на другие вопросы или договориться о встрече — заполните контактную форму или выберите удобный для вас способ связи.'

const ContacsPage = () => {
	return (
		<>
			<PagePreview className='page-preview__contact' description={description} picture={PrePhotoContact}></PagePreview>
			<InstaBox></InstaBox>
			<ForPartners></ForPartners>
			<OurSocial></OurSocial>
		</>
	)
}

export default ContacsPage;