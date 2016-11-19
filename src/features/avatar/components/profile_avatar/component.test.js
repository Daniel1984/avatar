import React from 'react';
import { shallow } from 'enzyme';
import ProfileAvatar from './component';
import AvatarImage from '../avatar_image/component';
import sinon from 'sinon';

describe('<ProfileAvatar />', () => {
	it('renders one <AvatarImage /> components', () => {
		const wrapper = shallow(<ProfileAvatar active={true} onAvatarClick={() => {}} avatarSrc="some.png" />);
		expect(wrapper.find(AvatarImage).length).toEqual(1);
	});

	it('should not set `.profile-avatar--active` className if it\'s inactive avatar', () => {
		const wrapper = shallow(<ProfileAvatar active={false} onAvatarClick={() => {}} avatarSrc="some.png" />);
		expect(wrapper.find('.profile-avatar--active').length).toEqual(0);
	});

	it('should set `.profile-avatar--active` className if it\'s active avatar', () => {
		const wrapper = shallow(<ProfileAvatar active={true} onAvatarClick={() => {}} avatarSrc="some.png" />);
		expect(wrapper.find('.profile-avatar--active').length).toEqual(1);
	});

	it('should call a callback when clicked', () => {
		const onClick = sinon.spy();
		const wrapper = shallow(<ProfileAvatar active={false} onAvatarClick={onClick} avatarSrc="some.png" />);
		wrapper.simulate('click');
		expect(onClick.callCount).toEqual(1);
	});
});
