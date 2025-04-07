import { HighlightText } from './ui/HighlightText';
import { GlowButton } from './ui/GlowButton';
export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-4xl w-full text-center rounded-lg p-6">
				<h1 className="text-5xl md:text-7xl font-bold mb-6">
					Olá, eu sou <HighlightText variant="gradient" color="accent">Felipe</HighlightText>
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-gray-600">
					Um <HighlightText color="primary">Desenvolvedor Full Stack</HighlightText> apaixonado por criar
					experiências web incríveis e <HighlightText color="secondary">soluções inovadoras</HighlightText>
				</p>
				<div className="flex gap-4 justify-center">
					<GlowButton variant="primary" size="lg">
						Ver Projetos
					</GlowButton>
					<GlowButton variant="secondary" size="lg">
						Contato
					</GlowButton>
				</div>
			</div>
		</section>
	);
}
