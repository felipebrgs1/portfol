export function Hero() {
	return (
		<section className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
			<div className="space-y-6 text-center">
				<h1 className="font-bold text-6xl">Felipe Borgaço</h1>
				<p className="text-2xl">Desenvolvedor Full Stack Jr</p>
				<button
					type="button"
					onClick={() => window.scrollTo({
						top: document.getElementById('about')?.offsetTop || 0,
						behavior: 'smooth'
					})}
					className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-all hover:bg-opacity-90"
				>
					Conheça meu trabalho
				</button>
			</div>
		</section>
	);
}
