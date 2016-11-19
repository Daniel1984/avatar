import React from 'react';
import AvatarImage from '../avatar_image/component';
import './styles.css';

function makeFakeServerCall(event, callback, avatar, selectedAvatar) {
	if (avatar.id === selectedAvatar.id) {
		return;
	}

	const elementClassList = event.target.classList;
	elementClassList.add('avatar-list-item--loading');

	const timeoutRef = setTimeout(() => {
		clearTimeout(timeoutRef);
		elementClassList.remove('avatar-list-item--loading');
		callback(avatar);
	}, 1000);
}

function getListItemClassName(avatar, selectedAvatar) {
	return `avatar-list-item ${avatar.id === selectedAvatar.id ? 'avatar-list-item--active' : ''}`;
}

function AvatarListItemComponent(props) {
	return (
		<li className={getListItemClassName(props.avatar, props.selectedAvatar)}
				onClick={event => makeFakeServerCall(event, props.onAvatarClick, props.avatar, props.selectedAvatar)}>
			<AvatarImage avatarSrc={props.avatar.src} />
		</li>
	);
}

export default AvatarListItemComponent;
