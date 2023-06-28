import styled, { css } from 'styled-components';

type CheckedProps = {
  checked: boolean;
};

export const Container = styled.button<CheckedProps>`
  width: 1.09rem;
  height: 1.09rem;
  border-radius: 0.545rem;
  border: solid 2px
    ${({ theme, checked }) => (checked ? theme['purple-dark'] : theme.blue)};
  background-color: ${({ theme, checked }) =>
    checked ? theme['purple-dark'] : 'transparent'};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    border-color: ${({ theme, checked }) =>
      checked ? theme.purple : theme['blue-dark']};
    background-color: ${({ theme, checked }) =>
      checked ? theme.purple : 'transparent'};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`;
