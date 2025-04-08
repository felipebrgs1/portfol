import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Hero } from '@components/Hero'
import { About } from '@components/About'
import { Skills } from '@components/Skills'
import { Projects } from '@components/Projects'
import { Contact } from '@components/Contact'
import { Navigation } from '@components/Navigation'
import { Footer } from '@components/Footer'

export const Route = createFileRoute('/')({
	component: App,
})

function App() {
	const [activeSection, setActiveSection] = useState('hero')
	const sections = ['hero', 'about', 'skills', 'projects', 'contact']
	const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const windowHeight = window.innerHeight

			sections.forEach((section) => {
				const element = sectionRefs.current[section]
				if (element) {
					const offsetTop = element.offsetTop
					const offsetHeight = element.offsetHeight

					if (
						scrollPosition >= offsetTop - windowHeight / 2 &&
						scrollPosition < offsetTop + offsetHeight - windowHeight / 2
					) {
						setActiveSection(section)
					}
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const element = sectionRefs.current[sectionId]
		if (element) {
			const offsetTop = element.offsetTop
			const windowHeight = window.innerHeight
			const elementHeight = element.offsetHeight
			const scrollTo = offsetTop - windowHeight / 2 + elementHeight / 2
			window.scrollTo({
				top: scrollTo,
				behavior: 'smooth',
			})
			setActiveSection(sectionId)
		}
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Navigation
				activeSection={activeSection}
				onSectionChange={scrollToSection}
			/>

			<div
				ref={(el) => {
					sectionRefs.current['hero'] = el
				}}
			>
				<Hero onSectionChange={scrollToSection} />
			</div>

			<div
				ref={(el) => {
					sectionRefs.current['about'] = el
				}}
			>
				<About />
			</div>

			<div
				ref={(el) => {
					sectionRefs.current['skills'] = el
				}}
			>
				<Skills />
			</div>

			<div
				ref={(el) => {
					sectionRefs.current['projects'] = el
				}}
			>
				<Projects />
			</div>

			<div
				ref={(el) => {
					sectionRefs.current['contact'] = el
				}}
			>
				<Contact />
			</div>

			<Footer />
		</div>
	)
}
