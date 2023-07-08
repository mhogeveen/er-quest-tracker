'use client'
import { useState } from 'react'

export const useLayout = () => {
  const [showInstructions, setShowInstructions] = useState(false)

  return {
    showInstructions,
    setShowInstructions,
  }
}
