'use client'
import { CircleIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import styles from './Checkbox.module.scss'
import { MouseEvent } from 'react'
import { cx } from 'cva'

type CheckboxProps = {
  className?: string
  isChecked?: boolean
  number?: number
  onClick?: (state: boolean) => void
}

export const Checkbox = ({
  className,
  isChecked,
  number,
  onClick,
}: CheckboxProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    onClick?.(!isChecked)
  }

  return (
    <button
      className={cx(styles.checkbox, isChecked && styles.checked, className)}
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
