import React from 'react';
import classNames from 'classnames';
import './SectionTitle.scss';

function SectionTitle(props) {
	return (
		<h2 className={classNames('section-title', props.className, 'fontGaramond')}>{props.children}
		</h2>
	)
}

export default SectionTitle;
