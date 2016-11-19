import React from 'react';
import { shallow } from 'enzyme';
import ImageComponent from './component';

describe('<ImageComponent />', () => {
	it('renders image element', () => {
		const wrapper = shallow(<ImageComponent avatarSrc="someAvatar.png"/>);
		const imgElement = <img className="avatar-image" src="/images/someAvatar.png" alt="avatar" />;
		expect(wrapper.contains(imgElement)).toEqual(true);
	});
});
