import Link from "next/link"

import { FaDiscord } from "react-icons/fa"

const Discord = () => {
	return (
		<Link href="https://discord.gg/rcKAWjbk" passHref>
			<div className="bg-[#7289DA] fixed bottom-7 left-7 w-14 h-14 flex justify-center items-center rounded-full
			 cursor-pointer transform hover:rotate-12 hover:w-16 hover:h-16 transition-all duration-300">
				<FaDiscord size="35px"/>
			</div>
		</Link>
	)
}

export default Discord
