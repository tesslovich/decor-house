import PagePreview from "../../components/PagePreview/PagePreview";
import ArticlePrePicture from '../../images/mainImg/ArticlePrePicture.png';
import ArticleContent from "./ArticleContent/ArticleContent";

const ArticlePage = () => {
	return (
		<>
			<PagePreview picture={ArticlePrePicture}></PagePreview>
			<ArticleContent></ArticleContent>
		</>
	)
}

export default ArticlePage;