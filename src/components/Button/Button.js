import React from 'react';
import classNames from 'classnames';
import './Button.scss';


function Button(props) {
	return (
		<a className={classNames('button__link', props.className, 'fontGaramond')}>{props.children}
		</a>
	)
}


export default Button;