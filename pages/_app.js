import AuthProvider from '../contexts/AuthContext'
import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/NavBar'
import "../flow/config.js";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className='bg-[#0d331e] flex flex-col min-h-screen'>
        <main className='container mx-auto flex-1 p-5'>
          <Navbar />
          <Head>
            <title>UBUNTU DAO</title>
            <meta name="description" content="Used by Emerald Academy" />
            <link rel="icon" href="/together.jpg" />
          </Head>
          <Component {...pageProps} />
        </main>
        <footer>
          <img className="w-full" src='/city.svg' alt='city' />
          <div className='bg-blue flex pt-10 pb-5 justify-center text-white'>
            <div className='w-[80%] flex justify-between items-center'>
              <div className='font-jet text-xs'>2023. All rights reserved.</div>
              <a className='flex items-center text-[#38E8C6] hover:underline hover:underline-offset-2 space-x-1 font-poppins text-lg' href='https://academy.ecdao.org/'><h1>Ubuntu</h1>
                <img src='/together.jpg' width={40} alt='@' />
                <h1>DAO</h1></a>
              <div className='font-jet text-xs'>Managed by <a href='https://kakooza.cranewebhosting.com' className='text-[#38E8C6] hover:underline hover:underline-offset-2 '>Ubuntu Foundation DAO</a></div>
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  )
}

export default MyApp
