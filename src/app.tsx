import PersonalInfo from 'components/personal_info'
import MainContent from 'components/main_content'

const App = () => {
  return (
    <div className="container mx-auto flex flex-col space-y-6 px-4 py-6 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-6 lg:pt-40">
      <PersonalInfo />
      <MainContent />
    </div>
  )
}

export default App
