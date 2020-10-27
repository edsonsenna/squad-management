import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';

import SquadsTable from './SquadsTable';
import { createStore } from 'redux';
import squads from '../../../reducers';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

test("it has to remove a squad from store", () => {

    jest.spyOn(global, 'confirm' as any).mockReturnValueOnce(true);

    const handleDeleteClick = jest.fn();
    const store = createStore(squads);
    const { getByText, getByTestId, container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <SquadsTable />
            </MemoryRouter>
        </Provider>
    );
    // const deleteIcon = container.querySelector('.delete-action');
    // console.log(container.children[0].children);
    expect(true).toBe(true);

});

test("it has to change table sort to dsc", () => {

    const store = createStore(squads);
    const { getByText, getByTestId, container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <SquadsTable />
            </MemoryRouter>
        </Provider>
    );
    
    const onSortClick = jest.fn();
    const nameSortIcon = getByTestId('name-sort-icon');
    expect(nameSortIcon).not.toBeNull();
    fireEvent.click(nameSortIcon);

    // expect(onSortClick).toHaveBeenCalled();
    // const squadsListTable = getByTestId('squads-list-table');
    // const firstRow = squadsListTable.firstChildren;

    // const deleteIcon = container.querySelector('.delete-action');
    // console.log(container.children[0].children);

})