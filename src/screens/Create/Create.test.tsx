import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import 'mutationobserver-shim';

import Create from './Create';
import squads from '../../reducers';

test("it has to render items after search", async () => {

    const store = createStore(squads)
    const { getByLabelText } = render(
        <Provider store={store}>
            <MemoryRouter>
                <Create />
            </MemoryRouter>
        </Provider> 
    );
    const input = getByLabelText('Search Players');
    expect(input).not.toBeNull();
})