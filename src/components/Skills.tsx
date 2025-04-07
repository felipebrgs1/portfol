import { GlowCard } from './ui/GlowCard';
import { HighlightText } from './ui/HighlightText';

const skills = [
	{
		category: 'Frontend',
		items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
		color: 'primary'
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
		color: 'secondary'
	},
	{
		category: 'Ferramentas',
		items: ['Git', 'Docker', 'VS Code', 'Figma', 'Jest'],
		color: 'accent'
	}
];

export function Skills() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20">
			<div className="max-w-6xl w-full">
				<h2 className="text-4xl font-bold mb-12 text-center">
					Minhas <HighlightText variant="gradient" color="primary">Habilidades</HighlightText>
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{skills.map((skillGroup) => (
						<GlowCard 
							key={skillGroup.category}
							glowColor={`rgba(${
								skillGroup.color === 'primary' ? '99, 102, 241' :
								skillGroup.color === 'secondary' ? '168, 85, 247' :
								'236, 72, 153'
							}, 0.5)`}
						>
							<h3 className="text-2xl font-semibold mb-4">
								<HighlightText color={skillGroup.color as any}>
									{skillGroup.category}
								</HighlightText>
							</h3>
							<ul className="space-y-2">
								{skillGroup.items.map((skill) => (
									<li key={skill} className="flex items-center gap-2">
										<span className={`text-${
											skillGroup.color === 'primary' ? 'indigo' :
											skillGroup.color === 'secondary' ? 'purple' :
											'pink'
										}-500`}>•</span>
										{skill}
									</li>
								))}
							</ul>
						</GlowCard>
					))}
				</div>
			</div>
		</section>
	);
}
