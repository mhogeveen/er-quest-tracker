import { CircleIcon, CheckCircledIcon } from '@radix-ui/react-icons'
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
      {checked ? (
        <CheckCircledIcon width={20} height={20} />
      ) : (
        <CircleIcon width={20} height={20} />
      )}
    </button>
  )
}
