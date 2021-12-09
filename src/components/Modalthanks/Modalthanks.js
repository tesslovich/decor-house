import './Modalthanks.scss';
import ModalClose from '../Modalclose/Modalclose';


function Modalthanks() {
	return (
		<div className='modal-thanks'>
			<ModalClose />
			<h2 className='modal-thanks__title'>Спасибо что оставили заявку!</h2>
			<p className='modal-thanks__text'>А пока вы ждете звонок, можете просмотреть наши лучшие проекты!</p>
			<p className='modal-thanks__beatiful fontGwendolyn'>Мы создаем прекрасное!</p>
		</div>
	)
}

export default Modalthanks;