import React from 'react';
import {act, cleanup, render, screen, waitForElement} from '@oracle-cx-commerce/test/component/custom-render';
import {createMockStore} from '@oracle-cx-commerce/test/component/create-mock-store';
import {preloadComponents} from '@oracle-cx-commerce/commerce-utils/react';
import Widget from '@oracle-cx-commerce/react-components/widget';

export const MktpLogin = () => import('../index');

describe('MktpLogin renders correctly and shows after changing visible state', () => {
  const comps = {MktpLogin};

  beforeAll(async () => {
    await preloadComponents(comps);
  });

  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  it('MktpLogin works as expected', async done => {
    const state = {
      pageRepository: {
        widgets: {
          MktpLogin: {
            id: 'MktpLogin',
            componentId: 'MktpLogin',
            baseComponentText: 'Base',
            loginText: 'Login'
          }
        }
      }
    };

    const mockStore = createMockStore(state);

    render(<Widget widgetId="MktpLogin" />, mockStore, comps);

    await waitForElement(() => screen.getByText(/Login/));

    done();
  });

  it('MktpLogin without correct configuration', async done => {
    const state = {
      pageRepository: {
        widgets: {
          MktpLogin: {
            id: 'MktpLogin',
            componentId: 'MktpLogin',
            baseComponentText: 'Test'
          }
        }
      }
    };

    const mockStore = createMockStore(state);

    render(<Widget widgetId="MktpLogin" />, mockStore, comps);

    await expect(waitForElement(() => screen.getByText(/Base/))).rejects.toBeInstanceOf(Error);

    done();
  });
});
