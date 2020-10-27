import React from 'react';
import { render } from '@testing-library/react';

import MostLessPickedCard from './MostLessPickedCard';
import { createStore } from 'redux';
import squads from '../../../reducers';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

test("it has to render both most and less picked player", () => {

    const store = createStore(squads);
    const { getByText, getByTestId } = render(
        <Provider store={store}>
            <MemoryRouter>
                <MostLessPickedCard />
            </MemoryRouter>
        </Provider>
    );
    expect(getByText("Most picked player")).not.toBeNull();
    const mostPickedPercentage = getByTestId('most-picked-percentage');
    expect(mostPickedPercentage.textContent).toBe('88%');
    const mostPickedInitials = getByTestId('most-picked-initials');
    expect(mostPickedInitials.textContent).toBe('JJ');

    expect(getByText("Less picked player")).not.toBeNull();
    const lessPickedPercentage = getByTestId('less-picked-percentage');
    expect(lessPickedPercentage.textContent).toBe('13%');
    const lessPickedInitials = getByTestId('less-picked-initials');
    expect(lessPickedInitials.textContent).toBe('CR');

})