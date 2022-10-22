interface ButtonProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function Button({isActive, onClick, children}: ButtonProps) {
  const isActiveClasses = isActive ? 'text-green-500' : 'hover:text-gray-400'

  return (
    <button
      className={`${isActiveClasses} text-lg transition-colors`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
