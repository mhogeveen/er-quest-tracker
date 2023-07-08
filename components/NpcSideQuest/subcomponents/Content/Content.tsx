import { NpcSideQuestStep } from '@components'
import { Npc } from '@types'
import ReactMarkdown from 'react-markdown'
import styles from './Content.module.scss'

type ContentProps = Pick<Npc, 'failureConditions' | 'id' | 'rewards' | 'steps'>

export const Content = ({
  id,
  failureConditions,
  rewards,
  steps,
}: ContentProps) => {
  return (
    <>
      {!!failureConditions?.length ? (
        <>
          <h3>Failure conditions</h3>
          <ul className={styles.list}>
            {failureConditions.map((condition) => (
              <li key={condition}>
                <ReactMarkdown linkTarget="_blank">{condition}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {!!rewards?.length ? (
        <>
          <h3>Rewards</h3>
          <ul className={styles.list}>
            {rewards.map((reward) => (
              <li key={reward.id}>
                <a href={reward.link} target="_blank">{`${reward.name}`}</a>
                {!!reward.amount && ` - x${reward.amount}`}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {!!steps.length ? (
        <>
          <h3>Steps</h3>
          <div className={styles.steps}>
            {steps.map((step) => (
              <NpcSideQuestStep
                key={`${id}-${step.id}`}
                stepNumber={step.id}
                data={step}
                isOpenByDefault={false}
                npcId={id}
              />
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}
