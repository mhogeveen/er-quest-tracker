import { PropsWithChildren } from 'react'
import styles from './Container.module.scss'
import clsx from 'clsx'

type ContainerProps = PropsWithChildren<{
  gap?: boolean
}>

export const Container = ({ children, gap }: ContainerProps) => {
  return (
    <div className={clsx(styles.container, gap && styles.gap)}>{children}</div>
  )
}
