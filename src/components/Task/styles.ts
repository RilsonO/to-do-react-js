import styled, { css } from 'styled-components';
type TaskProps = {
  done: boolean;
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 1rem;
  background-color: ${({ theme }) => theme['gray-500']};
  border-radius: 8px;
  gap: 0.75rem;
`;

export const Title = styled.span<TaskProps>`
  color: ${({ theme }) => theme['gray-100']};
  flex-grow: 1;
  font-size: 14px;
  line-height: 1.4;
  ${({ done, theme }) =>
    done &&
    css`
      text-decoration: line-through;
      color: ${theme['gray-300']};
    `}
`;

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-width: 0;
  padding: 0.375rem;
  border-radius: 4px;

  span {
    color: ${({ theme }) => theme['gray-300']};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    background-color: ${({ theme }) => theme['gray-400']};
    span {
      color: ${({ theme }) => theme.danger};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
