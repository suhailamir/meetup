import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppBar from '../../app/components/MenuAppBar';

configure({ adapter: new Adapter() });

describe('AppBar Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AppBar />);
    });

    it('should exist', () => {
        expect(wrapper).toBeTruthy();
    });
});