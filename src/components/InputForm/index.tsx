import { PlusCircle } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToDo } from '../../hooks/useToDo';
import { v4 as uuid } from 'uuid';

const inputFormSchema = z.object({
  task: z.string().min(1),
});

type InputFormType = z.infer<typeof inputFormSchema>;

export function InputForm() {
  const { createNewTask } = useToDo();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<InputFormType>({
    resolver: zodResolver(inputFormSchema),
  });

  async function handleCreateNewTask(data: InputFormType) {
    createNewTask({
      id: uuid(),
      title: data.task,
      done: false,
    });
    reset();
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        {...register('task')}
      />

      <button type='submit' disabled={isSubmitting}>
        Criar
        <PlusCircle size={16} />
      </button>
    </SearchFormContainer>
  );
}
