'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react'

type LayoutContextProps = {
  showInstructions: boolean
  toggleInstructions: () => void
}

const LayoutContext = createContext<LayoutContextProps>({
  showInstructions: false,
  toggleInstructions: () => undefined,
})

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [showInstructions, setShowInstructions] = useState(false)

  const toggleInstructions = () => setShowInstructions((prev) => !prev)

  return (
    <LayoutContext.Provider value={{ showInstructions, toggleInstructions }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)
