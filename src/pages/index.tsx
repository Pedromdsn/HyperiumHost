import TopHeadBar from '../components/HeadBar'
import Sobre from '../components/Main'
import Why from '../components/Why'
import EndFootBar from '../components/FootBar'
import Discord from '../components/Discord'

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
