import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarList from './component';
import AVATARS from '../../common/avatars_list_mock';

describe('<AvatarList />', () => {
	it('renders element with `Choose your avatar` info text', () => {
		const wrapper = shallow(<AvatarList avatars={AVATARS} onAvatarClick={() => {}} selectedAvatar={AVATARS[0]} />);
		const infoElement = <div className="avatar-list_title">Choose your avatar</div>;
		expect(wrapper.contains(infoElement)).toEqual(true);
	});

	it('should render 6 avatar list elements', () => {
		const wrapper = mount(<AvatarList avatars={AVATARS} onAvatarClick={() => {}} selectedAvatar={AVATARS[0]} />);
		expect(wrapper.find('.avatar-list-item').length).toEqual(6);
	});
});
