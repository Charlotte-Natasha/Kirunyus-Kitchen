import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Services from '../components/Services'
import css from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout>
      <div className={css.container}>
      <Head>
        <title>Kirunyus Kitchen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="k-logo.png" />
      </Head>
      <main>
        <Hero/>
        <Services/>
      </main>
    </div>
    </Layout>
    
  )
}
