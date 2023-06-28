import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const EmptyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: solid 1px ${({ theme }) => theme['gray-400']};
  padding-top: 4rem;
`;

export const Clipboard = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 1rem;
`;

export const EmptyTitle = styled.span`
  color: ${({ theme }) => theme['gray-300']};
  font-size: 1rem;
  line-height: 1.4;
  font-weight: bold;
`;

export const EmptySubtitle = styled.span`
  color: ${({ theme }) => theme['gray-300']};
  font-size: 1rem;
  line-height: 1.4;
`;
