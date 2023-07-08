import { NpcId } from '@types'
import useLocalStorageState from 'use-local-storage-state'

type NpcProgress = {
  [key: string]: boolean
}

const LOCAL_STORAGE_PREFIX = 'er-quest-tracker'

export const useNpcLocalStorage = (npcId: NpcId) => {
  const [value, setValue] = useLocalStorageState<NpcProgress>(
    `${LOCAL_STORAGE_PREFIX}-${npcId}`,
    { defaultValue: {} }
  )

  const setLocalStorageStep = (stepId: string, state: boolean) => {
    setValue((oldValue) => ({ ...oldValue, [stepId]: state }))
  }

  const setLocalStorageTotal = (state: boolean) => {
    setValue((oldValue) => ({ ...oldValue, total: state }))
  }

  return {
    localStorageValue: value,
    setLocalStorageStep,
    setLocalStorageTotal,
  }
}
