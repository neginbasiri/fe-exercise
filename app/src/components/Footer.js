import React from 'react';
import { Scroll } from '../common';

const Footer = () => {

	const onBackToTopClick = () => new Scroll();

	return (
		<div className="container footer">
			<div className="footer--text">Copyright 2018 Space Savvy</div>
			<div className="footer--link" onClick={onBackToTopClick}>Back to top</div>
		</div>
	);
};

export default Footer;
