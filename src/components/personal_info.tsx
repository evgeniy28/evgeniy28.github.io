import {
  IconBrandGithub,
  IconBrandTelegram,
  IconCalendarEvent,
  IconMail,
} from '@tabler/icons'

import Avatar from 'components/avatar'

export default function PersonalInfo() {
  return (
    <aside className="top-40 flex flex-col items-center rounded-3xl bg-zinc-800 p-6 lg:sticky lg:w-72">
      <Avatar className="mb-4 lg:-mt-20 lg:mb-6" />

      <div className="space-y-6 text-sm">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-center text-2xl font-bold">Evgeniy Azarov</h1>
          <p className="rounded-full bg-zinc-900 py-1 px-4">
            Full Stack Software Engineer
          </p>
          <p>React + Elixir/Ruby</p>
          <a
            className="group transition-colors hover:text-green-500"
            href="https://github.com/evgeniy28"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandGithub
              stroke={1.5}
              className="group-hover:animate-swing"
            />
          </a>
        </div>

        <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 lg:block lg:space-y-2 lg:space-x-0">
          <div className="flex items-center space-x-2">
            <IconCalendarEvent stroke={1.5} />
            <span>April 28, 1991</span>
          </div>
          <a
            className="group flex items-center space-x-2 transition-colors hover:text-green-500 hover:underline"
            href="mailto:azarov.private+cv@gmail.com"
          >
            <IconMail stroke={1.5} className="group-hover:animate-swing" />
            <span>azarov.private+cv@gmail.com</span>
          </a>
          <a
            className="group flex items-center space-x-2 text-green-500 hover:underline"
            href="https://evgeniyazarov.t.me"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandTelegram
              stroke={1.5}
              className="group-hover:animate-swing"
            />
            <span>Send me a message</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
