import { GlowCard } from './ui/GlowCard';
import { GlowButton } from './ui/GlowButton';
import { HighlightText } from './ui/HighlightText';

const projects = [
	{
		title: 'E-commerce Platform',
		description: 'Uma plataforma completa de e-commerce com React, Node.js e PostgreSQL',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
		color: 'primary'
	},
	{
		title: 'Task Manager',
		description: 'Aplicativo de gerenciamento de tarefas com autenticação e real-time updates',
		technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
		color: 'secondary'
	},
	{
		title: 'Portfolio Website',
		description: 'Site pessoal desenvolvido com React e Tailwind CSS',
		technologies: ['React', 'Tailwind CSS', 'TypeScript'],
		color: 'accent'
	}
];

export function Projects() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20">
			<div className="max-w-6xl w-full">
				<h2 className="text-4xl font-bold mb-12 text-center">
					Meus <HighlightText variant="gradient" color="primary">Projetos</HighlightText>
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<GlowCard
							key={project.title}
							glowColor={`rgba(${
								project.color === 'primary' ? '99, 102, 241' :
								project.color === 'secondary' ? '168, 85, 247' :
								'236, 72, 153'
							}, 0.5)`}
						>
							<h3 className="text-2xl font-semibold mb-4">
								<HighlightText color={project.color as any}>
									{project.title}
								</HighlightText>
							</h3>
							<p className="text-gray-600 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2 mb-6">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className={`px-3 py-1 rounded-full text-sm ${
											project.color === 'primary' ? 'bg-indigo-100 text-indigo-600' :
											project.color === 'secondary' ? 'bg-purple-100 text-purple-600' :
											'bg-pink-100 text-pink-600'
										}`}
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<GlowButton variant={project.color as any} size="sm">
									Ver Projeto
								</GlowButton>
								<GlowButton variant={project.color as any} size="sm">
									Código Fonte
								</GlowButton>
							</div>
						</GlowCard>
					))}
				</div>
			</div>
		</section>
	);
}
