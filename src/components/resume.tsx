import {IconBriefcase, IconSchool} from '@tabler/icons'

import Timeline from './timeline'

const experienceData = [
  {
    title: 'Frontend developer',
    text: '<b>Company:</b> <a class="text-green-500 hover:underline" target="_blank" href="https://idpowers.com/" rel="noreferrer noopener">idPowers</a>. <b>Tech stack:</b> Reactjs/Nextjs, Typescript, Mobx, React-Query, Tailwindcss. <br />Development auto loan <a class="text-green-500 hover:underline" target="_blank" href="https://idpowers.com/cases/vash-investor-lk/" rel="noreferrer noopener">platform</a>. Development betting platform.',
    period: '01.2021 - 05.2022',
  },
  {
    title: 'Backend developer',
    text: '<b>Company:</b> <a class="text-green-500 hover:underline" target="_blank" href="https://ecomcharge.com/" rel="noreferrer noopener">eComCharge UAB</a>. <b>Tech stack:</b> Ruby on Rails, PostgreSQL, ClickHouse, Elixir/Phoenix. <br />Add new integration with other payment gateway, add google pay feature, optimization performance api, bugs fix.',
    period: '11.2019 - 11.2020',
  },
  {
    title: 'Full Stack developer',
    text: '<b>Company:</b> <a class="text-green-500 hover:underline" target="_blank" href="https://chat2desk.com/en/" rel="noreferrer noopener">chat2desk.com</a>. <b>Tech stack:</b> Ruby on Rails with rails ecosystem, PostgreSQL, Reactjs, Redux, Redux-Saga, Elixir/Phoenix. <br />Add new feature, bugs fix, bundle size optimization.',
    period: '11.2018 - 11.2019',
  },
  {
    title: 'Full Stack developer',
    text: '<b>Company:</b> LLC "YesIT". <b>Tech stack:</b> PWA/SPA, Vuejs/Nuxtjs, Graphql, PostgreSQL, RethinkDB, RabbitMQ, Algolia search, Ruby on Rails with rails ecosystem, Elixir/Phoenix, Docker, Nginx. <br />Add new feature to CRM system in Ruby on Rails application. Development of PWA/SPA applications. Development omni channel platform on phoenix/elixir.',
    period: '07.2017 - 11.2018',
  },
  {
    title: 'Full Stack developer',
    text: '<b>Company:</b> freelance. <b>Tech stack:</b> Ruby on Rails, Rspec, Capybara, PostgreSQL, Sphinx, Coffeescript, Sass, Nginx. <br />Development of web applications on Ruby on Rails.',
    period: '07.2014-07.2017',
  },
  {
    title: 'Web developer',
    text: '<b>Company:</b> "Bizmotiv". <b>Tech stack:</b> HTML, CSS, Sass, Gulp, Javascript, jQuery. <br />Convert design template to responsive landing pages.',
    period: '06.2013 - 06.2014',
  },
]

const educationData = [
  {
    title: 'Belarusian National Technical University',
    text: 'Energy Process Automation and Control Engineer',
    period: '2009 - 2014',
  },
]

export default function Resume() {
  return (
    <>
      <h2 className="mb-6 inline-block bg-gradient-to-r from-green-400 to-sky-600 bg-clip-text text-4xl font-bold text-transparent">
        Resume
      </h2>

      <Timeline
        icon={<IconBriefcase stroke={1} size={30} className="text-green-500" />}
        title="Experience"
        data={experienceData}
      />
      <Timeline
        icon={<IconSchool stroke={1} size={30} className="text-green-500" />}
        title="Education"
        data={educationData}
      />
    </>
  )
}
