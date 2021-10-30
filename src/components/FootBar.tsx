import Link from "next/link"
import { dev, eComercial } from "../icons/Footer"

export default function EndFootBar() {
	return (
		<div className="cinzaClaro flex justify-center">
			<div className="w-[80vw] max-w-[1500px] flex-col">
				<div className="End flex justify-around text-center mt-20 flex-wrap">
					<div>
						<h1>PRODUTOS</h1>
						<Link href="/minecraft" passHref>
							<a href="#">Hospedagem de Minecraft</a>
						</Link>
					</div>
					<div>
						<h1>SUPORTE</h1>
						<a href="#">Base de conhecimento</a>
						<a href="#">Chat de atendimento</a>
					</div>
					<div>
						<h1>A EMPRESA</h1>
						<a href="#">Status da rede</a>
						<a href="#">Trabalhe conosco</a>
					</div>
				</div>
				<div className="flex justify-center flex-col items-center mb-20 mt-10 text-center font-medium">
					<h2 className="flex flex-wrap justify-center items-center">
						{dev} &#160; Desenvolvido por&#160;
						<a href="https://cocoblanco.fun" target="_blank" className="font-bold" rel="noreferrer">
							Coco Blanco
						</a>
					</h2>
					<h2 className="flex flex-wrap justify-center items-center md:mt-4">
						2020 - 2021 &#160; {eComercial} &#160; Hyperium Hosting - <span>Todos direitos reservados.</span>
					</h2>
				</div>
			</div>
		</div>
	)
}
