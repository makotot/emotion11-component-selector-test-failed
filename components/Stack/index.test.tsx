import React from 'react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import * as Stack from '.';

expect.extend(matchers);

describe('Stack', () => {
  test('Stack.Child + Stack.Child should have margin-top: 1rem.', () => {
    const tree = renderer
      .create(
        <Stack.Container>
          <Stack.Child>child</Stack.Child>
          <Stack.Child>child</Stack.Child>
        </Stack.Container>,
      )
      .toJSON();

    expect(tree).toHaveStyleRule('margin-top', '1rem', {
      target: `${Stack.Child} + ${Stack.Child}`,
    });
  });
});
