import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="grid h-6 place-items-center bg-grey-50">
      <Link
        href="https://github.com/mhogeveen/er-sidequest-tracker"
        target="_blank"
      >
        <GitHubLogoIcon
          width={30}
          height={30}
          className="fill-grey-300 transition-fill hover:fill-grey-900"
          color={undefined}
        />
      </Link>
    </footer>
  )
}
