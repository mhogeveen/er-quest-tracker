'use client'

import { cva, cx } from 'cva'
import { ReactNode, SyntheticEvent } from 'react'

type AccordionClasses = {
  details?: string
  summary?: string
  content?: string
}

type AccordionProps = {
  classes?: AccordionClasses
  content?: ReactNode
  handleToggle?: (e: SyntheticEvent<HTMLDetailsElement>) => void
  isComplete?: boolean
  isOpen: boolean
  summary?: ReactNode
}

export const Accordion = ({
  classes,
  content,
  handleToggle,
  isComplete,
  isOpen,
  summary,
}: AccordionProps) => {
  return (
    <details
      open={isOpen}
      onToggle={handleToggle}
      className={cx(detailsStyles({ complete: isComplete }), classes?.details)}
    >
      <summary
        className={cx(
          ['list-none', 'cursor-pointer', 'outline-0'],
          classes?.summary
        )}
      >
        {summary}
      </summary>
      <div
        className={cx(
          [
            'pt-1',
            'mt-1',
            'border-t',
            'border-grey-200',
            'flex',
            'flex-col',
            'gap-1',
          ],
          classes?.content
        )}
      >
        {content}
      </div>
    </details>
  )
}

const detailsStyles = cva(
  [
    'border',
    'border-dashed',
    'border-grey-200',
    'rounded',
    'p-1',
    'transition-border-color',
    'bg-white',
    'outline-dashed',
    'outline-1',
    'outline-transparent',
    'outline-offset-0',
    'hover:border-grey-400',
    'focus-within:border-grey-400',
    'focus-within:outline-grey-400',
  ],
  {
    variants: {
      complete: {
        true: ['!border-solid', '!outline'],
      },
    },
  }
)
