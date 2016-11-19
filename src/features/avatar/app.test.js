import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './app';
import ReactTestUtils from 'react-addons-test-utils'
import ProfileAvatar from './components/profile_avatar/component';
import AvatarList from './components/avatar_list/component';
import sinon from 'sinon';
import AVATARS from './common/avatars_list_mock';

describe('<App />', () => {
	it('renders one <ProfileAvatar /> components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(ProfileAvatar).length).toEqual(1);
	});

	it('renders one <AvatarList /> components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(AvatarList).length).toEqual(1);
	});

	it('renders as `.icon-star` className node', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.avatar-app').length).toEqual(1);
	});

	it('sould have a click shield that closes avatar selector when clicked on', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.avatar-app_close-list-shield').length).toEqual(1);
	});

	it('should close avatar selector when clicked on click shield', () => {
		const wrapper = mount(<App />);
		wrapper.setState({ avatarListVisible: true });
		wrapper.find('.avatar-app_close-list-shield').simulate('click');
		expect(wrapper.state().avatarListVisible).toEqual(false);
	});

	it('should have selectedAvatar set by default as first avatar from list', () => {
		const wrapper = mount(<App />);
		expect(wrapper.state().selectedAvatar).toEqual(AVATARS[0]);
	});

	it('should have avatars set in state', () => {
		const wrapper = mount(<App />);
		expect(wrapper.state().avatars).toEqual(AVATARS);
	});

	it('should have avatars list inactive by default', () => {
		const wrapper = mount(<App />);
		expect(wrapper.state().avatarListVisible).toEqual(false);
	});

	it('shoul allow user to change avatar', () => {
		const wrapper = ReactTestUtils.renderIntoDocument(<App />);
		wrapper.setNewActiveAvatar(AVATARS[3]);
		expect(wrapper.state.selectedAvatar).toEqual(AVATARS[3]);
	});

	it('should fadeout avatar list when changing avatar', () => {
		const wrapper = ReactTestUtils.renderIntoDocument(<App />);
		sinon.stub(wrapper, 'fadeOutAvatarListContainer');
		wrapper.setNewActiveAvatar(AVATARS[3]);
		expect(wrapper.fadeOutAvatarListContainer.callCount).toEqual(1)
		wrapper.fadeOutAvatarListContainer.restore();
	});

	it('should be able to toggle avatar list visibility', () => {
		const wrapper = ReactTestUtils.renderIntoDocument(<App />);
		wrapper.toggleAvatarsListAnimation();
		expect(wrapper.state.avatarListVisible).toEqual(true);
	});
});
