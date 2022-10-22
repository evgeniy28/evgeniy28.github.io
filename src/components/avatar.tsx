interface AvatarProps {
  className?: string
}

export default function Avatar({className}: AvatarProps) {
  return (
    <div className={`${className} h-40 w-40 flex-none rounded-3xl`}>
      <img
        className="rounded-3xl"
        src="https://avatars.githubusercontent.com/u/7345847?v=4"
        alt="avatar"
      />
    </div>
  )
}
