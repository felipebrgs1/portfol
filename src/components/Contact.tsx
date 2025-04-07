export function Contact() {
	return (
		<section className="min-h-screen bg-slate-50 py-20">
			<div className="mx-auto max-w-4xl px-4 text-center">
				<h2 className="mb-12 font-bold text-4xl">Vamos Conversar</h2>
				<p className="mb-8 text-gray-600 text-lg">
					Estou sempre aberto a novas oportunidades e colaborações
					interessantes.
				</p>
				<div className="flex justify-center gap-6">
					<a
						href="mailto:felipeborgaco@hotmail.com"
						className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all hover:opacity-90"
					>
						Email
					</a>
					<a
						href="https://www.linkedin.com/in/felipeborgaco"
						className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all hover:opacity-90"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/felipebrgs1"
						className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all hover:opacity-90"
					>
						GitHub
					</a>
				</div>
				</div>
		</section>
	);
}
