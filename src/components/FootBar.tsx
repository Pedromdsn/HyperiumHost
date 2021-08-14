import Link from "next/link"
import { dev, eComercial } from "../icons/Footer"

export default function EndFootBar() {
	return (
		<div className="cinzaClaro flex justify-center">
			<div className="w-2/3 flex-col">
				<div className="End flex justify-around text-center mt-20 flex-wrap">
					<div>
						<h1>PRODUTOS</h1>
						<Link href="/minecraft" passHref>
							<h2>Hospedagem de Minecraft</h2>
						</Link>
					</div>
					<div>
						<h1>SUPORTE</h1>
						<h2>Base de conhecimento</h2>
						<h2>Chat de atendimento</h2>
					</div>
					<div>
						<h1>A EMPRESA</h1>
						<h2>Status da rede</h2>
						<h2>Trabalhe conosco</h2>
					</div>
				</div>
				<div className="flex justify-center flex-col items-center mb-20 mt-10 text-center font-medium text-lg">
					<h2 className="flex flex-wrap justify-center items-center">
						{dev} &#160; Desenvolvido por <strong>Coco Blanco</strong>
					</h2>
					<h2 className="flex flex-wrap justify-center items-center md:mt-4">
						2020 - 2021 &#160; {eComercial} &#160; Hyperium Hosting -{" "}
						<span>Todos direitos reservados.</span>
					</h2>
				</div>
			</div>
		</div>
	)
}
