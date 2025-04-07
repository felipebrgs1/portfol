export function Skills() {
	return (
		<section className="min-h-screen bg-gray-100 py-20">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="mb-12 text-center font-bold text-4xl">Habilidades</h2>
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{[
						"JavaScript",
						"React",
						"Node.js",
						"TypeScript",
						"Python",
						"SQL",
						"Git",
						"AWS",
					].map((skill) => (
						<div
							key={skill}
							className="rounded-lg bg-white p-6 text-center shadow-md"
						>
							<h3 className="font-semibold text-lg">{skill}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
