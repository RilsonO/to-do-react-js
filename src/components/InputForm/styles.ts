import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: calc(1.6875rem * -1);

  input {
    flex: 1;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme['gray-500']};
    background: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme['gray-100']};
    padding: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }

    :focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    padding: 1rem;
    background: ${({ theme }) => theme['blue-dark']};
    color: ${({ theme }) => theme['gray-100']};
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['blue']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
