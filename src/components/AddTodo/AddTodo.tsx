import { useState } from 'react'
import style from './AddTodo.module.scss'

interface Props {
  addToList: (text: string) => void
}

export const AddTodo: React.FC<Props> = ({ addToList }) => {
  const [text, setText] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addToList(text)
    setText('')
  }

  return (
    <form
      onSubmit={(e) => {
        handleOnSubmit(e)
      }}
      className={style.container}
    >
      <input
        type="text"
        placeholder="¿Qué quieres hacer?"
        value={text}
        onChange={handleOnChange}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}
