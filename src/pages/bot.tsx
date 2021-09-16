import TopHeadBar from "../components/HeadBar"
import Mine from "../components/Minecraft"
import EndFootBar from '../components/FootBar'
import Bot from "../components/Bot"

export default function Minecraft(){
	return(
		<div className="cinza text-white">
			<TopHeadBar/>	
			<Bot/>
			<EndFootBar/>
		</div>
	)
}