import Enzyme, { mount, shallow } from 'enzyme';
import { store, history } from 'store';
import React from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

import Pages from 'components/Pages';

function setup() {
  const props = {
    projects: [],
    projectActions: {
      createProject: () => { }
    }
  };

  return mount(
    <Provider store={store}>
      <StaticRouter location="someLocation" context={{}}>
        <Pages.SignUp />
      </StaticRouter>
    </Provider>
  );
}

describe('HomePage', () => {
  it('renders title', () => {
    const wrapper = setup();
    wrapper.find('h2').text()
  });
});

describe('Component: App', () => {
  it('should match its snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <StaticRouter location="someLocation" context={{}}>
          <Pages.SignUp />
        </StaticRouter>
      </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot();
  });
});
