import React from 'react';
import { shallow } from 'enzyme';
import AvatarListItem from './component';
import AvatarImage from '../avatar_image/component';
import AVATARS from '../../common/avatars_list_mock'

describe('<AvatarListItem />', () => {
	it('renders one <AvatarImage /> components', () => {
		const wrapper = shallow(<AvatarListItem avatar={AVATARS[0]} onAvatarClick={() => {}} selectedAvatar={AVATARS[0]} />);
		expect(wrapper.find(AvatarImage).length).toEqual(1);
	});

	it('should not set `.avatar-list-item--active` className if avatar is not selected', () => {
		const wrapper = shallow(<AvatarListItem avatar={AVATARS[0]} onAvatarClick={() => {}} selectedAvatar={AVATARS[1]} />);
		expect(wrapper.find('.avatar-list-item--active').length).toEqual(0);
	});

	it('should set `.avatar-list-item--active` className if avatar is selected', () => {
		const wrapper = shallow(<AvatarListItem avatar={AVATARS[0]} onAvatarClick={() => {}} selectedAvatar={AVATARS[0]} />);
		expect(wrapper.find('.avatar-list-item--active').length).toEqual(1);
	});

	it('should not set `.avatar-list-item--loading` className on element if user clicking active avatar', () => {
		const wrapper = shallow(<AvatarListItem avatar={AVATARS[0]} onAvatarClick={() => {}} selectedAvatar={AVATARS[0]} />);
		wrapper.simulate('click');
		expect(wrapper.find('.avatar-list-item--loading').length).toEqual(0);
	});
});
