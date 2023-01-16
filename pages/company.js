import React from 'react'
import CompanyCard from '../components/CompanyCard/CompanyCard'
import CompanyFinnexPurpose from '../public/assets/images/FinenexsPurpose.jpg'
import IbexlabsVision from '../public/assets/images/IbexlabsVision.jpg'

const Company = () => {
  return (
    <main>
      <section className='bg-[url("../public/assets/images/FinenexLTD.jpg")] bg-no-repeat bg-cover company-hero'>
        <div className='h-[824px] max-w-[1200px] mx-auto flex flex-col justify-end'>
          <h2 className='poppins font-bold text-[56px] leading-[120%] text-[#F9F9FB] mb-[40px]'>Finenex LTD</h2>
          <p className='poppins text-[20px] leading-[180%] text-[#F9F9FB] mb-[100px]'>Finenex is a Kazakh–Korean fintech company engaged in the development and implementation of high-tech software solutions for various business areas.</p>
        </div>
      </section>
      <section className='pt-[48px] pb-[150px]'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-[150px]'>
          <CompanyCard wrapperClassName={''} image={CompanyFinnexPurpose} title={'Finenex’s Purpose'} description={'Optimal automation of any field of activity through the introduction of advanced financial technologies and high-quality service'} />
          <CompanyCard wrapperClassName={'flex-row-reverse'} image={IbexlabsVision} title={"Ibexlab's Vision"} >
            <p className='poppins text-[20px] leading-[180%] text-[#F9F9FB]'>Business should be:</p>
            <p>- As <span className='text-[#FC9D4F]'>profitable</span> as possible.</p>
            <p>- <span className='text-[#FC9D4F]'>Easy</span> and <span className='text-[#FC9D4F]'>comfortable</span> to manage.</p>
            <p>- Bringing <span className='text-[#FC9D4F]'>pleasure.</span></p>
          </CompanyCard>
          <CompanyCard wrapperClassName={''} image={CompanyFinnexPurpose} title={'Company requisites'} ><p className='poppins text-[20px] leading-[180%] text-[#F9F9FB]'>LLP Finenex</p><p className='poppins text-[20px] leading-[180%] text-[#F9F9FB]'>BIN: 220140013991</p></CompanyCard>
        </div>
      </section>
    </main>
  )
}

export default Company