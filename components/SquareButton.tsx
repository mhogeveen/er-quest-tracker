import { cva, VariantProps } from 'cva'
import { PropsWithChildren } from 'react'

type SquareButtonProps = PropsWithChildren<
  VariantProps<typeof squareButtonStyles> & {
    onClick?: () => void
  }
>

export const SquareButton = ({
  active = false,
  children,
  onClick,
  variant,
}: SquareButtonProps) => (
  <button className={squareButtonStyles({ active, variant })} onClick={onClick}>
    {children}
  </button>
)

export const squareButtonStyles = cva(
  [
    'grid',
    'place-items-center',
    'w-[calc(var(--icon-size)-8px)]',
    'h-[calc(var(--icon-size)-8px)]',
    'm-[4px]',
    'rounded',
    'outline-2',
    'outline-transparent',
    'outline-offset-0',
    'p-0',
    'm-0',
    'bg-none',
    'cursor-pointer',
    'transition-button',
  ],
  {
    variants: {
      active: {
        true: [],
      },
      variant: {
        blue: [
          'hover:!bg-cyan-50',
          'active:!bg-cyan-50',
          'focus-visible:!bg-cyan-50',
          'active:!outline-cyan-100',
          'focus-visible:!outline-cyan-100',
        ],
        grey: [
          'hover:!bg-grey-100',
          'active:!bg-grey-100',
          'focus-visible:!bg-grey-100',
          'active:!outline-grey-200',
          'focus-visible:!outline-grey-200',
        ],
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: 'blue',
        class: ['!bg-cyan-50', '!outline-cyan-100'],
      },
    ],
  }
)
