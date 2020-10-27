import React from 'react';
import { render } from '@testing-library/react';

import TopFiveCard from './TopFiveCard';
import { createStore } from 'redux';
import squads from '../../../reducers';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

test("it has to render both high a low avg age list", () => {

    const store = createStore(squads);
    const { getByText, getByTestId } = render(
        <Provider store={store}>
            <MemoryRouter>
                <TopFiveCard />
            </MemoryRouter>
        </Provider>
    );
    expect(getByText("Highest avg age")).not.toBeNull();
    const highestList = getByTestId('highest-age-list');
    expect(highestList.children).toHaveLength(5);

    expect(getByText("Lowest avg age")).not.toBeNull();
    const lowestList = getByTestId('lowest-age-list');
    expect(lowestList.children).toHaveLength(5);

})