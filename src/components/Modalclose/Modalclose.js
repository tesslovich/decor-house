import './Modalclose.scss';
import Close from '../../images/svg/modalClose.svg';

function Modalclose () {
	return (
		<button type='button' className='modal__close'>
			<img className='modal__close--img' src={Close}></img>
		</button>
	)
}

export default Modalclose;