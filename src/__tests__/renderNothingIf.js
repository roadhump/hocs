import React from 'react';
import {mount} from 'enzyme';

import renderNothingIf from './../renderNothingIf';

describe('renderNothingIf', () => {

    it('will render null on condition', () => {

        const Comp = renderNothingIf(({foo}) => foo === 'bar')('div');

        expect(mount(<Comp foo="bar" />).html())
            .toBe(null);

        expect(mount(<Comp foo="xbar" />).html())
            .toBe('<div foo="xbar"></div>');

    });

});