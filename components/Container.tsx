import { PropsWithChildren } from 'react'
import { cva } from 'cva'

type ContainerProps = PropsWithChildren<{
  gap?: boolean
}>

export const Container = ({ children, gap }: ContainerProps) => {
  return <div className={containerStyles({ gap })}>{children}</div>
}

const containerStyles = cva(
  ['w-full', 'max-w-[100ch]', 'my-0', 'mx-auto', 'px-2'],
  {
    variants: {
      gap: {
        true: ['flex', 'flex-col', 'gap-1'],
      },
    },
  }
)
