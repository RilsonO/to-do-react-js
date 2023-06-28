import styled from 'styled-components';
interface TitleProps {
  variant: 'primary' | 'secondary';
}
export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.span<TitleProps>`
  color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.purple : theme.blue};
  font-weight: bold;
  font-size: 0.875rem;
`;

export const DescriptionContainer = styled.span`
  background-color: ${({ theme }) => theme['gray-400']};
  border-radius: 999px;
  padding: 2px 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['gray-200']};
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  vertical-align: center;
  border-width: 0;
`;
