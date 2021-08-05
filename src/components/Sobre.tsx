import Image from "next/image"
import Link from "next/link"
import pigman from "../../public/ezgif-7-2d7872661596.png"

export default function Sobre() {
	return (
		<div className="Sobre flex justify-center mt-20">
			<div className="cinzaClaro flex text-center w-4/6 h-80 items-center overflow-hidden justify-around rounded-2xl p-5 xl:h-auto">
				<div className="flex flex-col w-1/2 xl:w-full">
					<h1 className="font-bold text-4xl mb-3">A melhor hospedagem de minecraft</h1>
					<div className=" text-xl">
						<h2>Crie seu servidor agora mesmo com quem entende do assunto!</h2>
						<h2>Qualidade e confiança, é na Hyperium.</h2>
					</div>
					<div className="flex flex-row mt-10 font-semibold text-xl sm:text-base justify-evenly">
						<Link href="/minecraft" passHref>
							<button className="cinza2 mx-5 py-4 px-5 rounded-2xl">Ver Plano</button>
						</Link>
						<Link href="/minecraft" passHref>
							<button className="cinza2 mx-5 py-4 px-5 rounded-2xl">Sobre A Empresa</button>
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
