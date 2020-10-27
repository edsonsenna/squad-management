import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';
import { createStore } from 'redux';
import squads from '../../reducers';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

test("it has to render texts", () => {

    const store = createStore(squads);
    const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        </Provider>
    );
    expect(getByText("My Teams")).not.toBeNull();

})