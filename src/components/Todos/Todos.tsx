import style from './Todos.module.scss'
import { type ListOfTodo, type Todo } from '../../types'
import { TodoCard } from '../TodoCard/TodoCard'

interface Props {
  todos: ListOfTodo
  onRemoveTodo: (id: number) => void
  handleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  handleCompleted
}) => {
  return (
    <ul className={style.container}>
      {todos.map((p) => (
        <TodoCard
          key={p.id}
          id={p.id}
          completed={p.completed}
          title={p.title}
          handleCompleted={handleCompleted}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  )
}
