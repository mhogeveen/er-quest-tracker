import { useEffect, useRef } from 'react'
import npcs from '@src/data'

type NpcProgress = {
  [key: string]: {
    [key: number]: boolean
  }
}

const LOCAL_STORAGE_KEY = 'er-npc-quest-progress'

export const useLocalStorage = () => {
  const localStorageData = useRef<NpcProgress>()

  useEffect(() => {
    const progressFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!progressFromLocalStorage) {
      localStorageData.current = generateEmptyProgressObject()
    } else {
      localStorageData.current = JSON.parse(progressFromLocalStorage)
    }

    return () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData))
    }
  }, [localStorageData])

  const generateEmptyProgressObject = () => {
    const tempObj: NpcProgress = {}

    npcs.forEach((npc) => {
      tempObj[npc.id] = {}

      npc.steps.forEach((step) => {
        tempObj[npc.id][step.id] = false
      })
    })

    return tempObj
  }

  return {}
}
