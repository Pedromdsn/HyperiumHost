import TopHeadBar from "../components/HeadBar"
import Mine from "../components/Minecraft"
import EndFootBar from '../components/FootBar'

export default function Minecraft(){
	return(
		<div className="cinza text-white">
			<TopHeadBar/>	
			<Mine/>
			<EndFootBar/>
		</div>
	)
}