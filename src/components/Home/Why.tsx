import { card, clock, ladrao, smile } from "../../icons/WhyCard"

export default function Why() {
	return (
		<div className="Why mt-20 flex justify-center ">
			<div className="w-[85vw] max-w-[1150px]">
				<h1 className="text-5xl font-bold">Porque escolher a Hyperium?</h1>
				<h2 className="font-medium mt-5">
					Somos uma hospedagem que sempre preza pela qualidade, custo benefício e satisfação total de nossos clientes.
					Temos diversos benefícios exclusivos para você ;)
				</h2>
				<div className="flex mt-10 flex-wrap justify-around gap-3 mb-20 ">
					<WhyCard
						icon={clock}
						title="Tempo de ativação"
						subTitle="Nosso prazo para ativação de serviços é de 5 minutos!"
					/>
					<WhyCard icon={card} title="Sobre o reembolso" subTitle="Prazo de 7 dias para a solicitação do reembolso!" />
					<WhyCard icon={smile} title="Suporte ao cliente" subTitle="Nosso suporte está disponível 24/7 para você" />
					<WhyCard icon={ladrao} title="Proteção de dados" subTitle="Seus dados são criptografados com segurança!" />
				</div>
			</div>
		</div>
	)
}

type WhyCardProps = {
	icon: any
	title: string
	subTitle: string
}

export function WhyCard(props: WhyCardProps) {
	return (
		<div
			className="cinza3 flex flex-col items-center text-center px-3 py-5 
		rounded-lg w-[255px] hover:-translate-y-1 transition-all duration-300">
			<div>{props.icon}</div>
			<h1 className="mt-3 mb-4 font-semibold text-xl">{props.title}</h1>
			<h2 className="font-medium text-gray-400">{props.subTitle}</h2>
		</div>
	)
}
