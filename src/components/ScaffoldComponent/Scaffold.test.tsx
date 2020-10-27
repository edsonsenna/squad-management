import React from 'react';
import { render } from '@testing-library/react';

import Scaffold from './Scaffold';
import { MemoryRouter } from 'react-router-dom';

test("it has to render texts", () => {

    const { getByText } = render(
        <MemoryRouter>
            <Scaffold />
        </MemoryRouter>
    );
    expect(getByText("Squad Management Tool")).not.toBeNull();
    expect(getByText("John Doe")).not.toBeNull();
    expect(getByText("JD")).not.toBeNull();
    expect(getByText("2020 - All rights reserved.")).not.toBeNull();

})