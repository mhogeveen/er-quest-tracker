import { IconCircle, IconCircleCheck } from '@tabler/icons-react'
import styles from './Checkbox.module.scss'
import { useState, MouseEvent } from 'react'

type CheckboxProps = {
  isChecked?: boolean
  onClick?: () => void
}

export const Checkbox = ({ isChecked = false, onClick }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClick?.()
    setChecked((prev) => !prev)
  }

  return (
    <button className={styles.checkbox} onClick={handleClick}>
      {checked ? <IconCircleCheck size={20} /> : <IconCircle size={20} />}
    </button>
  )
}
