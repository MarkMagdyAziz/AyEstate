import React from 'react'

function Discover() {
  return (
    <section className='w-full py-[50px] text-center flex justify-center'>
      <div className='w-[335px]'>
      <h2 className='font-bold text-4xl leading-[43px]'>
      Discover Your Dream Home Today
      </h2>
      <p className='text-sm font-normal mt-5'>
      Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!
      </p>
        <div className="flex justify-between mt-6 mb-[48px]">
          <button className='bg-app-primary rounded-xl py-3 px-6 font-semibold text-base text-black'>Explore Now</button>
          <button className='bg-transparent rounded-xl py-3 px-6 font-semibold text-base border-[1px] border-black text-black'>Learn More</button>
        </div>
        <img src="/Placeholder Image.png" alt="placeholder home"/>
      </div>
    </section>
  )
}

export default Discover