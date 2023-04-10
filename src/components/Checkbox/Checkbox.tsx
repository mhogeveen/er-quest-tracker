import { CircleIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import styles from './Checkbox.module.scss'
import { MouseEvent } from 'react'

type CheckboxProps = {
  isChecked?: boolean
  onClick?: (state: boolean) => void
}

export const Checkbox = ({ isChecked, onClick }: CheckboxProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    onClick?.(!isChecked)
  }

  return (
    <button className={styles.checkbox} onClick={handleClick}>
      {isChecked ? (
        <CheckCircledIcon width={20} height={20} />
      ) : (
        <CircleIcon width={20} height={20} />
      )}
    </button>
  )
}
