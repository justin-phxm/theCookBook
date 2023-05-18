import React from 'react'
import Login from '@/components/Login'
import Head from 'next/head'

export default function login() {
  const siteTitle = 'Login/Register'
  return (
      <>        
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
        name="description"
        content="Save all your recipes with theCookBook"
        />
        {/* wtf is this below */}
        <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <div className="bg-gradient-to-r from-[#A7E4AF] to-[#F3E699] h-screen flex justify-center items-center">
        <div className="w-1/2 bg-white rounded-xl p-12">
          <a className='text-lg font-bold hover:opacity-50 flex justify-center'
          href="/">
            TheCookBook
          </a>
            <Login/>
          </div>
      </div>
  </>
  )
}
