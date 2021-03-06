import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AipordSectionPro from '../components/airpod-section'
import AirpodVidComp from '../components/airpod-vid'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:justify-start space-y-12 bg-[#f4f4f9] overflow-hidden'>
      <Head>
        <title>Airpod apple website clone by tofunmi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <AirpodVidComp /> 
    <AipordSectionPro />
    </div>
  )
}

export default Home
