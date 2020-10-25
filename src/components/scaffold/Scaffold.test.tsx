import React from 'react';
import { render } from '@testing-library/react';

import Scaffold from './Scaffold';

test("it has to render texts", () => {

    const { getByText } = render(<Scaffold />);
    expect(getByText("Squad Management Tool")).not.toBeNull();
    expect(getByText("John Doe")).not.toBeNull();
    expect(getByText("JD")).not.toBeNull();
    expect(getByText("2020 - All rights reserved.")).not.toBeNull();

})