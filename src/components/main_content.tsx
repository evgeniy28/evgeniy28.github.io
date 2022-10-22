import {useState} from 'react'

import Resume from './resume'
import About from './about'
import Button from './button'
import Footer from './footer'

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<string>('resume')

  const isResume = activeTab === 'resume'
  const isAbout = activeTab === 'about'

  const renderTabPanel = () => {
    if (activeTab === 'resume') {
      return <Resume />
    }

    return <About />
  }

  return (
    <div className="flex-auto space-y-6">
      <div className="h-[1000px] rounded-3xl bg-zinc-800 p-6">
        <div className="mb-4 flex justify-end space-x-6">
          <Button isActive={isResume} onClick={() => setActiveTab('resume')}>
            Resume
          </Button>
          <Button isActive={isAbout} onClick={() => setActiveTab('about')}>
            About
          </Button>
        </div>

        {renderTabPanel()}
      </div>
      <Footer />
    </div>
  )
}
