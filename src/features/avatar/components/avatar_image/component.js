import React from 'react';
import './styles.css';

function AvatarImageComponent(props) {
	return <img className="avatar-image" src={'/images/' + props.avatarSrc} alt="avatar" />;
}

export default AvatarImageComponent;
