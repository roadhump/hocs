import React from 'react';
import { mount } from 'enzyme';

import onMount from './../onMount';

describe('onMount()', () => {

    it('will call with props on componentDidMount', () => {

        const mountSpy = jest.fn();

        const Comp = onMount(mountSpy)('div');

        Comp.prototype.render = jest.fn(() => null);

        const el = mount(<Comp foo="bar" />);

        expect(mountSpy)
            .toHaveBeenCalledTimes(1);
        expect(mountSpy.mock.calls[0])
            .toEqual([{foo: 'bar'}]);
        expect(Comp.prototype.render.mock.timestamps[0])
            .toBeLessThan(mountSpy.mock.timestamps[0]);

    });

})