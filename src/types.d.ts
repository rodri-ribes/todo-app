import { type TODO_FILTERS } from './consts'

export interface Todo {
    id: number
    title: string
    completed: boolean
}

export type ListOfTodo = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
