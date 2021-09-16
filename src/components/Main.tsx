import Image from "next/image"
import Link from "next/link"
import pigman from "../../public/ezgif-7-2d7872661596.png"

export default function Sobre() {
	return (
		<div className="Sobre flex justify-center mt-40">
			<div className="cinzaClaro flex text-center w-7/12 3xl:w-4/5  h-72 items-center overflow-hidden justify-around rounded-2xl p-5 xl:h-auto">
				<div className="flex flex-col xl:w-full gap-5 justify-center">
					<h1 className="font-black text-2xl mb-3 font-Montserrat uppercase px-4">A melhor hospedagem de minecraft</h1>
					<div className="text-lg text-gray-400 text-left">
						<h2>Crie seu servidor agora mesmo com quem entende do assunto!</h2>
						<h2>Qualidade e confiança, é na Hyperium.</h2>
					</div>
					<div className="flex flex-row mt-5 text-lg sm:text-base gap-5 text-gray-300">
						<Link href="/minecraft" passHref>
							<button className="cinza2 py-2 px-5 rounded-xl">Ver Plano</button>
						</Link>
						<Link href="/minecraft" passHref>
							<button className="cinza2 py-2 px-5 rounded-xl">Sobre A Empresa</button>
						</Link>
					</div>
				</div>
				<div className="xl:hidden">
					<Image src={pigman} alt="Erro" />
				</div>
			</div>
		</div>
	)
}
