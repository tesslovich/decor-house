import react from 'react';
import PagePreview from '../../components/PagePreview/PagePreview';
import ArticlesPrePicture from '../../images/mainImg/articlesPrePicture.png';
import ArticlesList from './ArticlesList/ArticlesList';

const description = 'Давайте мы поможем разобраться в огромном разнообразии стилей в оформлении интерьеров. Мы расскажем об эклектичных стилях, которые часто граничат между двумя или даже несколькими стилями, порою даже между противоположными!'

const ArticlesPage = () => {
	return (
		<>
			<PagePreview className='page-preview__articles' description={description} picture={ArticlesPrePicture}></PagePreview>
			<ArticlesList></ArticlesList>
		</>
	)
}

export default ArticlesPage;