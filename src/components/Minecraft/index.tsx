import { MineShop } from "./MineShop"

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
import { StoreConfig } from "../../_config/config"
import { useEffect, useState } from "react"
const Mine = () => {
	return (
		<div className="flex flex-col w-[88vw] max-w-[1300px] justify-center text-center mx-auto mt-20">
			<h1 className="text-5xl font-semibold md:text-3xl">Hospedagem Minecraft</h1>
			<h2 className="text-lg text-gray-300 ">
				Abrir um servidor de Minecraft nunca foi tão fácil, com a Hyperium você une qualidade e um excelente desempenho!
			</h2>
			<div className="flex flex-wrap justify-around mb-20 gap-5">
				{StoreConfig.single.map((item, index) => (
					<MineShop key={index} ico={item.ico} tamanho={item.tamanho} link={item.link} />
				))}
			</div>

			<h1 className="text-5xl font-semibold md:text-3xl">Plano para Network</h1>
			<h2 className="text-lg text-gray-300 ">Os planos perfeitos para servidores com diversas modalidades de jogos.</h2>
			<div className="flex flex-wrap justify-around mb-32 gap-5">
				{StoreConfig.network.map((item, index) => (
					<MineShop key={index} ico={item.ico} tamanho={item.tamanho} link={item.link} />
				))}
			</div>
		</div>
	)
}

export default Mine
