import { GlowCard } from './ui/GlowCard';
import { GlowButton } from './ui/GlowButton';
import { HighlightText } from './ui/HighlightText';

export function Contact() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20">
			<GlowCard className="max-w-2xl w-full" glowColor="rgba(99, 102, 241, 0.5)">
				<h2 className="text-4xl font-bold mb-8 text-center">
					Entre em <HighlightText variant="gradient" color="primary">Contato</HighlightText>
				</h2>
				<form className="space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
							Nome
						</label>
						<input
							type="text"
							id="name"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
							placeholder="Seu nome"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
							placeholder="seu@email.com"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
							Mensagem
						</label>
						<textarea
							id="message"
							rows={4}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
							placeholder="Sua mensagem..."
						/>
					</div>
					<div className="flex justify-center">
						<GlowButton variant="primary" size="lg">
							Enviar Mensagem
						</GlowButton>
					</div>
				</form>
				<div className="mt-8 text-center">
					<p className="text-gray-600">
						Ou entre em contato através do{' '}
						<HighlightText color="accent">LinkedIn</HighlightText>
					</p>
				</div>
			</GlowCard>
		</section>
	);
}
