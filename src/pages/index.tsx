import TopHeadBar from '../components/HeadBar'
import Sobre from '../components/Home/Main'
import Why from '../components/Home/Why'
import EndFootBar from '../components/FootBar'
import Discord from '../components/Home/Discord'

export default function Home() {
  return (
    <div className="cinza text-white font-Poppins">  
        <TopHeadBar/>
        <Sobre/>
        <Why/>
        <EndFootBar/>
        <Discord/>
    </div>
  )
}
