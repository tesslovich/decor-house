import './Modalphone.scss';
import Modalclose from '../Modalclose/Modalclose';
import eventBus from '../../helpers/eventBus';
import Modalthanks from '../Modalthanks/Modalthanks';

function Modalphone() {
	const handleClick = () => {
		eventBus.dispatch('closeModal')
		eventBus.dispatch('openModalThanks');
	}
	return (
		<div className='modal-phone modal-phone__open'>
			<Modalclose />
			<h2 className='modal-phone__title'>Перезвоните мне</h2>
			<p className='modal-phone__text'>Наш менеджер перезвонит вам в течении 10 минут</p>
			<input type='tel' name='telephone' className='modal-phone__telephone' placeholder='+ 7 (___) ___ - __ - __'></input>
			<button className='button-submit' type='submit' onClick={handleClick}>Отправить запрос</button>
		</div>
	)
}

export default Modalphone;