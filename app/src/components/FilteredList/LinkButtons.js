import React from 'react';

const findButtonText = link => {
	let buttonText = '';
	switch (link) {
		case 'reddit_campaign':
			buttonText = 'Reddit Campaign';
			break;
		case 'reddit_launch':
			buttonText = 'Reddit Launch';
			break;
		case 'reddit_recovery':
			buttonText = 'Reddit Recovery';
			break;
		case 'reddit_media':
			buttonText = 'Reddit Media';
			break;
		case 'presskit':
			buttonText = 'Press';
			break;
		case 'article_link':
			buttonText = 'Article';
			break;
		case 'video_link':
			buttonText = 'Watch Video';
			break;
		default:
			buttonText = '';
	}

	return buttonText;
};

const LinkButtons = ({ links }) => {
	return Object.keys(links).map((link, key) => {
		if (link === 'mission_patch') return null;

		return (
			<a className="button button--link" key={key} href={links[link]}>
				{findButtonText(link)}
			</a>
		);
	});
};

export default LinkButtons;
