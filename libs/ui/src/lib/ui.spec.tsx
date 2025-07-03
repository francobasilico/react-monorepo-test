import { render } from '@testing-library/react';

import XpsUi from './ui';

describe('XpsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<XpsUi />);
    expect(baseElement).toBeTruthy();
  });
});
