import style from './header.module.scss'
import { type FilterValue } from '../../types'
import { AddTodo } from '../AddTodo/AddTodo'
import { Filter } from '../Filter/Filter'
interface Props {
  addToList: (text: string) => void
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearComplete: () => void
  handleFilterChange: (filter: FilterValue) => void
}
export const Header: React.FC<Props> = ({
  addToList,
  filterSelected,
  onClearComplete,
  handleFilterChange,
  activeCount,
  completedCount
}) => {
  return (
    <header className={style.container}>
      <h1>Mis Tareas</h1>
      <AddTodo addToList={addToList} />
      {(activeCount > 0 || completedCount > 0) && (
        <Filter
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onFilterChange={handleFilterChange}
          onClearComplete={onClearComplete}
        />
      )}
    </header>
  )
}
