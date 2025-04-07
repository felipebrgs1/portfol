export function Projects() {
	return (
		<section className="mx-auto min-h-screen max-w-6xl px-4 py-20">
			<h2 className="mb-12 text-center font-bold text-4xl">Projetos</h2>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{[1, 2, 3].map((project) => (
					<div
						key={project}
						className="overflow-hidden rounded-lg bg-white shadow-md"
					>
						<div className="flex h-48 items-center justify-center bg-gray-200">
							<span className="text-gray-500">Preview do Projeto</span>
						</div>
						<div className="p-6">
							<h3 className="mb-2 font-bold text-xl">Nome do Projeto</h3>
							<p className="mb-4 text-gray-600">
								Descrição breve do projeto e tecnologias utilizadas.
							</p>
							<div className="flex gap-4">
								<a href="/demo" className="text-blue-600 hover:underline">
									Demo
								</a>
								<a href="/github" className="text-blue-600 hover:underline">
									GitHub
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
