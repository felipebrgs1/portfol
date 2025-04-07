
interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ]

  return (
    <nav className="fixed right-8 top-1/2 z-50 -translate-y-1/2 transform">
      <div className="flex flex-col gap-4">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`group relative h-4 w-4 rotate-45 transition-all ${
              activeSection === id
                ? 'bg-blue-600'
                : 'bg-white hover:bg-blue-100'
            }`}
            aria-label={label}
          >
            <span className="absolute right-2 top-1/2 -translate-y-1/2 -rotate-45 transform whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm text-gray-600 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
