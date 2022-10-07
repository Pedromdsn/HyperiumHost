import Link from "next/link"
import { useState } from "react"
import { config } from "../config"

import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

export default function TopHeadBar() {
	const [menu, setMenu] = useState(!false)

	return (
		<div className=" flex items-center justify-center font-semibold ">
			<div
				className={
					menu
						? "mt-10 flex w-5/6 items-center justify-between overflow-hidden transition-all md:-mt-20 md:h-0"
						: "flex w-5/6 flex-col transition-all md:mt-28"
				}
			>
				<div className="flex gap-3 md:flex-col md:gap-1">
					<Link href="/" passHref>
						<div className="flex cursor-pointer items-center rounded-xl bg-cinza-100 px-4 py-2 font-normal">
							<AiOutlineHome size={20} /> <span className="ml-2">Pagina Inicial</span>
						</div>
					</Link>
					<Link href="/minecraft" passHref>
						<div className="flex cursor-pointer items-center px-4 py-2">
							<AiOutlineInbox size={20} /> <span className="ml-2">Minecraft</span>
						</div>
					</Link>
				</div>
				<div className="flex gap-3 md:flex-col md:gap-1">
					<Link href={config.login} passHref>
						<div className="flex cursor-pointer items-center px-4 py-2">Login</div>
					</Link>
					<Link href={config.createAccount} passHref>
						<div className="flex cursor-pointer items-center rounded-xl bg-cinza-100 px-4 py-2">Criar minha conta</div>
					</Link>
				</div>
			</div>
			<div className="top-10 right-10 hidden cursor-pointer md:absolute md:flex" onClick={() => setMenu(!menu)}>
				<GiHamburgerMenu size={20} />
			</div>
		</div>
	)
}
