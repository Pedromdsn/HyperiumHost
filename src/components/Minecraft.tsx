import Image from "next/image"
import Terra from "../../public/terra-block.png"
import Grama from "../../public/grama-block.png"
import Madeira from "../../public/madeira-block.png"
import Gravel from "../../public/gravel-block.png"
import Pedra from "../../public/pedra.png"
import Carvao from "../../public/Coal-block.png"
import Ferro from "../../public/iron-block.png"
import Ouro from "../../public/gold-block.png"
import Diamante from "../../public/diamond-block.png"
import Esmeralda from "../../public/esmeralda.png"

export default function Mine() {
	return (
		<div className="flex flex-col w-2/3 justify-center text-center mx-auto mt-40">
			<h1 className="text-5xl font-extrabold">Hospedagem Minecraft</h1>
			<h2 className="text-lg text-gray-300 ">
				Abrir um servidor de Minecraft nunca foi tão fácil, com a Coffe você une qualidade e um excelente
				desempenho!
			</h2>
			<div className="flex flex-wrap justify-around mb-20">
				<MineShop ico={Terra} tamanho={2} />
				<MineShop ico={Grama} tamanho={4} />
				<MineShop ico={Madeira} tamanho={6} />
				<MineShop ico={Gravel} tamanho={8} />
				<MineShop ico={Pedra} tamanho={10} />
				<MineShop ico={Carvao} tamanho={12} />
				<MineShop ico={Ferro} tamanho={14} />
				<MineShop ico={Ouro} tamanho={16} />
			</div>

			<h1 className="text-5xl font-extrabold">Plano para Network</h1>
			<h2 className="text-lg text-gray-300 ">
				Os planos perfeitos para servidores com diversas modalidades de jogos.
			</h2>
			<div className="flex flex-wrap justify-around mb-32">
				<MineShop ico={Diamante} tamanho={24} />
				<MineShop ico={Diamante} tamanho={32} />
				<MineShop ico={Esmeralda} tamanho={48} />
				<MineShop ico={Esmeralda} tamanho={64} />
			</div>
		</div>
	)
}

type MineShopProps = {
	ico: any
	tamanho: number
}

function MineShop(props: MineShopProps) {
	return (
		<div className="cinzaClaro rounded-xl mt-20 mb-10">
			<div className="-mt-16">
				<Image src={props.ico} alt="Erro" />
			</div>
			<div>
				<h1 className="text-4xl font-extrabold mt-6">{props.tamanho}GB</h1>

				<h2 className="mt-8 text-gray-300 text-lg">
					De <strong>R$ {props.tamanho * 6}</strong> por
				</h2>
				<div className="flex text-center items-end justify-center">
					<h2 className="text-5xl font-semibold">R$ {props.tamanho * 5}</h2>
					<h2 className="text-xl">/mês</h2>
				</div>
				<h2 className="text-gray-300 text-lg">pra sempre</h2>

				<button className="text-lg font-semibold mt-10 rounded-2xl cinza2 px-10 py-4 mx-10">
					Escolher Plano
				</button>

				<p className="text-center mt-10 pb-10 text-lg">
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
