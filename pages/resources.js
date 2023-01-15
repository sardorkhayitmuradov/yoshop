import React from 'react'
import Accordion from '../components/Accordion/Accordion'
import ResourcesCard from '../components/ResourcesCard/ResourcesCard'

const Resources = () => {
  const resourcesVideos = [
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
    {
      id: Math.random()*10,
      title: 'How to use YoShop. Basic rules',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      video: '/assets/videos/mov_bbb.mp4'
    },
  ]

  const accordionData = [
    {
      id: Math.random()*100,
      title: 'Does YoShop have automatic inventory?',
      description: `
        We have a very favorable interest rate:
        from 1.9% for bank cards;
        0.9% for Halyk QR;
        0.95% for Kaspi QR.
      `,
    },
    {
      id: Math.random()*100,
      title: 'What types of payments are accepted?',
      description: `
        We have a very favorable interest rate:
        from 1.9% for bank cards;
        0.9% for Halyk QR;
        0.95% for Kaspi QR.
      `,
    },
    {
      id: Math.random()*100,
      title: 'Does YoShop know how to work with labeled goods??',
      description: `
        We have a very favorable interest rate:
        from 1.9% for bank cards;
        0.9% for Halyk QR;
        0.95% for Kaspi QR.
      `,
    },
    {
      id: Math.random()*100,
      title: 'What fees does YoShop have when accepting non-cash payments?',
      description: `
        We have a very favorable interest rate:
        from 1.9% for bank cards;
        0.9% for Halyk QR;
        0.95% for Kaspi QR.
      `,
    }
  ]

  return (
    <main className=''>
      <section className='py-[50px]'>
        <div className='mx-auto max-w-[1360px]'>
            <h2 className='poppins font-bold text-[44px] leading-[140%] text-[#F9F9FB] text-center mb-[24px]'>Resources</h2>
            <p className='poppins text-[18px] leading-[180%] text-[#F9F9FB] text-center mb-[50px]'>
              On this section you can find the questions you are interested in and instructional videos
            </p>
            <ul className='flex items-center justify-between flex-wrap gap-[40px]'>
              {
                resourcesVideos.length > 0 ? resourcesVideos.map(resVideo => {
                  return (
                    <ResourcesCard key={resVideo.id} video={resVideo.video} title={resVideo.title} description={resVideo.description} />
                  )
                }) : ''
              }
            </ul>
        </div>
      </section>
      <section className="py-[82px]">
        <h1 className='poppins font-bold text-[32px] leading-[140%] text-[#F9F9FB] text-center mb-[44px]'>FAQ</h1>
        <div className='max-w-[1152px] w-full mx-auto'>
          {
            accordionData.map(accordion => {
                return (
                  <Accordion key={accordion.id} title={accordion.title} content={accordion.description} />
                )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Resources