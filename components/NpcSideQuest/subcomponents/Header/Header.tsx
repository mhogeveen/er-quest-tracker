'use client'

import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { Checkbox } from '@components/Checkbox/Checkbox'
import { Npc } from '@types'
import ReactMarkdown from 'react-markdown'
import styles from './Header.module.scss'
import { useNpcLocalStorage } from '@hooks/useLocalStorage'

type HeaderProps = Pick<Npc, 'description' | 'id' | 'link' | 'name' | 'image'>

export const Header = ({ description, id, image, link, name }: HeaderProps) => {
  const { localStorageValue, setLocalStorageTotal } = useNpcLocalStorage(id)

  return (
    <div className={styles.header}>
      <div className={styles.checkbox}>
        <Checkbox
          isChecked={!!localStorageValue?.total}
          onClick={setLocalStorageTotal}
        />
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
