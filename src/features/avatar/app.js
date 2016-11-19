import './app.css';

import React, { Component } from 'react';
import ProfileAvatar from './components/profile_avatar/component';
import AvatarList from './components/avatar_list/component';

const AVATARS = [
	{ "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
	{ "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
	{ "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
	{ "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
	{ "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
	{ "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			avatars: AVATARS,
			selectedAvatar: AVATARS[0],
			avatarListVisible: false
		}

		this.setNewActiveAvatar = this.setNewActiveAvatar.bind(this);
		this.toggleAvatarsListAnimation = this.toggleAvatarsListAnimation.bind(this);
		this.fadeOutAvatarListContainer = this.fadeOutAvatarListContainer.bind(this);
	}

	avatarListVisible() {
		const { avatarListVisible } = this.state;
		return avatarListVisible;
	}

	fadeOutAvatarListContainer() {
		this.setState({ avatarListVisible: false });
		this.avatarsContainerElement.classList.remove('avatar-app_list-container--fadeIn');
		this.avatarsContainerElement.classList.add('avatar-app_list-container--fadeOut');
	}

	fadeInAvatarListContainer() {
		this.setState({ avatarListVisible: true });
		this.avatarsContainerElement.classList.remove('avatar-app_list-container--fadeOut');
		this.avatarsContainerElement.classList.add('avatar-app_list-container--fadeIn');
	}

	toggleAvatarsListAnimation() {
		this.avatarListVisible() ? this.fadeOutAvatarListContainer() : this.fadeInAvatarListContainer();
	}

	setNewActiveAvatar(avatar) {
		this.setState({ selectedAvatar: avatar });
		this.fadeOutAvatarListContainer()
	}

	render() {
		return (
			<div className="avatar-app">
				<div className="avatar-app_close-list-shield" onClick={this.fadeOutAvatarListContainer}></div>
				<ProfileAvatar avatarSrc={this.state.selectedAvatar.src}
					onAvatarClick={this.toggleAvatarsListAnimation}
					active={this.state.avatarListVisible} />

				<div ref={el => this.avatarsContainerElement = el} className="avatar-app_list-container">
					<AvatarList avatars={this.state.avatars}
						selectedAvatar={this.state.selectedAvatar}
						onAvatarClick={this.setNewActiveAvatar} />
				</div>
			</div>
		);
	}
}

export default App;
