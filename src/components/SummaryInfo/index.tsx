import { Container, DescriptionContainer, Title } from './styles';

interface SummaryInfoProps {
  title: string;
  description: string;
  variant: 'primary' | 'secondary';
}

export function SummaryInfo({
  title,
  description = '0',
  variant = 'primary',
}: SummaryInfoProps) {
  return (
    <Container>
      <Title variant={variant}>{title}</Title>

      <DescriptionContainer>{description}</DescriptionContainer>
    </Container>
  );
}
