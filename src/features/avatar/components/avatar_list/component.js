import React from 'react';
import './styles.css';
import AvatarListItem from '../avatar_list_item/component';

function getAvatarListItems(avatars, onAvatarClick, selectedAvatar) {
	return avatars.map(avatar => {
		return (
			<AvatarListItem key={avatar.id}
				avatar={avatar}
				onAvatarClick={onAvatarClick}
				selectedAvatar={selectedAvatar} />
		);
	});
}

function AvatarListComponent(props) {
	return (
		<div className="avatar-list">
			<div className="avatar-list_title">Choose your avatar</div>
			<ul className="avatar-list_elements">
				{getAvatarListItems(props.avatars, props.onAvatarClick, props.selectedAvatar)}
			</ul>
		</div>
	);
}

export default AvatarListComponent;
