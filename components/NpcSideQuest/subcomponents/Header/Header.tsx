import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox } from '@components'
import { Npc } from '@types'
import ReactMarkdown from 'react-markdown'
import styles from './Header.module.scss'

type HeaderProps = Pick<Npc, 'description' | 'link' | 'name' | 'image'> & {
  isNpcComplete: boolean
  toggleNpcComplete: (state: boolean) => void
}

export const Header = ({
  description,
  image,
  isNpcComplete,
  link,
  name,
  toggleNpcComplete,
}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.checkbox}>
        <Checkbox isChecked={isNpcComplete} onClick={toggleNpcComplete} />
      </div>
      <Link href={link} target="_blank" className={styles.link}>
        <ExternalLinkIcon width={20} height={20} />
      </Link>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.description}>
        <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
      </div>
      {image?.alt && image?.src && (
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.src}
            fill
            fetchPriority="high"
            className={styles.image}
          />
        </div>
      )}
    </div>
  )
}
