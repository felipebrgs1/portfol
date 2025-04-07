import { HighlightText } from './ui/HighlightText';

export function About() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20">
			<div className="max-w-4xl w-full">
				<h2 className="text-4xl font-bold mb-12 text-center">
					Sobre <HighlightText variant="gradient" color="secondary">Mim</HighlightText>
				</h2>
				<div className="flex flex-col items-center gap-12">
					<div className="space-y-6 text-center max-w-2xl">
						<p className="text-lg text-gray-600">
							Sou um desenvolvedor apaixonado por criar soluções tecnológicas inovadoras.
							Com experiência em <HighlightText color="primary">desenvolvimento web</HighlightText>, 
							busco sempre entregar produtos de alta qualidade e performance.
						</p>
						<p className="text-lg text-gray-600">
							Minha jornada na programação começou com <HighlightText color="accent">curiosidade</HighlightText> 
							e hoje se transformou em uma paixão por resolver problemas complexos através do código.
						</p>
					</div>
					<div className="w-full max-w-2xl">
						<h3 className="text-2xl font-semibold mb-6 text-center">
							<HighlightText variant="gradient" color="primary">Objetivos</HighlightText>
						</h3>
						<ul className="space-y-4 text-center">
							<li className="flex items-center justify-center gap-2">
								<span className="text-purple-500">•</span>
								Desenvolver soluções escaláveis
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-purple-500">•</span>
								Criar experiências únicas
							</li>
							<li className="flex items-center justify-center gap-2">
								<span className="text-purple-500">•</span>
								Aprender novas tecnologias
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
