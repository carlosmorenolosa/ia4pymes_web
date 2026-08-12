import Image from "next/image"

interface BlogAuthorAvatarProps {
  className?: string
}

export function BlogAuthorAvatar({ className = "w-12 h-12" }: BlogAuthorAvatarProps) {
  return (
    <div className={`${className} bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 overflow-hidden relative border border-white/20 p-1.5 shrink-0`}>
      <Image
        src="/LOGO.png"
        alt="IA4PYMES Logo"
        width={48}
        height={48}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
