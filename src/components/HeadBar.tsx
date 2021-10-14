import { useState } from "react"
import { burguer, homePage, minecraft } from "../icons/HeadBar"
import Link from "next/link"

export default function TopHeadBar() {
	const [menu, setMenu] = useState(!false)

	return (
		<div className={"TopHeadBar flex justify-center items-center font-semibold "}>
			<div
				className={
					menu
						? "w-5/6 md:h-0 md:-mt-20 overflow-hidden flex justify-between items-center mt-10 transition-all"
						: "flex flex-col w-5/6 md:mt-28 transition-all"
				}>
				<div className="">
					<Link href="/" passHref>
						<div className="cinzaClaro rounded-xl flex items-center font-normal">
							{homePage} <span>Pagina Inicial</span>
						</div>
					</Link>
					<Link href="/minecraft" passHref>
						<div className="flex items-center">
							{minecraft} <span>Minecraft</span>
						</div>
					</Link>
				</div>
				<div className="flex gap-5 children:px-4 children:py-2">
					<a href="#">Login</a>
					<a href="#" className="cinzaClaro rounded-xl">
						Criar minha conta
					</a>
				</div>
			</div>
			<div className="hidden cursor-pointer md:flex md:absolute top-10 right-10" onClick={() => setMenu(!menu)}>
				{burguer}
			</div>
		</div>
	)
}
