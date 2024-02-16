import style from './TodoCard.module.scss'
import { type Todo } from '../../types'

interface Props extends Todo {
  onRemoveTodo: (id: number) => void
  handleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export const TodoCard: React.FC<Props> = ({
  id,
  completed,
  title,
  onRemoveTodo,
  handleCompleted
}) => {
  const handleOnCheked = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({ id, completed: e.target.checked })
  }
  return (
    <li className={style.container}>
      <input type="checkbox" onChange={handleOnCheked} checked={completed} />
      <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </label>
      <button
        onClick={() => {
          onRemoveTodo(id)
        }}
      >
        X
      </button>
    </li>
  )
}
