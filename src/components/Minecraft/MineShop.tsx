import Image from "next/image"
export const MineShop = ({ ico, tamanho, link }: MineCraftItem) => {
	return (
		<div className="cinzaClaro rounded-lg mt-20 mb-10 px-6 pb-2">
			<div className="-mt-16 relative">
				<Image src={"/" + ico + ".png"} alt="Erro" width={200} height={170} lazyBoundary="500px"/>
			</div>
			<div className="flex flex-col">
				<h1 className="text-5xl font-semibold mt-4 mb-5 md:text-4xl">{tamanho}GB</h1>
				<h2 className="text-gray-300">
					De <strong>R$ {tamanho * 6}</strong> por
				</h2>
				<div className="flex text-center items-end justify-center">
					<h2 className="text-3xl font-semibold md:text-2xl">R$ {tamanho * 5}</h2>
					<h2 className="text-lg">/mês</h2>
				</div>
				<h2 className="text-gray-300">pra sempre</h2>

				<a href={link} className="font-semibold mt-5 rounded-lg cinza2 px-12 py-2 ">
					Escolher Plano
				</a>

				<p className="mt-5 pb-5 text-left ml-4">
					Jogadores Ilimitados
					<br /> Proteção Anti-DDoS
					<br /> Suporta a 1.16+
					<br /> Suporte à Plugins e Mods
					<br /> Banco de dados MySQL
					<br /> Ping de 10 ~ 20ms
				</p>
			</div>
		</div>
	)
}
