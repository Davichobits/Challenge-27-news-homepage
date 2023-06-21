import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const Main = () => {
  return (
    <main className=''>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>
      <div className='px-4 sm:flex'>
        <h2 className='text-5xl font-bold my-6'>The Bright Future of Web 3.0?</h2>
        <div>
          <p className='mb-8'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
      But is it really fulfilling its promise?</p>
        <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite'>Read more</button>
        </div>
      </div>
    </main>
  )
}