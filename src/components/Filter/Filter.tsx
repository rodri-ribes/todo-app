import style from './Filter.module.scss'
import { FILTER_BUTTONS } from '../../consts'
import { type FilterValue } from '../../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
  activeCount: number
  completedCount: number
  onClearComplete: () => void
}

export const Filter: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
  activeCount,
  completedCount,
  onClearComplete
}) => {
  return (
    <div className={style.container}>
      <div className={style.container__information}>
        <p>
          Activos: <b>{activeCount}</b>
        </p>
        <p>
          Completados: <b>{completedCount}</b>
        </p>
      </div>
      <ul className={style.container__list}>
        {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const styleSelected = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                href={href}
                className={styleSelected}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })}
      </ul>
      {completedCount > 0 && (
        <button onClick={onClearComplete}>Eliminar Completados</button>
      )}
    </div>
  )
}
