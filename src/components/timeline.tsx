import {ReactNode} from 'react'
import {IconCalendarMinus} from '@tabler/icons'

interface TimelineItem {
  title: string
  text: string
  period: string
}

interface TimelineProps {
  icon: ReactNode
  title: string
  data: TimelineItem[]
}

export default function Timeline({icon, data, title}: TimelineProps) {
  const timelines = data.map(({title, text, period}, i) => {
    return (
      <div key={i} className="mb-10 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-600 ring-8 ring-zinc-800">
          <IconCalendarMinus stroke={1.5} size={12} />
        </span>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <time className="mb-2 block text-sm font-normal leading-none text-gray-500">
          {period}
        </time>
        <p
          className="text-base font-normal text-gray-400"
          dangerouslySetInnerHTML={{__html: text}}
        />
      </div>
    )
  })

  return (
    <>
      <div className="mb-4 flex items-center space-x-2">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="relative ml-3 border-l border-gray-600">{timelines}</div>
    </>
  )
}
