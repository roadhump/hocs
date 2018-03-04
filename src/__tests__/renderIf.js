import React from 'react';
import { mount } from 'enzyme';

import renderIf from './../renderIf';

describe('renderIf()', () => {
  it('will replace with component on condition', () => {
    const Comp = renderIf(({ foo }) => foo === 'bar', ({ foo }) => (<div id="replace" foo={foo} />))(({ foo }) => (<div id="real" foo={foo} />));

    expect(mount(<Comp foo="bar" />).html())
      .toBe('<div id="replace" foo="bar"></div>');

    expect(mount(<Comp foo="baz" />).html())
      .toBe('<div id="real" foo="baz"></div>');
  });
});
