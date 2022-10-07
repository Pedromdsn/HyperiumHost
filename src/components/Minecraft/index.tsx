import { MineShop } from "./MineShop"

import { config } from "src/config"

const Mine = () => {
	return (
		<div className="mx-auto mt-20 flex w-[88vw] max-w-[1300px] flex-col justify-center text-center">
			<h1 className="text-5xl font-semibold md:text-3xl">Hospedagem Minecraft</h1>
			<h2 className="text-lg text-gray-300 ">
				Abrir um servidor de Minecraft nunca foi tão fácil, com a Hyperium você une qualidade e um excelente desempenho!
			</h2>
			<div className="mb-20 flex flex-wrap justify-around gap-5">
				{config.single.map((item, index) => (
					<MineShop key={index} ico={item.ico} tamanho={item.tamanho} link={item.link} />
				))}
			</div>

			<h1 className="text-5xl font-semibold md:text-3xl">Plano para Network</h1>
			<h2 className="text-lg text-gray-300 ">Os planos perfeitos para servidores com diversas modalidades de jogos.</h2>
			<div className="mb-32 flex flex-wrap justify-around gap-5">
				{config.network.map((item, index) => (
					<MineShop key={index} ico={item.ico} tamanho={item.tamanho} link={item.link} />
				))}
			</div>
		</div>
	)
}

export default Mine
