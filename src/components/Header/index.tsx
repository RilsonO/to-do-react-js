import { Container, Logo } from './styles';
import LogoSVG from '../../assets/Logo.svg';

export function Header() {
  return (
    <Container>
      <Logo src={LogoSVG} />
    </Container>
  );
}
