import './App.scss'
import { useState } from 'react'
import { Todos } from './components/Todos/Todos'
import { type FilterValue, type Todo } from './types'
import { Header } from './components/Header/Header'
import { TODO_FILTERS } from './consts'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )
  const addToList = (text: string): void => {
    setTodos((prev) => [
      ...prev,
      {
        id: todos.length < 1 ? 1 : prev[todos.length - 1]?.id + 1,
        title: text,
        completed: false
      }
    ])
  }

  const onRemoveTodo = (id: number): void => {
    const list = todos.filter((f) => f.id !== id)
    setTodos(list)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<Todo, 'id' | 'completed'>): void => {
    const list = todos.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          completed
        }
      }
      return t
    })
    setTodos(list)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const onClearComplete = (): void => {
    setTodos(todos.filter((t) => !t.completed))
  }

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((t) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !t.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return t.completed
    return t
  })
  return (
    <div className="app">
      <div className="app-container">
        <Header
          addToList={addToList}
          handleFilterChange={handleFilterChange}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearComplete={onClearComplete}
          filterSelected={filterSelected}
        />
        <Todos
          todos={filteredTodos}
          onRemoveTodo={onRemoveTodo}
          handleCompleted={handleCompleted}
        />
      </div>
    </div>
  )
}

export default App
