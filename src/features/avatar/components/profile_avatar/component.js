import React from 'react';
import AvatarImage from '../avatar_image/component';
import './styles.css';

function getProfileAvatarClassName(isActive) {
	return `profile-avatar ${isActive ? 'profile-avatar--active' : ''}`;
}

function ProfileAvatarComponent(props) {
	const {active, onAvatarClick, avatarSrc} = props;

	return (
		<div className={getProfileAvatarClassName(active)} onClick={onAvatarClick}>
			<AvatarImage avatarSrc={avatarSrc} />
		</div>
	);
}

export default ProfileAvatarComponent;
