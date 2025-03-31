import React from 'react'
import hero from './image-src/hero-img-01.webp'
import car from './image-src/car-img.webp'
import Card from './Card'
import Discoverbtn from './Discoverbtn'
import Card2 from './Card2'
import logo from "./image-src/reiro2.svg"
import Sellerbtn from './Sellerbtn'
import Footer from './Footer'
// import { FaArrowRightLong } from "react-icons/fa6";


const Home = () => {


  let user = [
    {
      img: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/photo-1642698335353-c7866176c8ee.jpeg",
      link1: "Lifestyle",
      link2: "Eco",
      link3: "Health",
      heading: "We are stronger as a group than an individual",
      dec: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,",
      footerLink: "https://reiro-sepia.fueko.net/author/damian/",
      footerBy: "Damian Erdman",
    },
    {
      img: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/kevin-schmid-MJG_6nF1jWE-unsplash.jpg",
      link1: "Lifestyle",
      link2: "Interior",
      link3: "Design",
      heading: "Every day, in every city and town across the country",
      dec: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,",
      footerLink: "https://reiro-sepia.fueko.net/author/damian/",
      footerBy: "Damian Erdman",
    },
    {
      img: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/roel-varor-rZKF1jd3kfU-unsplash.jpg",
      link1: "Lifestyle",
      link2: "Eco",
      link3: "Health",
      heading: "I believe the world is one big family",
      dec: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,",
      footerLink: "https://reiro-sepia.fueko.net/author/damian/",
      footerBy: "Damian Erdman",
    },

    {
      img: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/sylvie-michel-RVyNNNsn9Eg-unsplash-2.jpg",
      link1: "Lifestyle",
      link2: "Eco",
      // link3:"Health",
      heading: "A healthy outside starts from the inside",
      dec: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,",
      footerLink: "https://reiro-sepia.fueko.net/author/damian/",
      footerBy: "Damian Erdman",
    },
    {
      img: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/aliya-amangeldi-P_gB8h6znSQ-unsplash-1.jpg",
      link1: "Lifestyle",
      link2: "Eco",
      link3: "Health",
      heading: "Everyone has a different life story",
      dec: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,",
      footerLink: "https://reiro-sepia.fueko.net/author/damian/",
      footerBy: "Damian Erdman",
    },
    {
      img: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/photo-1615269759575-4e43ad7eef04.jpeg",
      link1: "Lifestyle",
      link2: "Eco",
      link3: "Health",
      heading: "Look at life with the eyes of a child",
      dec: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,",
      footerLink: "https://reiro-sepia.fueko.net/author/damian/",
      footerBy: "Damian Erdman",
    },

  ]

  let cards = [
    {
      image: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/photo-1530109167181-4c8c11f6d317.jpeg",
      head: "A healthy outside starts from the inside",
      footerLinks: "https://reiro-sepia.fueko.net/author/damian/",
      footBy: "Daryl wehner",
    },

    {
      image: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/sylvie-michel-RVyNNNsn9Eg-unsplash-2.jpg",
      head: "Everyone has a different life story",
      footerLinks: "https://reiro-sepia.fueko.net/author/damian/",
      footBy: "Daryl wehner",
    },

    {
      image: "https://reiro-sepia.fueko.net/content/images/size/w600/format/webp/2022/10/taylor-flowe-XOs1tP-K6bk-unsplash.jpg",
      head: "Look at life with the eyes of a child",
      footerLinks: "https://reiro-sepia.fueko.net/author/damian/",
      footBy: "Breana Flately, Daryl wehner",
    },

    

  ]



  return (
    <>

      {/* page-1 */}
      <div id='home-page' style={{ backgroundColor: '#f1efe3' }} className='h-auto  w-full flex justify-center flex-col items-center overflow-x-hidden'>

        <div id='home-cont' className='h-[40%] w-[50%] flex-col flex justify-center items-center gap-8 mt-15 mb-10'>
          <h1 id='reiro' className='text-7xl text-center font-bold'> Hey, we’re Reiro.</h1>
          <h2 id='stories-idea' className='text-5xl text-center'>See our thoughts, stories and ideas.</h2>
          <input id='search-post' type="text" placeholder="Enter text here..." style={{ width: "350px", height: "50px", p: "5px", border: "1px solid gray" }} className='rounded-3xl pl-10' />
        </div>

        <div id='home-img-con' className='h-[70%] w-[80%] flex justify-center pt-12 gap-8'>
          <div id='img-sec' className=' relative h-180 w-[70%] bg-blue-500 rounded-4xl '>
            <img className='h-full w-full  object-cover rounded-4xl' src={hero} alt="" />
            <p id='text' className='absolute bottom-182'>WHAT'S NEW?</p>

            <div id='img-foot-text' className='w-80 flex pb-1 pt-2 gap-2'>
              <p id='lifestyle' style={{ backgroundColor: '#e0e0d4' }} className='pl-5 pr-5 pb-1 pt-1 rounded-2xl'>Lifestyle</p>
              <p id='eco' style={{ backgroundColor: '#e0e0d4' }} className='pl-4 pr-4 pb-1 pt-1 bg-green-500 rounded-2xl' >Eco</p>
              <p id='health' style={{ backgroundColor: '#e0e0d4' }} className='pl-5 pr-5 pb-1 pt-1 bg-green-500 rounded-2xl'>Health</p>
            </div>
          </div>

          <div id='img-left-cont' className=' relative h-200 w-[40%] flex flex-col  '>
            <div id='newsletter' style={{ backgroundColor: '#5118aa' }} className='h-[43%] w-[92%] rounded-3xl flex flex-col justify-center gap-2 '>
              <p id='newsletter-txt' className='ml-10 text-white'>NEWSLETTER</p>
              <h2 id='latest-post' className='text-4xl font-bold ml-10 text-white'>Get all the latest posts delivered straight to your inbox.</h2>
              <input id='maill' type="text" placeholder='Your Email address' className='ml-10 mt-3 bg-white rounded-4xl pl-8 h-[50px] w-[350px]' />
              <a href="#"><button id='subscribe-btn' className='rounded-3xl font-bold bg-white hover:text-black ml-10 pl-32 pr-32 pt-3 pb-3  text-xl'> Subscribe</button></a>
            </div>

            <div id='car-img' className='h-[43%] w-[92%] bg-blue-500 rounded-3xl mt-5'>
              <img className='h-full w-full  object-cover rounded-3xl' src={car} alt="" />
            </div>

            <div id='home-img-foot' className='w-60 flex gap-5 mt-2'>
              <p style={{ backgroundColor: '#e0e0d4' }} className='pl-5 pr-5 pb-1 pt-1 rounded-2xl'>Idea</p>
              <p style={{ backgroundColor: '#e0e0d4' }} className='pl-5 pr-5 pb-1 pt-1 rounded-2xl' >Retro</p>
            </div>
          </div>
        </div>

      </div>

      {/* page1-end */}



      {/* page-2 */}

      <div style={{ backgroundColor: '#f1efe3' }} className='h-[auto] w-full flex justify-center py-5 overflow-hidden relative page2'>

        <div className='w-[70%] h-full page2-main rounded-3xl relative overflow-hidden s:w-[90%]'>

          <div className='bg-blue-800/50 w-full h-full py-5'>


            <div id='car-2-head' className='flex flex-col justify-center items-center mb-10'>
              <p className='text-white text-2xl pt-10'>Editor’s Choice</p>
              <h2 className='text-white text-5xl font-bold text-center pt-5'>Get started with our best stories</h2>
            </div>

            <div id='card-box' className='flex justify-center items-center flex-wrap gap-10 pt-10'>
              {
                cards.map((det) => {
                  return (
                    <>
                      <Card2 cardImage={det.image} cardHeader={det.head} cardFooterLinks={det.footerLinks} cardFooterLinkTexts={det.footBy} />
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>



      </div>



      {/* page2-end */}



      {/* page-3 */}
      <div id='page-3' style={{ backgroundColor: '#f1efe3' }} className=" h-auto w-full flex justify-center flex-col items-center overflow-x-hidden ">
        <div id='row1' className=" flex flex-wrap justify-center gap-3 w-[90%]">
          {
            user.map((del) => {
              return (
                <>
                  <Card cardImg={del.img} cl1={del.link1} cl2={del.link2} cl3={del.link3} cardHead={del.heading} cardPara={del.dec} cardFooterLink={del.footerLink} cardFooterLinkText={del.footerBy} />
                </>
              )
            })
          }
        </div>

        <div id='discover-btn' className='h-20 w-full flex justify-center items-center'>
          <Discoverbtn />
        </div>

      </div>

      {/* page3-end */}


      {/* page-4 */}
      <div id='page-4' style={{ backgroundColor: '#f1efe3' }} className=' w-full flex justify-center overflow-x-hidden'>
        <div id='page4-main' className='w-[70%] flex justify-between mt-20 border-b border-black-200'>
          <div id='page4-box' className='h-[180px] w-[450px]'>
            <div id='logo-2'>
              <img className='h-10' src={logo} alt="" />
            </div>
            <div id='minimal' className='pt-10'>
              <p className='text-5sm text-black-400'>A minimal, functional theme for running a <br /> paid-membership publication on Ghost.</p>
            </div>
          </div>

          <div id='page4-box' className='h-[180px] w-[450px]'>
            <Sellerbtn />
          </div>
        </div>
      </div>

      {/* page4-end */}



      {/* footer */}

      <div id='footer' style={{ backgroundColor: '#f1efe3' }} className='w-full flex flex-col justify-center items-center overflow-x-hidden'>
        <Footer />
      </div>

      {/* footer-end */}

    </>
  )
}

export default Home