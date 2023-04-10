import { CircleIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import styles from './Checkbox.module.scss'
import { useState, MouseEvent, useEffect } from 'react'

type CheckboxProps = {
  isChecked?: boolean
  onClick?: (state: boolean) => void
}

export const Checkbox = ({ isChecked = false, onClick }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClick?.(!checked)
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
