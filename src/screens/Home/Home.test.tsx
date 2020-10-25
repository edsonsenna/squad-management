import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

test("it has to render texts", () => {

    const { getByText } = render(<Home />);
    expect(getByText("My Teams")).not.toBeNull();

})