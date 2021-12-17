import './PaymentOrder.scss';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


function PaymentOrder() {
	return (
		<section className='payment-order'>
			<SectionTitle className='payment-order__title'>Порядок оплаты</SectionTitle>
			<div className='payment-order__wrapper'>
				<div className='payment-order__contract contract'>
					<p className='contract__description'>Грамотно составленный Договор на оказание даст Вам юридическую защищенность. Оплата производится поэтапно:</p>
					<div className='prepayment'>
						<p className='prepayment__procent'>35%</p>
						<p className='prepayment__text'>от общей суммы - предоплата</p>
					</div>
					<div className='prepayment'>
						<p className='prepayment__procent'>35%</p>
						<p className='prepayment__text'>от общей суммы - после завершения черновых работ</p>
					</div>
					<div className='prepayment'>
						<p className='prepayment__procent'>30%</p>
						<p className='prepayment__text'>от общей суммы - после ввода объекта в эскплуатацию</p>
					</div>
				</div>
				<div className='guarantees'>
					<p className='guarantees__description'>Мы выполняем свои обязанности качественно, точно в указанные сроки и строго по согласованной заранее цене. На объекте производится технический надзор специалистом. Наши прорабы не только контролируют весь рабочий процесс, но и принимают в нём активное участие. Мы делаем ремонт под "ключ" с установкой дверей, вывозом мусора и уборкой помещения. </p>
				</div>
			</div>
		</section >
	)
}

export default PaymentOrder;