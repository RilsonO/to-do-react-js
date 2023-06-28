import { Trash } from 'phosphor-react';
import { Container, Title, TrashButton } from './styles';
import { Radio } from '../Radio';

type TaskProps = {
  title: string;
  done: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

export function Task({ title, done, onCheck, onDelete }: TaskProps) {
  return (
    <Container>
      <Radio checked={done} onClick={onCheck} />
      <Title done={done}>{title}</Title>

      <TrashButton onClick={onDelete}>
        <span>
          <Trash size={16} />
        </span>
      </TrashButton>
    </Container>
  );
}
