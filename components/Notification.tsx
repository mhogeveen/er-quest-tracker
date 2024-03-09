'use client'

import { Cross1Icon } from '@radix-ui/react-icons'
import ReactMarkdown from 'react-markdown'
import { useLayout } from '@context/LayoutContext'
import { SquareButton } from '@components/SquareButton'

type NotificationProps = {
  content: string
  title: string
}

export const Notification = ({ content, title }: NotificationProps) => {
  const { showInstructions, toggleInstructions } = useLayout()

  return showInstructions ? (
    <div className="grid grid-cols-[1fr_var(--icon-size)] rounded border border-cyan-200 bg-cyan-50 p-1">
      <h2 className="self-center text-2xl font-bold">{title}</h2>
      <SquareButton variant="blue" onClick={toggleInstructions}>
        <Cross1Icon width={20} height={20} />
      </SquareButton>
      <ReactMarkdown className="col-span-full">{content}</ReactMarkdown>
    </div>
  ) : null
}
