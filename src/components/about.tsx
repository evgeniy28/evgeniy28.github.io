export default function About() {
  return (
    <>
      <h2 className="mb-6 inline-block bg-gradient-to-r from-green-400 to-sky-600 bg-clip-text text-4xl font-bold text-transparent">
        About me
      </h2>
      <div className="space-y-3">
        <p>Hi, I'm Evgeniy Azarov.</p>
        <p>
          I'm a Full Stack Developer and am passionate about using technology to
          solve real world problems. Lately I've been developing frontend
          applications, but in my free time I also write code in Elixir with
          Phoenix framework.
        </p>
        <p>
          I don't have large open source projects, only forks for patches. But
          you can see my elixir code{' '}
          <a
            className="text-green-500 hover:underline"
            href="https://github.com/templatefordev/review_server"
            target="_blank"
            rel="noreferrer noopener"
          >
            here (Review microservice from old project)
          </a>{' '}
          and{' '}
          <a
            className="text-green-500 hover:underline"
            href="https://github.com/templatefordev/dry_ext"
            target="_blank"
            rel="noreferrer noopener"
          >
            here (Elixir package with helper functions)
          </a>
          .
        </p>
      </div>
    </>
  )
}
