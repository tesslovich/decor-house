import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './ArticlesList.scss';
import { data } from './DataArticlesList';

function ArticlesList() {
	return (
		<section className='articles'>
			<div className='article__cards'>
				{data.map((item, index) => {
					return (
						<div className='article__card' key={index}>
							<img className='article__card-picture' src={item.picture} alt='Картинка о статье'></img>
							<h3 className='article__card-title fontGaramond'>{item.title}</h3>
							<p className='article__card-description'>{item.description}</p>
							<NavLink to='/ArticlePage'>
								<a href='#' className='article__card-link'>Подробнее</a>
							</NavLink>
						</div>

					)
				})}
			</div>
			<div className='articles__buttons'>
				<Button>Предыдущий страница</Button>
				<Button>Следующий страница</Button>
			</div>
		</section>
	)
}

export default ArticlesList;