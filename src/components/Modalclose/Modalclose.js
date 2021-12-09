import './Modalclose.scss';
import Close from '../../images/svg/modalClose.svg';
import eventBus from '../../helpers/eventBus';

function Modalclose() {
	const handleClick = () => {
		eventBus.dispatch('closeModal');
	}
	return (
		<button type='button' className='modal__close' onClick={handleClick}>
			<img className='modal__close--img' src={Close}></img>
		</button>
	)
}

export default Modalclose;