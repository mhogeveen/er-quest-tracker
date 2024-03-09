'use client'

import {
  HomeIcon,
  HamburgerMenuIcon,
  QuestionMarkIcon,
} from '@radix-ui/react-icons'
import { Container } from '@components/Container'
import Link from 'next/link'
import { cva } from 'cva'
import npcs from '@data'
import { useState, MouseEvent } from 'react'
import { useLayout } from '@context/LayoutContext'
import { SquareButton, squareButtonStyles } from './SquareButton'

export const Header = () => {
  const { showInstructions, toggleInstructions } = useLayout()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen((prev) => !prev)

  const handleDropdownClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleNav()
    }
  }

  return (
    <>
      <header className="relative z-50 flex h-6 items-center border-b border-b-grey-200">
        <Container>
          <div className="grid grid-cols-[1fr_repeat(3,var(--icon-size))] items-center">
            <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-[1.5em] sm:text-[2em]">
              E<span className="hidden sm:inline">lden </span>R
              <span className="hidden sm:inline">ing</span> Quest Tracker
            </h1>
            <Link
              href="/"
              className={squareButtonStyles({ variant: 'grey' })}
              onClick={() => setIsNavOpen(false)}
            >
              <HomeIcon width={20} height={20} />
            </Link>
            <SquareButton
              variant="blue"
              active={showInstructions}
              onClick={toggleInstructions}
            >
              <QuestionMarkIcon width={20} height={20} />
            </SquareButton>
            <SquareButton variant="grey" onClick={toggleNav}>
              <HamburgerMenuIcon width={20} height={20} />
            </SquareButton>
          </div>
        </Container>

        <div
          className={dropdownStyles({ active: isNavOpen })}
          onClick={handleDropdownClick}
        >
          <nav className="border-b border-b-grey-200 bg-white py-2">
            <Container>
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {npcs.map(({ id, name }) => (
                  <li key={id}>
                    <Link href={id} onClick={toggleNav}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </nav>
        </div>
      </header>
    </>
  )
}

const dropdownStyles = cva(
  [
    'absolute',
    'top-6',
    'left-0',
    'w-full',
    'h-[calc(100vh - 48px)]',
    'invisible',
    'opacity-0',
    'transition-opacity',
    'transition-visibility',
  ],
  {
    variants: {
      active: {
        true: ['!visible', '!opacity-100'],
      },
    },
  }
)
