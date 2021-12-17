import './PagePreview.scss';


function PagePreview(props) {
	const {picture, title, subtitle, description, className} = props
	return (
		<section className='page-preview'>
			<img className='page-preview__picture'src={picture}></img>
			{title && (<h2 className={className}>{title}</h2>)}
			{subtitle && (<p className={className}>{subtitle}</p>)}
			{description && (<p className={className}>{description}</p>)}
		</section>
	)
}

export default PagePreview;