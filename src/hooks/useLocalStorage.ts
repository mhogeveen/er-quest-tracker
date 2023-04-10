import npcs from '@src/data'
import { NpcId, Step } from '@src/types'
import { useLocalStorage } from 'react-use'

type NpcProgress = {
  total: boolean
  [key: string]: boolean
}

const LOCAL_STORAGE_PREFIX = 'er-sidequest-tracker'

export const useNpcLocalStorage = (npcId: NpcId) => {
  const npc = npcs.find((npc) => npc.id === npcId)
  const initialState = npc?.steps.reduce(
    (acc: NpcProgress, curr: Step) => {
      acc[curr.id.toString()] = false
      return acc
    },
    { total: false }
  )

  const [value, setValue, remove] = useLocalStorage<NpcProgress>(
    `${LOCAL_STORAGE_PREFIX}-${npcId}`,
    initialState
  )

  const setLocalStorageStep = (stepId: number, state: boolean) => {
    const newValue = value
    const stepExists = npc?.steps.find((step) => step.id === stepId)

    if (!stepExists || !newValue || !(stepId.toString() in newValue)) return

    newValue[stepId.toString()] = state
    setValue(newValue)
  }

  const setLocalStorageTotal = (state: boolean) => {
    const newValue = value
    if (!newValue) return
    newValue.total = state
    setValue(newValue)
  }

  return {
    localStorageValue: value,
    setLocalStorageStep,
    setLocalStorageTotal,
    removeLocalStoreValue: remove,
  }
}
