import styled from '@emotion/styled';

export const Child = styled('div')({
  backgroundColor: '#ddd',
});

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  [`> ${Child} + ${Child}`]: {
    marginTop: '1rem',
  },
});
