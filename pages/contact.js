import React, { useState } from 'react'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Contact = () => {
  const [userName, setUserName] = useState('');
  return (
    <main>
      <section className='pt-[87px] pb-[75px]'>
        <div className="site-container">
          <h1 className='text-center poppins font-bold text-[44px] leading-[140%] mb-[44px]'>Contact</h1>
          <div className='flex items-center justify-between'>
              <iframe src="https://yandex.com/map-widget/v1/-/CCUvjKv6WB" width={620} height={370} frameBorder="0" className='rounded-[20px]'></iframe>
            <div className='max-w-[508px] w-full'>
              <ul className='flex items-start justify-between'>
                <li className='max-w-[304px] w-full'>
                  <h2 className='poppins font-bold text-[24px] leading-[140%] mb-[12px]'>
                    Location
                  </h2>
                  <p className='poppins text-[20px] leading-[180%]'>
                    Almaty town, Amangeldi 59a, 7 floor, 702 a
                  </p>
                </li>
                <li>
                  <h2 className='poppins font-bold text-[24px] leading-[140%] mb-[12px]'>
                    Contact Us
                  </h2>
                  <p className='poppins text-[20px] leading-[180%]'>
                    8 700 450 11 50
                  </p>
                  <p className='poppins text-[20px] leading-[180%]'>
                    info@finenex.kz
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[75px] pb-[150px]'>
        <div className="mx-auto max-w-[1200px] w-full py-[80px] bg-[#E5E7EB] h-[400px] rounded-[6px]">
          <h2 className='text-center poppins font-semibold text-[44px] leading-[64px] mb-[40px] text-[#0F172A]'>Have a question ? Let’s get in touch with us.</h2>
          <p className='text-center poppins text-[18px] leading-[30px] mb-[40px] text-[#0F172A]'>Fill up the Form  and ou team will get back to within 24 hrs</p>
          <div className="mx-auto max-w-[817px] w-full flex items-center justify-between">
            <div className='max-w-[595px] w-full flex items-center justify-between'>
              <Input inputType={'text'} wrapperClassName={'max-w-[267px] w-full mr-[20px]'} inputClassName={'w-full py-[20px] pl-[30px] placeholder:text-[#98989C] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[20px] bg-[#F1F1F1]'} placeholder={'Enter a name'} value={''} />
              <Input inputType={'tel'} wrapperClassName={'max-w-[318px] w-full'} inputClassName={'w-full py-[20px] pl-[30px] placeholder:text-[#98989C] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[20px] bg-[#F1F1F1]'} placeholder={'Enter a phone number'} value={userName} onGetValue={(value) => setUserName(value)} />
            </div>
            <Button className={'max-w-[192px] py-[20px] w-full bg-[#F97316] rounded-[20px] font-bold text-base leading-[140%] poppins'}>
              Order a call
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact