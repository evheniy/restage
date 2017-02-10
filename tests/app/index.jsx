import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/app/index';

describe('Test app', () => {
    it('should test app', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<h1>Test</h1>)).to.equal(true);
    });
});
