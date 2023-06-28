import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  background-color: ${({ theme }) => theme['gray-700']};
`;

export const Logo = styled.img`
  width: 7.875rem;
  height: 3rem;
  margin-top: 72px;
`;
