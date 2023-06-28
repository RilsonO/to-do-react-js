import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { SummaryInfo } from '../../components/SummaryInfo';
import { Task } from '../../components/Task';
import { useToDo } from '../../hooks/useToDo';
import ClipboardSVG from '../../assets/clipboard.svg';
import {
  Main,
  SummaryContainer,
  TasksContainer,
  EmptyContainer,
  Clipboard,
  EmptyTitle,
  EmptySubtitle,
} from './styles';

export function Home() {
  const { tasks, toggleTaskDone, deleteTask, countCompletedTasks } = useToDo();

  return (
    <div>
      <Header />
      <Main>
        <InputForm />

        <SummaryContainer>
          <SummaryInfo
            variant='primary'
            title='Tarefas criadas'
            description={String(tasks.length)}
          />
          <SummaryInfo
            title='Concluídas'
            description={`${countCompletedTasks()} de ${String(tasks.length)}`}
            variant='secondary'
          />
        </SummaryContainer>

        {tasks.length > 0 ? (
          <TasksContainer>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  {...task}
                  onCheck={() => toggleTaskDone(task.id)}
                  onDelete={() => deleteTask(task.id)}
                />
              );
            })}
          </TasksContainer>
        ) : (
          <EmptyContainer>
            <Clipboard src={ClipboardSVG} />
            <EmptyTitle>Você ainda não tem tarefas cadastradas</EmptyTitle>
            <EmptySubtitle>
              Crie tarefas e organize seus itens a fazer
            </EmptySubtitle>
          </EmptyContainer>
        )}
      </Main>
    </div>
  );
}
