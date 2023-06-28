import { Check } from 'phosphor-react';
import { Container } from './styles';
import { defaultTheme } from '../../styles/themes/default';

type RadioProps = {
  checked: boolean;
  onClick: () => void;
};

export function Radio({ checked, onClick }: RadioProps) {
  return (
    <Container checked={checked} onClick={onClick}>
      {checked && (
        <span>
          <Check weight='bold' color={defaultTheme['gray-100']} size={15} />
        </span>
      )}
    </Container>
  );
}
