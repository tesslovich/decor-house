import './Modalphone.scss';
import Modalclose from '../Modalclose/Modalclose';

function Modalphone () {
	return (
		<div className='modal-phone modal-phone__open'>
			<Modalclose />
			<h2 className='modal-phone__title'>Перезвоните мне</h2>
			<p className='modal-phone__text'>Наш менеджер перезвонит вам в течении 10 минут</p>
			<input type='tel' name='telephone' className='modal-phone__telephone' placeholder='+ 7 (___) ___ - __ - __'></input>
			<button className='button-submit' type='submit'>Отправить запрос</button>
		</div>
	)
}

export default Modalphone;