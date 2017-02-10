import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/app/app';

describe('Test App', () => {
    it('should test App', () => {
        const wrapper = shallow(<App title="Test" />);
        expect(wrapper.contains('Test')).to.equal(true);
    });
});
