'use client'
import { CircleIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import styles from './Checkbox.module.scss'
import { MouseEvent } from 'react'
import clsx from 'clsx'

type CheckboxProps = {
  isChecked?: boolean
  number?: number
  onClick?: (state: boolean) => void
}

export const Checkbox = ({ isChecked, number, onClick }: CheckboxProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    onClick?.(!isChecked)
  }

  return (
    <button
      className={clsx(styles.checkbox, isChecked && styles.checked)}
      onClick={handleClick}
    >
      {isChecked ? (
        <CheckCircledIcon width={20} height={20} />
      ) : (
        <>
          <CircleIcon width={20} height={20} />
          {number ? <span className={styles.stepNumber}>{number}</span> : null}
        </>
      )}
    </button>
  )
}
