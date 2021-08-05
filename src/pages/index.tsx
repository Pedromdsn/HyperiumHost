import Head from 'next/head'
import Image from 'next/image'
import TopHeadBar from '../components/HeadBar'
import Sobre from '../components/Sobre'
import Why from '../components/Why'
import EndFootBar from '../components/FootBar'

export default function Home() {
  return (
    <div className="cinza text-white">  
        <TopHeadBar/>
        <Sobre/>
        <Why/>
        <EndFootBar/>
    </div>
  )
}
