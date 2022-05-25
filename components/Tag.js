import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 rounded-full bg-main px-3 py-0.5 text-sm font-medium uppercase text-white hover:bg-lime-600 dark:hover:bg-lime-600 ">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
